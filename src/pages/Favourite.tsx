import { FC } from "react";
import VoteDashboard from "../components/VoteDashboard";
import { useFavoriteData } from "../api/useFavouriteData";

export const FavouritePage: FC = () => {
  const { data, isLoading } = useFavoriteData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No favorite cats :(</div>;
  }

  return <VoteDashboard data={data} />;
};
