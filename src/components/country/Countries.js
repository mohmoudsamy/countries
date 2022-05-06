import React from "react";
import { getAllCountries } from "../../actions";
import { connect } from "react-redux";

import Country from "./Country";
import Loading from "../loading/Loading";

class Countries extends React.Component {
  componentDidMount() {
    this.props.getAllCountries();
  }

  renderCountriesList() {
    const start = 14;
    const end = 22;
    return this.props.countriesList.slice(start, end).map((country) => {
      return (
        <React.Fragment key={Math.random() * 3}>
          <Country country={country} />
        </React.Fragment>
      );
    });
  }

  render() {
    return (
      <div className="countries">
        <div className="container">
          {this.props.countriesList.length === 0 ? (
            <Loading />
          ) : (
            this.renderCountriesList()
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    countriesList: state.countries,
  };
};

export default connect(mapStateToProps, { getAllCountries })(Countries);
