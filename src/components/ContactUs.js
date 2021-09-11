import React from "react"
import ServiceCards from "./SerivceCards"
import ContactForm from "./ContactForm"
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

          <ContactForm />
          
        </div>
      </section>
    </>
  )
}

export default ContactUs
