import React from 'react';
import { useCart } from "react-use-cart";
import '../App.css';
import { CheckOutButton } from '../App.js';



/* A lot of the following code came from this lovely resource:
https://www.npmjs.com/package/react-use-cart
Excellent documentation! */

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
        } = useCart();
    if (isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>
    return (
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h5>Cart ({totalUniqueItems}) Total Items: ({totalItems})</h5>
                    <table className="table table-hover text-center m-0 Cart">
                        <tbody>
                            {items.map((item, index)=>{
                                return(
                                    <tr key={index}>
                                        <td>
                                            <img className="Cart" src={item.img} style={{height: '6rem'}} />
                                        </td>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td>Quantity ({item.quantity})</td>
                                        <td>
                                            <button
                                                className="btn btn-info ms-2"
                                                onClick={() => updateItemQuantity(item.id, item.quantity -1)}
                                            >-</button>

                                            <button
                                                className="btn btn-info ms-2"
                                                onClick={() => updateItemQuantity(item.id, item.quantity +1)}
                                            >+</button>

                                            <button
                                                className="btn btn-danger ms-2"
                                                onClick={() => removeItem(item.id)}>Remove Item</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="col-auto ms-auto">
                    <h2>Total Price: ${cartTotal}</h2>
                </div>
                <div className="col-auto">
                    <button
                        className="btn btn-danger m-2"
                        onClick={() => emptyCart()}
                        >Clear Cart</button>
                </div>
            </div>
            <CheckOutButton />
        </section>
    );
};

export default Cart;