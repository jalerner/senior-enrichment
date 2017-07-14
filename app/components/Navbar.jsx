
import React from 'react';

export default function Navbar() {

  const divStyle = {
    position: 'aboslute',
    height: '100%'
  }

  return (

    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">
            <img
              alt="Brand"
              src={`/images/NavbarIcon.png`}
              style={divStyle}
            />
          </a>
          <a href="/campuses">
            <button type="button" className="btn btn-default navbar-btn">Campuses</button>
          </a>
          <a href="/students">
            <button type="button" className="btn btn-default navbar-btn">Students</button>
          </a>
          <p className="navbar-text pull-right">
            Philadelphia Collegiate Conglomerate
          </p>
        </div>
      </div>
    </nav>

  )

}
