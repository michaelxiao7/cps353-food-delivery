import React from 'react';
import { useCart } from "react-use-cart";

/* The incredibly useful Bootstrap v5.0 resource on cards:
https://getbootstrap.com/docs/5.0/components/card/
The code in this file is structured like the doc */

const Items = (props) => {
    const { addItem } = useCart();
    return (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div class="card p-0 overflow-hidden h-100 shadow">
                <img src={props.img} class="card-img-top img-fluid Card" alt={props.description}/>
                    <div class="card-body text-center Card">
                        <h5 class="card-title">{props.title}</h5>
                        <h5 class="card-title">${props.price}</h5>
                        <p class="card-text">{props.description}</p>
                        <button class="btn btn-success" onClick={() => addItem(props.item)}>Add to Order</button>
                    </div>
            </div>
        </div>
    );
};

export default Items;