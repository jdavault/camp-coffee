import React from "react"
import { Switch, Route } from "react-router-dom"

import Home from "./Home"
import AboutUs from "./AboutUs"
import Coffee from "./Coffee"
import ContactUs from "./ContactUs"

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route component={AboutUs} path="/about" />
        <Route component={Coffee} path="/coffee" />
        <Route component={ContactUs} path="/contact" />
        <Route component={Home} exact path="/" />
      </Switch>
    </div>
  )
}
