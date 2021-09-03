import React from "react";
import "../App.css";

export default function CoffeeImg({ coffeeImg }) {
    return (
        <section id="boxes">
            <div className="boxContainer">
                <div className="box">
                    {coffeeImg.map(coffeeImg => {
                        return (
                            <div key={coffeeImg.id}>
                                <img src={coffeeImg.image} width={200} height={200}
                                />
                                <h3> {coffeeImg.type} </h3>
                                <p> {coffeeImg.description} </p>
                            </div>
                        )
                    })}


                </div>
            </div>
        </section>

    )
}