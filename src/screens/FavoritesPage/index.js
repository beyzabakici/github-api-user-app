import { useSelector } from "react-redux";
import { RepoCard } from "../../components";
import EmptyState from "../../components/EmptyState";

export default function FavoritesPage() {
  const { favorites } = useSelector((state) => state.mainReducer);

  const getRepos = () => {
    return favorites.length ? favorites.map((repo) => (
      <RepoCard repo={repo} id={repo.id} isFavoritesItem={false} />
    )) : <EmptyState title={'favorites'}/>;
  };

  return (
    <div className="flex flex-row flex-wrap justify-center mt-4 px-8 xl:px-20">
      {getRepos()}
    </div>
  );
}
