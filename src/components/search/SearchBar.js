import React from "react";
import { getCountry } from "../../actions";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Countries from "../country/Countries";
import Country from "../country/Country";
import Dropdown from "../dropdown/Dropdown";

const searchIcon = <FontAwesomeIcon icon={faSearch} />;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    let searchTerm;
  }
  onInputChange = (event) => {
    return (this.searchTerm = event.target.value);
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.getCountry(this.searchTerm);
  };

  renderCountry = () => {
    return this.props.country.map((singleCountry) => {
      return (
        <React.Fragment key={Math.random() * 4}>
          <Country country={singleCountry} />
        </React.Fragment>
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="search-bar__filter">
          <div className="container  flex__between">
            <div className="search-bar">
              <span className="search-bar__icon">{searchIcon}</span>
              <form onSubmit={this.onFormSubmit}>
                <input
                  onChange={this.onInputChange}
                  className="search-bar__input"
                  type="text"
                  placeholder="Search for a country..."
                />
              </form>
            </div>
            <div className="filter">
              <Dropdown />
            </div>
          </div>
        </div>
        <div className="countries">
          <div className="container flex__between">
            {this.props.country.length === 0 ? (
              <Countries />
            ) : (
              this.renderCountry()
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { country: state.country };
};

export default connect(mapStateToProps, { getCountry })(SearchBar);
