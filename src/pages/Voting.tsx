import { FC } from "react";
import Voting from "../components/Voting";
import { useRandomCat } from "../api/useRandomCat";

export const VotingPage: FC = () => {
  const { data, isLoading, isError } = useRandomCat();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong...</div>;
  }

  if (!data) {
    return <div>No cat found :(</div>;
  }

  return <Voting data={data}/>;
};
