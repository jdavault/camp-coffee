import React from "react"

function SerivceCard(props) {
  return props.serviceCards.map(card => (
    <ul id="services" key={card.id}>
      <li>
        <h3>{card.title}</h3>
        <p>{card.text}</p>
        <p>Pricing: {card.pricing}</p>
      </li>
    </ul>
  ))
}

export default SerivceCard
