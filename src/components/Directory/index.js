import React, { Component } from "react";
import API from "../../utils/API";
import SearchForm from "../SearchForm";
// import css for directory

class Directory extends Component {
  state = {
    search: "",
    results: [],
  };

  // When the component mounts, get information from randonuser.me API
  componentDidMount() {
    API.apiSearch()
      .then((res) => this.setState({ results: res.data.results }))
      .catch((err) => console.log(err));
  }

  // Handle input in search bar - filter employee results based on characters inputted in the search field
  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  // Sort by FIRST Name
  sortByFirstName = () => {};

  // Sort by LAST Name
  sortByLastName = () => {};

  // Render items
  render() {
    return (
      <div>
        <SearchForm
          handleInputChange={this.handleInputChange}
          search={this.state.search}
        />
        <div className="directory-table">
          <table className="employee-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>
                  First Name
                  <span
                    className="downArrow"
                    onClick={this.sortByFirstName}
                  ></span>
                </th>
                <th>
                  Last Name
                  <span
                    className="downArrow"
                    onClick={this.sortByLastName}
                  ></span>
                </th>
                <th>Phone</th>
                <th>Email</th>
                <th>DOB</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    );
  }
}

export default Directory;
