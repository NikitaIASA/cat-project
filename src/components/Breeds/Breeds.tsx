import { FC } from "react";
import { getCatDto } from "../../api/dto/getCats.dto";
import { GetBreedsDto } from "../../api/dto/getBreeds.dto";

interface BreedsProps {
  data: getCatDto;
  breeds: GetBreedsDto;
  breed: string;
  limit: number;
  sorting: string;
  setBreed: (value: string) => void;
  setLimit: (value: number) => void;
  setSorting: (value: string) => void;
}

export const Breeds: FC<BreedsProps> = ({
  data,
  breeds,
  breed,
  limit,
  setBreed,
  setLimit,
  setSorting,
}) => {
  return (
    <div>
      <select value={breed} onChange={(e) => setBreed(e.target.value)}>
        <option value="">Select a breed</option>
        {breeds && breeds.map((breedOption) => (
          <option key={breedOption.id} value={breedOption.id}>
            {breedOption.name}
          </option>
        ))}
      </select>
      <select value={limit} onChange={(e) => setLimit(Number(e.target.value))}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
      </select>
      <button onClick={() => setSorting("ascending")}>Sorting A-Z</button>
      <button onClick={() => setSorting("descending")}>Sorting Z-A</button>
      {data && (
        <div>
          {data.map((image) => (
            <img key={image.id} src={image.url} alt="Cat" />
          ))}
        </div>
      )}
    </div>
  );
};
