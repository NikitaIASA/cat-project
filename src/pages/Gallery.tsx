import { FC, useState } from "react";
import Gallery from "../components/Gallery";
import { useGalleryData } from "../api/useGalleryData";
import { useBreedData } from "../api/useBreedData";

export const GalleryPage: FC = () => {
  const [breed, setBreed] = useState<string>("");
  const [limit, setLimit] = useState<number>(5);
  const [sorting, setSorting] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [page, setPage] = useState<number>(0);

  const { data: breeds } = useBreedData();
  const { data } = useGalleryData({ breed, limit, sorting, type, page });

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <Gallery
      breeds={breeds || []}
      data={data || []}
      selectedBreed={breed}
      setSelectedBreed={setBreed}
      selectedOrder={sorting}
      setSelectedOrder={setSorting}
      selectedType={type}
      setSelectedType={setType}
      limit={limit}
      setLimit={setLimit}
      onNextPage={handleNextPage}
      setPage={setPage}
    />
  );
};
