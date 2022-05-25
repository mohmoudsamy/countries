import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { selectRegion } from "../../actions/index";

export let clickedCountryName;

const Country = ({ country, regionSelected }) => {
  console.log(regionSelected);
  const onCountryNameClick = () => {
    return (clickedCountryName = country.name.common);
  };
  return (
    <React.Fragment>
      {regionSelected && regionSelected !== country.region ? (
        <div>{selectRegion === country.region}</div>
      ) : (
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
      )}
    </React.Fragment>
  );
};

const mapStatsToProps = (state) => {
  return { regionSelected: state.region };
};

export default connect(mapStatsToProps)(Country);
