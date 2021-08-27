import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import AboutUs from "./AboutUsPrev"
import Coffee from "./Coffee"
import ContactUs from "./ContactUs"
import Home from "./Home"

function Header() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/coffee">My Coffee</a>
            </li>
            <li>
              <a href="/contactUs">Contact us</a>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/coffee">
          <Coffee />
        </Route>
        <Route path="/contactus">
          <ContactUs />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default Header
