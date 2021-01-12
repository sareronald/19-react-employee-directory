import React, { Component } from "react";
import API from "../../utils/API";
import EmployeeRow from "../EmployeeRow";
import SearchForm from "../SearchForm";
// npm package to reformat date for DOB (dob: {date: "1963-09-02T08:14:38.366Z", age: 58})
import dateFormat from "dateformat";
// import css for directory

class Directory extends Component {
  state = {
    search: "",
    employees: [],
  };

  // When the component mounts, get information from randonuser.me API
  componentDidMount() {
    API.apiSearch()
      .then((res) => this.setState({ employees: res.data.results }))
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
      <section className="container">
        <SearchForm
          handleInputChange={this.handleInputChange}
          search={this.state.search}
        />
        <div className="directory-table">
          <table className="table-title">
            <thead>
              <tr>
                <th>Image</th>
                <th>
                  Name
                  <span
                    className="downArrow"
                    onClick={this.sortByFirstName}
                  ></span>
                </th>
                <th>Phone</th>
                <th>Email</th>
                <th>DOB</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <EmployeeRow
                  key={employee.id.value}
                  firstName={employee.name.first}
                  lastName={employee.name.last}
                  src={employee.picture.thumbnail}
                  phone={employee.phone}
                  email={employee.email}
                  dob={dateFormat(employee.dob.date, "paddedShortDate")}
                />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default Directory;
