import React from "react";

export default function CoffeeImg({ coffeeImg }) {
    return (
        <section id="boxes">
            <div className="boxContainer">
                <div className="box">
                    {coffeeImg.map(coffeeImg => {
                        return (
                            <div key={coffeeImg.id}>
                                <a>  {coffeeImg.image} </a>
                                <p> {coffeeImg.type} </p>
                                <p> {coffeeImg.description} </p>
                            </div>
                        )
                    })}


                </div>
            </div>
        </section>

    )
}