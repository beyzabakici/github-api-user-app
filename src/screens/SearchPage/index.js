import React from "react";
import { EmptyState, RepoCard } from "../../components";
import useGetResults from "../../hooks/useGetResults";

export default function SearchPage(props) {
  const query = props.query?.slice(1, -1);
  const { data } = useGetResults(
    `https://api.github.com/search/repositories?q=${query}`
  );

  const getRepos = () => {
    return data.items?.length ? (
      data.items?.map((repo) => (
        <RepoCard repo={repo} key={repo.id} isFavoritesItem={false} />
      ))
    ) : (
      <EmptyState title={"repos"} />
    );
  };

  return (
    <div className="flex flex-row flex-wrap justify-center mt-4 px-8 xl:px-20">
      {getRepos()}
    </div>
  );
}
