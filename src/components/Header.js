import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Routes from "./Routes"
import MainNav from "./MainNav"

const Header = () => {
  return (
    <Router>
      <header>
        <MainNav />
      </header>
      <Routes />
    </Router>
  )
}

export default Header
