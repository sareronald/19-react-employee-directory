import React from "react";
import "./style.css";
import employee1 from "./employees1.png";
import employee2 from "./employees2.png";

function Header() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid" id="jumbotron">
        <div className="container text-center">
          <img src={employee1} className="header-image" />
          <h1 className="display-4 text-center title"> Company Directory </h1>
          <img src={employee2} className="header-image" />
        </div>
        <div className="container text-center lead">
          <p className="text-center instructions">
            View all employees in the list or search to find someone specfic
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
