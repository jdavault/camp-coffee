import React from "react"
import "../App.css"

export default function CoffeeImg({ coffeeImg }) {

    return (
        <section id="boxes">
            <div className="boxContainer">
                {coffeeImg.map(coffeeImg => {
                    return (
                        <div key={coffeeImg.id} className="box">
                            <img
                                src={coffeeImg.image}
                                style={{ width: 200, height: 200 }} />
                            <h3> {coffeeImg.type} </h3>
                            <p> {coffeeImg.description} </p>
                        </div>
                    )
                })}
            </div>
        </section >

    )
}

  return (
    <section id="boxes">
      <div className="boxContainer">
        {coffeeImg.map(coffeeImg => {
          return (
            <div key={coffeeImg.id} className="box">
              <img
                alt="hey"
                src={coffeeImg.image}
                style={{ width: 200, height: 200 }}
              />
              <h3> {coffeeImg.type} </h3>
              <p> {coffeeImg.description} </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

