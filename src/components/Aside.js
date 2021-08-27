import React, { Component } from "react"
import SocialLinks from "./SocialLinks"

export default class Aside extends Component {
  constructor(props) {
    super(props)
    this.state = {
      socialinfo: [
        { name: "facebook", url: "http://facebook.com" },
        { name: "twitter", url: "http://twitter.com" },
        { name: "email", url: "mailto:joe@test.com" }
      ]
    }
  }
  render() {
    return (
      <div>
        <aside id="aboutAside">
          <section>
            <h2>Share</h2>
            <SocialLinks socialInfo={this.state.socialinfo} />
          </section>
        </aside>
      </div>
    )
  }
}
