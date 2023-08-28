import { FC } from "react";
import { getCatDto } from "../../api/dto/getCats.dto";
import BreedCard from "../BreedCard";

import "./BreedList.scss";

interface BreedListProps {
  data: getCatDto;
}

export const BreedList: FC<BreedListProps> = ({ data }) => {
  return (
    <div className="breed-list">
      {data && data.map((image) => <BreedCard key={image.id} image={image} />)}
    </div>
  );
};
