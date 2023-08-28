import { FC, useState, useEffect } from "react";
import UploadModal from "../UploadModal";
import { BreedList } from "../BreedList/BreedList";
import { getCatDto } from "../../api/dto/getCats.dto";
import { GetBreedsDto } from "../../api/dto/getBreeds.dto";
import { useNavigate } from "react-router-dom";

import "./Gallery.scss";

interface GalleryProps {
  breeds: GetBreedsDto;
  data: getCatDto;
  selectedBreed: string;
  setSelectedBreed: (breed: string) => void;
  selectedOrder: string;
  setSelectedOrder: (order: string) => void;
  selectedType: string;
  setSelectedType: (type: string) => void;
  limit: number;
  setLimit: (limit: number) => void;
  onNextPage: () => void;
  setPage: (page: number) => void;
}

export const Gallery: FC<GalleryProps> = ({
  breeds,
  data,
  selectedBreed,
  setSelectedBreed,
  selectedOrder,
  setSelectedOrder,
  selectedType,
  setSelectedType,
  limit,
  setLimit,
  onNextPage,
  setPage,
}) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    isModalOpen && document.body.classList.add("modal-open");
    !isModalOpen && document.body.classList.remove("modal-open");
  }, [isModalOpen]);

  return (
    <div className="gallery">
      <div className="gallery__navigation">
        <div className="gallery__flex">
          <svg
            onClick={() => navigate(-1)}
            className="gallery__arrow-back"
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
          <h2 className="gallery__title">Gallery</h2>
        </div>

        <button
          className="gallery__upload-button"
          onClick={() => setIsModalOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.86601 0L12.2355 4.03339L11.4129 4.92452L8.48919 2.22567V12.3618H7.27645V2.30464L4.67336 4.90772L3.81583 4.05019L7.86601 0ZM1.21274 14.7873V7.51081H0V16H15.7656V7.51081H14.5529V14.7873H1.21274Z"
              fill="#FF868E"
            />
          </svg>
          Upload
        </button>
      </div>
      <div className="gallery__options">
        <select
          className="gallery__select"
          value={selectedOrder}
          onChange={(e) => {
            setSelectedOrder(e.target.value);
            setPage(0);
          }}
        >
          <option value="RANDOM">Random</option>
          <option value="ASC">Ascending</option>
          <option value="DESC">Descending</option>
        </select>
        <select
          className="gallery__select"
          value={selectedBreed}
          onChange={(e) => {
            setSelectedBreed(e.target.value);
            setPage(0);
          }}
        >
          <option value="">None</option>
          {breeds.map((breed) => (
            <option key={breed.id} value={breed.id}>
              {breed.name}
            </option>
          ))}
        </select>
        <select
          className="gallery__select"
          value={selectedType}
          onChange={(e) => {
            setSelectedType(e.target.value);
            setPage(0);
          }}
        >
          <option value="">All</option>
          <option value="jpg,png">Static</option>
          <option value="gif">Animated</option>
        </select>
        <select
          className="gallery__select gallery__limit"
          value={limit}
          onChange={(e) => {
            setLimit(Number(e.target.value));
            setPage(0);
          }}
        >
          <option value={5}>5 items per page</option>
          <option value={10}>10 items per page</option>
          <option value={20}>20 items per page</option>
          <option value={30}>30 items per page</option>
        </select>
        <svg
          className="gallery__reload"
          onClick={onNextPage}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.48189 2.49989L6.93396 0.953004L7.88633 0L11.0577 3.16928L7.88634 6.33873L6.93395 5.38576L8.47232 3.84832C4.51244 3.99813 1.3473 7.25498 1.3473 11.2478C1.3473 15.3361 4.66547 18.6527 8.75744 18.6527C12.8494 18.6527 16.1676 15.3361 16.1676 11.2478V10.5742H17.5149V11.2478C17.5149 16.081 13.5927 20 8.75744 20C3.92221 20 0 16.081 0 11.2478C0 6.50682 3.77407 2.64542 8.48189 2.49989Z"
            fill="#FF868E"
          />
        </svg>
      </div>
      <BreedList data={data} />
      {isModalOpen && <UploadModal onCancel={handleCancel} />}
    </div>
  );
};
