import { FC } from "react";
import { useParams } from "react-router";
import { useSingleCatData } from "../api/useSingleCat";
import CatProfile from "../components/CatProfile";

interface CatPageProps {}

export const CatPage: FC<CatPageProps> = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useSingleCatData({ id: id || "" });

  console.log(data);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  if (isError) {
    return <p>Something went wrong</p>;
  }

  if (!data || !data.breeds || data.breeds.length === 0) {
    return <p>No cat data found</p>;
  }

  return data && <CatProfile image={data.url} {...data.breeds[0]} />;
};
