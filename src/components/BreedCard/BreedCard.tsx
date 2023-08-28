import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Cat } from "../../api/dto/getCats.dto";

import "./BreedCard.scss";

interface BreedCardProps {
  image: Cat
}

export const BreedCard: FC<BreedCardProps> = ({ image }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Link className="breed-card" to={`/breeds/${image.id}`}>
      <div
        className="breed-card__image-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img className="breed-card__image" src={image.url} alt="Breed" />
        {hovered && (
          <div className="breed-card__name">
            {image?.breeds[0]?.name || "Just cute cat"}
          </div>
        )}
      </div>
    </Link>
  );
};
