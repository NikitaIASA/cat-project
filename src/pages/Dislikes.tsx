import { FC } from "react";
import { useDislikeData } from "../api/useDislike";
import VoteDashboard from "../components/VoteDashboard";

export const DislikesPage: FC = () => {
  const { data, isLoading } = useDislikeData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (data && data.length === 0) {
    return <div>No disliked cats :(</div>;
  }

  return <VoteDashboard data={data || []} />;
};
