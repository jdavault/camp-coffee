import React from "react";

export default function CoffeeTypes({ coffeeTypes }) {
  return (
    <section>
      <h2>Coffee Types</h2>

      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {coffeeTypes.map(coffeeType => {
            return (
              <tr key={coffeeType.id}>
                <td>{coffeeType.type}</td>
                <td>{coffeeType.contact}</td>
                <td>{coffeeType.country}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  )
}
