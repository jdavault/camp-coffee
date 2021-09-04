import React from "react"
import ServiceCards from "./SerivceCards"
import { COFFEE_SERVICE_DATA } from "../shared/coffee-service-data"

function ContactUs() {
  const serviceCards = COFFEE_SERVICE_DATA
  return (
    <>
      <section id="contactUs">
        <div className="container">
          <article id="main-col">
            <h1 className="page-title">Services</h1>
            <ServiceCards serviceCards={serviceCards} />
          </article>
          <aside id="sidebar">
            <div className="dark">
              <h3>Contact Us</h3>
              <form className="contactForm">
                <div>
                  <label>First Name</label>
                  <br />
                  <input type="text" placeholder="first name" />
                </div>
                <div>
                  <label>Last Number</label>
                  <br />
                  <input type="text" placeholder="last name" />
                </div>
                <div>
                  <label>Email</label>
                  <br />
                  <input type="email" placeholder="Emial Address" />
                </div>
                <div>
                  <label>Phone Number</label>
                  <br />
                  <input type="number" placeholder="Phone Number" />
                </div>
                <div>
                  <label>Address</label>
                  <br />
                  <textarea placeholder="address"></textarea>
                </div>
                <div>
                  <label>Message</label>
                  <br />
                  <textarea placeholder="Message"></textarea>
                </div>
                <button className="button" type="submit">
                  Send
                </button>
              </form>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

export default ContactUs
