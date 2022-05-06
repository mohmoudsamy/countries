import React from "react";
import { Link } from "react-router-dom";

export let clickedCountryName;

const Country = ({ country }) => {
  const onCountryNameClick = () => {
    return (clickedCountryName = country.name.common);
  };
  return (
    <div className="country">
      <div className="country__flag">
        <img src={country.flags.png} />
      </div>
      <div className="country__name">
        <Link to="/pages/countrydetails">
          <h3 onClick={onCountryNameClick}>
            {country.name.common || country.name}
          </h3>
        </Link>
      </div>
      <div className="country__text">
        <p>
          <span>Population: </span>
          {country.population}
        </p>
        <p>
          <span>Region: </span>
          {country.region}
        </p>
        <p>
          <span>Capital: </span>
          {country.capital}
        </p>
      </div>
    </div>
  );
};

export default Country;
