import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { EmptyState, UserCard } from "../../components";
import useGetResults from "../../hooks/useGetResults";

export default function HomePage() {
  const { search } = useLocation();

  const [getResults, results] = useGetResults(
    search
      ? `https://api.github.com/search/users${search}`
      : "https://api.github.com/users"
  );

  useEffect(() => {
    getResults();
  }, [search]);

  const getUsers = () => {
    const data = results?.data.items ? results.data.items : results.data;
    return data ? (
      data.map((user) => <UserCard user={user} key={user.id} />)
    ) : (
      <EmptyState title={"user"} />
    );
  };

  return (
    <div className="mx-auto py-4 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-8">
      <ul
        role="list"
        className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8"
      >
        {getUsers()}
      </ul>
    </div>
  );
}
