import { useSelector, useDispatch } from "react-redux";
import { UserCard } from "../../components";
import useGetUserRepos from "../../hooks/useGetUserRepos";
import useGetUsers from "../../hooks/useGetUsers";

const HomeScreen = () => {
  const { mainReducer } = useSelector((state) => state);
  const data = useGetUsers();
  const repos = useGetUserRepos('mojombo');
  console.log(data, mainReducer, repos)
  return (
    <div>
      <UserCard/>
    </div>
  );
};

export default HomeScreen;
