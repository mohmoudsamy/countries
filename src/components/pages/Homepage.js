import React from "react";
import { getCountry } from "../../actions";
import { connect } from "react-redux";
import Header from "../header/Header";
import SearchBar from "../search/SearchBar";
import Countries from "../countrylist/Countries";
import Country from "../countrylist/Country";

const Homepage = (props) => {
  const renderCountry = () => {
    return props.country.map((singleCountry) => {
      return (
        <React.Fragment key={Math.random() * 4}>
          <Country country={singleCountry} />
        </React.Fragment>
      );
    });
  };

  return (
    <>
      <Header />
      <SearchBar />
      <div className="countries">
        <div className="container flex__between">
          {props.country.length === 0 ? <Countries /> : renderCountry()}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { country: state.country };
};

export default connect(mapStateToProps, { getCountry })(Homepage);
