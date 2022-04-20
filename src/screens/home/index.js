import { UserCard } from "../../components";
import useGetResults from "../../hooks/useGetResults";

const HomeScreen = () => {
  const { data } = useGetResults("https://api.github.com/users");
  const renderUsers = () => {
    return data.map((user) => <UserCard user={user} key={user.id}/>);
  };
  return (
    <div className="mx-auto py-4 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-8">
        <ul role="list" className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
          {renderUsers()} 
        </ul>
      </div>
  );
};

export default HomeScreen;
