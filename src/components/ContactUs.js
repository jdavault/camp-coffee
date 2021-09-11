import React from "react"

import ServiceCards from "./SerivceCards"
import ContactForm from "./ContactForm"

function ContactUs() {
  const serviceCards = [
    {
      id: 1,
      title: "Coffee Design",
      text:
        "Test1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies at, vulputate id lorem. Nulla facilisi.",
      pricing: "$1,000 - $3,000"
    },
    {
      id: 2,
      title: "Coffee Maintenance",
      text:
        "Test2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      pricing: "$250 per month"
    },
    {
      id: 3,
      title: "Coffee Cost",
      text:
        "Test3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      pricing: "$25 per month"
    }
  ]

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
