import React from "react";
import { getCountry } from "../../actions";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "../dropdown/Dropdown";

const searchIcon = <FontAwesomeIcon icon={faSearch} />;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.searchTerm = this.searchTerm;
  }
  onInputChange = (event) => {
    return (this.searchTerm = event.target.value);
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.getCountry(this.searchTerm);
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
      </React.Fragment>
    );
  }
}

export default connect(null, { getCountry })(SearchBar);
