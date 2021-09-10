import React from 'react'

export default function Register() {
  return (
    <div>
      <div className="dark">
        <h2>Register</h2>
        <br />
        <form className="contactForm">
          <div>
            <label> Name</label>
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
            Register
          </button>
        </form>
      </div>
    </div>
  )
}
