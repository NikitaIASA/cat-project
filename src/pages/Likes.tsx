import { FC } from "react";
import VoteDashboard from "../components/VoteDashboard";
import { useLikeData } from "../api/useLikeData";

export const LikesPage: FC = () => {
  const { data, isLoading } = useLikeData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (data && data.length === 0) {
    return <div>No liked cats :(</div>;
  }

  return <VoteDashboard data={data || []} />;
};
