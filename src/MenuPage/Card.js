import React from 'react';
import Items from "./Items.js";
import data from "./data";

/* The Card component of the menu (upper half of the menu) */

const Card = () => {
    console.warn(data.productData)

    return (
        <>
            <h1 className="text-center mt-3">The Menu:</h1>
                <section className="py-4 container">
                    <div className="row justify-content-center">
                        {data.productData.map((item, index)=>{
                            return(
                                <Items
                                    img={item.img}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                    item={item}
                                    key={index}
                                />
                            )
                        })}
                    </div> 
                </section>
        </>
    );
};

export default Card;