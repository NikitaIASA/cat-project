import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { getCatDto } from "../../api/dto/getCats.dto";
import { GetBreedsDto } from "../../api/dto/getBreeds.dto";

import "./Breeds.scss";

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
  const [hoveredCatBreed, setHoveredCatBreed] = useState<string | null>(null);

  const handleMouseEnter = (breed: string) => {
    setHoveredCatBreed(breed);
  };

  const handleMouseLeave = () => {
    setHoveredCatBreed(null);
  };

  return (
    <div className="breeds">
      <div className="breeds__flex">
        <div className="breeds__navigation">
          <Link to="/">
            <svg
              className="voting__arrow-back"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clipPath="url(#clip0_1_85)">
                <path
                  d="M4.70999 10.9901L13.3097 19.5896C13.8567 20.1369 14.7437 20.1369 15.2905 19.5896C15.8373 19.0427 15.8373 18.1558 15.2905 17.6091L7.68104 9.99988L15.2902 2.39096C15.8371 1.84391 15.8371 0.957107 15.2902 0.410284C14.7434 -0.136761 13.8565 -0.136761 13.3095 0.410284L4.70977 9.00985C4.43635 9.28339 4.2998 9.64153 4.2998 9.99983C4.2998 10.3583 4.43662 10.7167 4.70999 10.9901Z"
                  fill="#FF868E"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_85">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <h2 className="breeds__title">Breeds</h2>
        </div>
        <div className="breeds__options">
          <select
            className="breeds__select"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          >
            <option value="">All breeds</option>
            {breeds &&
              breeds.map((breedOption) => (
                <option key={breedOption.id} value={breedOption.id}>
                  {breedOption.name}
                </option>
              ))}
          </select>
          <select
            className="breeds__limit"
            value={limit}
            onChange={(e) => setLimit(Number(e.target.value))}
          >
            <option value={5}>Limit: 5</option>
            <option value={10}>Limit: 10</option>
            <option value={15}>Limit: 15</option>
            <option value={20}>Limit: 20</option>
          </select>
          <svg
            className="breeds__sort-button"
            onClick={() => setSorting("ascending")}
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <rect width="40" height="40" rx="10" fill="#F8F8F7" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 9.21284C15.2603 8.92905 15.6825 8.92905 15.9428 9.21284L19.9428 13.5728L19 14.6005L16.1381 11.481V30.8H14.8047V11.481L11.9428 14.6005L11 13.5728L15 9.21284ZM26.1381 10.4533C25.0335 10.4533 24.1381 11.4294 24.1381 12.6333V14.8133H28.1381V12.6333C28.1381 11.4294 27.2426 10.4533 26.1381 10.4533ZM28.1381 16.2667V19.1733H29.4714V12.6333C29.4714 10.6267 27.979 9 26.1381 9C24.2971 9 22.8047 10.6267 22.8047 12.6333V19.1733H24.1381V16.2667H28.1381ZM22.8047 20.6267H26.8047C28.2775 20.6267 29.4714 21.928 29.4714 23.5333C29.4714 24.4015 29.1222 25.1807 28.5686 25.7133C29.1222 26.2459 29.4714 27.0252 29.4714 27.8933C29.4714 29.4986 28.2775 30.8 26.8047 30.8H22.8047V20.6267ZM26.8047 24.9867C27.5411 24.9867 28.1381 24.336 28.1381 23.5333C28.1381 22.7307 27.5411 22.08 26.8047 22.08H24.1381V24.9867H26.8047ZM24.1381 26.44H26.8047C27.5411 26.44 28.1381 27.0907 28.1381 27.8933C28.1381 28.696 27.5411 29.3467 26.8047 29.3467H24.1381V26.44Z"
              fill="#8C8C8C"
            />
          </svg>
          <svg
            className="breeds__sort-button"
            onClick={() => setSorting("descending")}
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <rect width="40" height="40" rx="10" fill="#F8F8F7" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.8047 29.319V10H16.1381V29.319L19 26.1995L19.9428 27.2272L15.9428 31.5872C15.8178 31.7234 15.6482 31.8 15.4714 31.8C15.2946 31.8 15.125 31.7234 15 31.5872L11 27.2272L11.9428 26.1995L14.8047 29.319ZM26.1381 11.4533C25.0335 11.4533 24.1381 12.4294 24.1381 13.6333V15.8133H28.1381V13.6333C28.1381 12.4294 27.2426 11.4533 26.1381 11.4533ZM28.1381 17.2667V20.1733H29.4714V13.6333C29.4714 11.6267 27.979 10 26.1381 10C24.2971 10 22.8047 11.6267 22.8047 13.6333V20.1733H24.1381V17.2667H28.1381ZM22.8047 21.6267H26.8047C28.2775 21.6267 29.4714 22.928 29.4714 24.5333C29.4714 25.4015 29.1222 26.1807 28.5686 26.7133C29.1222 27.2459 29.4714 28.0252 29.4714 28.8933C29.4714 30.4986 28.2775 31.8 26.8047 31.8H22.8047V21.6267ZM26.8047 25.9867C27.5411 25.9867 28.1381 25.336 28.1381 24.5333C28.1381 23.7307 27.5411 23.08 26.8047 23.08H24.1381V25.9867H26.8047ZM24.1381 27.44H26.8047C27.5411 27.44 28.1381 28.0907 28.1381 28.8933C28.1381 29.696 27.5411 30.3467 26.8047 30.3467H24.1381V27.44Z"
              fill="#8C8C8C"
            />
          </svg>
        </div>
      </div>
      <div className="breeds__images">
        {data &&
          data.map((image) => (
            <div
              className="breeds__image-container"
              key={image.id}
              onMouseEnter={() => handleMouseEnter(image?.breeds[0]?.name)}
              onMouseLeave={handleMouseLeave}
            >
              <img key={image.id} src={image.url} alt="Cat" />
              {hoveredCatBreed === image?.breeds[0]?.name && (
                <div className="breeds__name">{image?.breeds[0]?.name ? image?.breeds[0]?.name : "Just cute cat"}</div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};
