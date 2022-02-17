import React from "react"
import '../Navbar/navpm.css'

class Navbar_h extends React.Component
{
    render(){
        return(
            <div id="mainnav">
              <nav id="nav" className="navbar navbar-expand-md navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className="span">SnapTask</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Weekly Report</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Profile</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
            </div>
        );

    }
}

export default Navbar_h