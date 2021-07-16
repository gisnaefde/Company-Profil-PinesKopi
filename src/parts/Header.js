import React from 'react';
import Logo from '../assets/images/logo.png'

const Header = () => {
  return (
    <section className="header d-flex align-items-center">
      <div className="container-fluid navbar-1 shadow-lg">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-none navbar-2">
            <a className="navbar-brand" href="/">
              <img src={Logo} width="40" height="40" ></img>
              Kedai Kopi Kebon Pines
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Pricing</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <hr></hr>
    </section>
  );
}
export default Header;