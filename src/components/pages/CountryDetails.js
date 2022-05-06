import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getCountryDetails } from "../../actions";
import { clickedCountryName } from "../country/Country";
import Header from "../header/Header";
import Loading from "../loading/Loading";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
const backBtn = <FontAwesomeIcon icon={faArrowLeftLong} />;

class CountryDetails extends React.Component {
  componentDidMount() {
    this.props.getCountryDetails(clickedCountryName);
    this.loadCountryName();
  }

  componentDidUpdate() {
    this.loadCountryName();
  }

  storeCountryName(theName) {
    localStorage.setItem("countryName", theName);
  }

  renderCountryDetails() {
    return this.props.countryDetails.map((theCountry) => {
      let [native] = Object.keys(theCountry.name.nativeName);
      let [currency] = Object.keys(theCountry.currencies);
      let [language] = Object.keys(theCountry.languages);

      this.storeCountryName(theCountry.name.common);

      return (
        <React.Fragment key={Math.ceil(Math.random() * 8)}>
          <div className="country__content_flag">
            <img src={theCountry.flags.svg} />
          </div>
          <div className="country__content_info">
            <h1 className="country__content_info-name">
              {theCountry.name.common}
            </h1>
            <div className="flex__between">
              <div className="country__content_info-left">
                <p>
                  <span>Native Name:</span>{" "}
                  {theCountry.name.nativeName[native].official}
                </p>
                <p>
                  <span>Population: </span>
                  {theCountry.population}
                </p>
                <p>
                  <span>Region: </span>
                  {theCountry.region}
                </p>
                <p>
                  <span>Sub Region: </span>
                  {theCountry.subregion}
                </p>
                <p>
                  <span>Capital: </span>
                  {theCountry.capital[0]}
                </p>
              </div>
              <div className="country__content_info-right">
                <p>
                  <span>Top Level Domain: </span>
                  {theCountry.tld[0]}
                </p>
                <p>
                  <span>Currencies: </span>
                  {theCountry.currencies[currency].name}
                </p>
                <p>
                  <span>Languages: </span>
                  {theCountry.languages[language]}
                </p>
              </div>
            </div>
            <div className="country__content_info-borders">
              Border Countries:
            </div>
          </div>
        </React.Fragment>
      );
    });
  }
  loadCountryName = () => {
    window.onload = () => {
      if (localStorage.getItem("modeColor")) {
        document.body.classList.add("dark__mode");
      }
      if (localStorage.getItem("countryName")) {
        this.props.getCountryDetails(localStorage.getItem("countryName"));
      } else {
        this.props.getCountryDetails(clickedCountryName);
      }
    };
  };
  render() {
    return (
      <>
        <Header />

        {this.props.countryDetails.length === 0 ||
        (this.props.countryDetails.length >= 1 &&
          this.props.countryDetails[0].name.common !== clickedCountryName) ? (
          <Loading />
        ) : (
          <div className="country__details">
            <div className="container">
              <div className="back__btn">
                <Link to="/">
                  <button>{backBtn} Back</button>
                </Link>
              </div>
              <div className="country__content flex__between">
                {this.renderCountryDetails()}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { countryDetails: state.countryDetails };
};

export default connect(mapStateToProps, { getCountryDetails })(CountryDetails);
