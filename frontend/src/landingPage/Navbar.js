import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand col-6" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
              <li className="nav-item">
                <Link className="nav-link active mx-5" aria-current="page" to="/">
                  HomePage
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-5" to="/AboutPage">
                  AboutPage
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-5" to="/SignUp">
                  Signup
                </Link>
              </li>
              
              <li className="nav-item dropdown">
                <Link
                  className="nav-link active dropdown-toggle mx-5"
                  to="/AwardPage"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  AwardPage
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="/SignUp">
                      Award1
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/SignUp">
                      Award2
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/SignUp">
                      Award3
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
