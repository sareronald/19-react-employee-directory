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

  // Sort by FIRST NAME
  sortByFirstName = () => {
    const sortedEmployees = this.state.employees.sort((a, b) => {
      if (b.name.first > a.name.first) {
        return -1;
      }
      if (a.name.first > b.name.first) {
        return 1;
      }
      return 0;
    });

    if (this.state.sortOrder === "isDecending") {
      sortedEmployees.reverse();
      this.setState({ sortOrder: "isAscending" });
    } else {
      this.setState({ sortOrder: "isDecending" });
    }
    this.setState({ employees: sortedEmployees });
  };

  // Sort by LAST NAME
  sortByLastName = () => {
    const sortedEmployees = this.state.employees.sort((a, b) => {
      if (b.name.last > a.name.last) {
        return -1;
      }
      if (a.name.last > b.name.last) {
        return 1;
      }
      return 0;
    });

    if (this.state.sortOrder === "isDecending") {
      sortedEmployees.reverse();
      this.setState({ sortOrder: "isAscending" });
    } else {
      this.setState({ sortOrder: "isDecending" });
    }
    this.setState({ employees: sortedEmployees });
  };

  // Sort by DOB
  sortByDOB = () => {
    const sortedEmployees = this.state.employees.sort((a, b) => {
      if (b.dob.date > a.dob.date) {
        return -1;
      }
      if (a.dob.date > b.dob.date) {
        return 1;
      }
      return 0;
    });

    if (this.state.sortOrder === "isDecending") {
      sortedEmployees.reverse();
      this.setState({ sortOrder: "isAscending" });
    } else {
      this.setState({ sortOrder: "isDecending" });
    }
    this.setState({ employees: sortedEmployees });
  };

  // filter employees based on searched characters
  filterEmployeeList = () => {
    if (!this.state.search) {
      return this.state.employees;
    } else {
      return this.state.employees.filter(
        (filteredEmployee) =>
          filteredEmployee.name.first
            .toLowerCase()
            .includes(this.state.search) ||
          filteredEmployee.name.last.toLowerCase().includes(this.state.search)
      );
    }
  };

  // Render items: Search Form and Employee Row
  render() {
    return (
      <section className="container">
        <SearchForm
          handleInputChange={this.handleInputChange}
          search={this.state.search}
        />
        <div className="directory-table">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Image</th>
                <th onClick={this.sortByFirstName}>
                  First Name <span className="fa fa-sort"></span>
                </th>
                <th onClick={this.sortByLastName}>
                  Surname <span className="fa fa-sort"></span>
                </th>
                <th>Phone</th>
                <th>Email</th>
                <th onClick={this.sortByDOB}>
                  DOB <span className="fa fa-sort"></span>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.filterEmployeeList().map((employee, index) => (
                <EmployeeRow
                  id={index}
                  key={employee.login.uuid}
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
