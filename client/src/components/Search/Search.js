import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import './Search.css';
import Logowhite from "../Images/LogoWhite.png";
import Searchicon from "../Images/Search.png";
import Individual from "./Individual"
import Studios from "./Studios"

import Api from "../Api/Api";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: this.props.name,
      address: this.props.address,
      selected: "",
      sort: "",
      studioSearch: [],
      studioarr: [
        {
          id: "1",
          name: "The Realist Studio",
          description: "Best In LA",
          about:
            "wadawdawdawdaawdawdawdawdiuwbfiuanefiuaenfiuaenfaiuenfiuaeaiuenfiueanfiauenfiauesnfiuenfsaiunefise",
          address: "Los Angelos, California",
          price: "$45",
          dimensions: "600 by 500",
          amenities: "elevator, wifi",
          image:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BY2Q2NzQ3ZDUtNWU5OC00Yjc0LThlYmEtNWM3NTFmM2JiY2VhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg"
        },
        {
          id: "2",
          name: "Broadway Dance",
          description: "Best In NY",
          about:
            "wadawdawdawdaawdawdawdawdiuwbfiuanefiuaenfiuaenfaiuenfiuaeaiuenfiueanfiauenfiauesnfiuenfsaiunefise",
          address: "New York, New York",
          price: "$50",
          dimensions: "700 by 500",
          amenities: "elevator, wifi",
          image:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BY2Q2NzQ3ZDUtNWU5OC00Yjc0LThlYmEtNWM3NTFmM2JiY2VhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg"
        },
        {
          id: "3",
          name: "Pearl Studio",
          description: "Pearlss",
          about:
            "wadawdawdawdaawdawdawdawdiuwbfiuanefiuaenfiuaenfaiuenfiuaeaiuenfiueanfiauenfiauesnfiuenfsaiunefise",
          address: "Brookyln",
          price: "$60",
          dimensions: "800 by 500",
          amenities: "elevator, wifi",
          image:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BY2Q2NzQ3ZDUtNWU5OC00Yjc0LThlYmEtNWM3NTFmM2JiY2VhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg"
        },
        {
          id: "4",
          name: "Roman Studio",
          description: "Best In LA",
          about:
            "wadawdawdawdaawdawdawdawdiuwbfiuanefiuaenfiuaenfaiuenfiuaeaiuenfiueanfiauenfiauesnfiuenfsaiunefise",
          address: "Los Angelos, California",
          price: "$45",
          dimensions: "600 by 500",
          amenities: "elevator, wifi",
          image:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BY2Q2NzQ3ZDUtNWU5OC00Yjc0LThlYmEtNWM3NTFmM2JiY2VhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg"
        },
        {
          id: "5",
          name: "DNCY",
          description: "Best In LA",
          about:
            "wadawdawdawdaawdawdawdawdiuwbfiuanefiuaenfiuaenfaiuenfiuaeaiuenfiueanfiauenfiauesnfiuenfsaiunefise",
          address: "Los Angelos, California",
          price: "$45",
          dimensions: "600 by 500",
          amenities: "elevator, wifi",
          image:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BY2Q2NzQ3ZDUtNWU5OC00Yjc0LThlYmEtNWM3NTFmM2JiY2VhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg"
        },
        {
          id: "6",
          name: "Common Dance Studio",
          description: "Best In LA",
          about:
            "wadawdawdawdaawdawdawdawdiuwbfiuanefiuaenfiuaenfaiuenfiuaeaiuenfiueanfiauenfiauesnfiuenfsaiunefise",
          address: "Los Angelos, California",
          price: "$45",
          dimensions: "600 by 500",
          amenities: "elevator, wifi",
          image:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BY2Q2NzQ3ZDUtNWU5OC00Yjc0LThlYmEtNWM3NTFmM2JiY2VhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg"
        },
        {
          id: "7",
          name: "Mumba",
          description: "Best In LA",
          about:
            "wadawdawdawdaawdawdawdawdiuwbfiuanefiuaenfiuaenfaiuenfiuaeaiuenfiueanfiauenfiauesnfiuenfsaiunefise",
          address: "Los Angelos, California",
          price: "$45",
          dimensions: "600 by 500",
          amenities: "elevator, wifi",
          image:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BY2Q2NzQ3ZDUtNWU5OC00Yjc0LThlYmEtNWM3NTFmM2JiY2VhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg"
        }
      ]
    };
  }

  handleSelect = e => {
    this.setState({
      selected: e.target.value
    });
  };

  handleSortSelect = e => {
    this.setState({
      sorted: e.target.value
    });
  };

  handleSearch = e => {
    this.setState({
      input: e.target.value
    });
  };
  handleAddressSearch = e => {
    this.setState({
      address: e.target.value
    });
  };
  handleLogout = () => {
    Api.getLogout();
    console.log("You have logout!");
  };

  submitForm = e => {
    e.preventDefault();
    const { input, address, studioarr } = this.state;
    this.props.handleSearchName(input);
    this.props.handleSearchAddress(address);
    var studios = studioarr.filter(studio =>
      studio.name.toLowerCase().includes(input.toLowerCase())
    );
    this.setState({
      studioSearch: studios
    });
    this.props.history.push("/search");
  };

  renderSearch = () => {
    const { input, selected, sort, address } = this.state;
    console.log(input);
    console.log(address);
    var array = [];
    if (this.state.studioSearch.join("") === "") {
      array = this.state.studioarr;
    } else {
      array = this.state.studioSearch;
    }
    const categories = ["Select Category", "Dance", "Art", "Photography"];
    const sortby = [
      "Sort By",
      "Highest Rated",
      "Most Reviewed",
      "$-$$$",
      "$$$-$"
    ];
    return <div id="sbacker">
        {this.props.isLogged ? [this.props.protype === "User" ? <div id="topbar">
                <div id="barlogo">
                  <Link to={`/`}>
                    <img src={Logowhite} alt="logo" />
                  </Link>
                </div>
                <Link to={`/login`}>
                  <a class="hoverturn" onClick={this.handleLogout}>
                    <span data-title="Log Out">Log Out</span>
                  </a>
                </Link>
                <Link to={`/userprofile`}>
                  <a class="hoverturn">
                    <span data-title="My Account">My Account</span>
                  </a>
                </Link>
              </div> : <div id="topbar">
                <div id="barlogo">
                  <Link to={`/`}>
                    <img src={Logowhite} alt="logo" />
                  </Link>
                </div>
                <Link to={`/logout`}>
                  <a class="hoverturn">
                    <span data-title="Log Out">Log Out</span>
                  </a>
                </Link>
                <Link to={`/hostprofile`}>
                  <a class="hoverturn">
                    <span data-title="My Account">My Account</span>
                  </a>
                </Link>
              </div>] : <div id="topbar">
            <div id="barlogo">
              <Link to={`/`}>
                <img src={Logowhite} alt="logo" />
              </Link>
            </div>
            <Link to={`/login`}>
              <a class="hoverturn">
                <span data-title="Log In">Log In</span>
              </a>
            </Link>
            <Link to={`/signup`}>
              <a class="hoverturn">
                <span data-title="Sign Up">Sign Up</span>
              </a>
            </Link>
          </div>}
        <div>
          <div id="sbar">
            <div id="sbarcard">
              <input type="text" placeholder="Name" value={input} onChange={this.handleSearch} />
              <input type="text" placeholder="Address" value={address} onChange={this.handleAddressSearch} />
              <Link to={`/search`}>
                <button type="submit" onClick={this.submitForm}>
                  <img src={Searchicon} alt="icon" />
                </button>
              </Link>
            </div>
          </div>
          <div id="filters">
            <select onChange={this.handleSelect} id="catselect">
              {categories.map(category => (
                <option value={category}>{category}</option>
              ))}
            </select>
            <select onChange={this.handleSortSelect} id="sortselect">
              {sortby.map(sort => <option value={sort}>{sort}</option>)}
            </select>
          </div>
          <div id="listings">
            <Studios bigdiv={"studiodiv"} worddiv={"studioword"} studioarr={array} />
          </div>
        </div>
        <div id="footer">
          <Link to={`/contact`}>
            <a class="hoverturn">
              <span data-title="Contact">Contact</span>
            </a>
          </Link>
          <Link to={`/about`}>
            <a class="hoverturn">
              <span data-title="About Us">About Us</span>
            </a>
          </Link>
          <p>RAS @ 2018</p>
        </div>
      </div>;
  };

  renderIndividual = props => {
    const { name } = props.match.params;
    const { input, address } = this.state;
    return (
      <div>
        <Individual
          name={name}
          isProfile={this.props.protype}
          isInside={this.props.isLogged}
          submitForm={this.state.submitForm}
          input={input}
          inputaddress={address}
          handleAddressSearch={this.handleAddressSearch}
          handleSearch={this.handleSearch}
          handleLogout={this.handleLogout}
        />
      </div>
    );
  };
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/search" render={this.renderSearch} />
          <Route exact path="/search/:name" render={this.renderIndividual} />
        </Switch>
      </div>
    );
  }
}


export default Search;