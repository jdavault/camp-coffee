import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import Home from "./Home"
import AboutUs from "./AboutUs"
import Coffee from "./Coffee"
import ContactUs from "./ContactUs"

function Header() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/coffee">My Coffee</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route component={AboutUs} path="/about" />
        <Route component={Coffee} path="/coffee" />
        <Route component={ContactUs} path="/contact" />
        <Route component={Home} exact path="/" />
      </Switch>
    </Router>
  )
}

export default Header
