import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorites,
  removeFavorites,
} from "../../store/actions/main.reducer";

import FavoriteButton from "../FavoriteButton";

export default function RepoCard(props) {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.mainReducer);
  const [isFavorite, setFavorite] = useState(false);
  const { language, created_at, description, name, clone_url, id } = props.repo;
  const formatedDate = new Date(created_at).toLocaleString(undefined, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  useEffect(() => {
    isFavoritesItem();
  }, [favorites]);

  const onClickFavorite = () => {
    const fn = isFavorite ? removeFavorites : addFavorites;

    return dispatch(fn(props.repo));
  };

  const isFavoritesItem = () => {
    setFavorite(favorites.includes(props.repo));
  };
  return (
    <div className="mx-4 max-w-md lg:w-1/2 w-4/5 py-4 px-8 bg-gray-800 shadow-lg rounded-lg my-4 ">
      <p className="text-xs text-gray-400 mb-3">{formatedDate}</p>
      <div>
        <a className="text-gray-300 text-xl font-semibold" href={clone_url}>
          {name}
        </a>
        {description && (
          <p className="mt-2 text-gray-400 text-base">{description}</p>
        )}
      </div>
      {language && (
        <p className="flex text-sm text-gray-400 justify-start mt-2">
          {language}
        </p>
      )}
      <div className="flex justify-end mt-4">
        <FavoriteButton
          onClick={() => onClickFavorite()}
          isFavoritesItem={isFavorite}
        />
      </div>
    </div>
  );
}
