import { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GetBreedsDto } from "../../api/dto/getBreeds.dto";
import { useBreedData } from "../../api/useBreedData";
import { useSearchContext } from "../../Context/SearchProvider";

import "./SearchResult.scss";

const SearchResultsPage: FC = () => {
  const { data: breeds } = useBreedData();
  const { searchValue } = useSearchContext();
  const [filteredBreeds, setFilteredBreeds] = useState<GetBreedsDto>([]);

  useEffect(() => {
    const filterBreedsByName = (searchTerm: string) => {
      const filtered = breeds?.filter((breed) =>
        breed.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBreeds(filtered || []);
    };

    filterBreedsByName(searchValue);
  }, [searchValue, breeds]);

  return (
    <div className="search-result">
      <div className="search-result__navigation">
        <Link to="/">
          <svg
            className="search-result__arrow-back"
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
        <h2 className="search-result__title">Search</h2>
      </div>
      <div className="search-result__images">
        <p className="search-result__text">
          Search results for: <span>{searchValue}</span>
        </p>
        {filteredBreeds.length > 0 ? (
          filteredBreeds.map((item) => (
            <img
              className="search-result__image"
              key={item.id}
              src={item.image?.url}
              alt={item.name}
            />
          ))
        ) : (
          <p className="search-result__no-results">No Cat found</p>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;
