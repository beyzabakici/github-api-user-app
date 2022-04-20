import React from "react";
import { FavoriteIcon } from "../../assets";

export default function FavoriteButton({onClick, isFavoritesItem}) {
  return (
    <button onClick={() => onClick()}>
      <FavoriteIcon
        selected={isFavoritesItem}
        width={30}
        height={30}
        currentColor="rgba(124, 58, 237)"
      />
    </button>
  );
}
