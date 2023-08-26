import { FC } from "react";
import Favourites from "../components/Favourites";
import { useFavoriteData } from "../api/useFavouriteData";

export const FavouritePage: FC = () => {
  const { data, isLoading, fetchNextPage } = useFavoriteData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No favorite cats :(</div>;
  }

  return <Favourites data={data} fetchNextPage={fetchNextPage} />;
};
