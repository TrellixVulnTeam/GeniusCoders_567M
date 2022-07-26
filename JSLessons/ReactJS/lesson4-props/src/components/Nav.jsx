import React, { Component } from 'react'
import DropDown from './DropDown'

class Nav extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Car Luxury</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>

                    <DropDown modelname="BMW" modelone="X5" modeltwo="X17" modelthree="X7"/>
                    <DropDown modelname="Mercedes" modelone="S500" modeltwo="s600" modelthree="s0"/>
                    <DropDown modelname="Qaz" modelone="24" modeltwo="21" modelthree="31"/>

            
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav