import { FC, useState } from "react";
import Breeds from "../components/Breeds";
import { useCatsData } from "../api/useCatsData";
import { useBreedData } from "../api/useBreedData";

export const BreedsPage: FC = () => {
  const [breed, setBreed] = useState<string>("");
  const [limit, setLimit] = useState<number>(10);
  const [sorting, setSorting] = useState<string>("");

  const { data, isLoading, isError } = useCatsData(breed, limit, sorting);
  const { data: breeds } = useBreedData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong...</div>;
  }

  if (!data) {
    return <div>No cat found :(</div>;
  }

  return (
    <Breeds
      data={data}
      breeds={breeds}
      breed={breed}
      limit={limit}
      sorting={sorting}
      setBreed={setBreed}
      setLimit={setLimit}
      setSorting={setSorting}
    />
  );
};
