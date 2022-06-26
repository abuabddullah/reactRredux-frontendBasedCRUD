import React from 'react';
import { useSelector, useDispatch } from "react-redux";

const CartComponent = () => {
    const cartsArray = useSelector(store => {
        // console.log(store.books.initialCart)
        return store.books.initialCart
    });
    let totalPrice = 0;
    let totalQty = 0;
    for (const book of cartsArray) {
        totalPrice += book.price * book.qty;
        totalQty += book.qty;
    }
    return (
        <div className='cartstyle'>
            <p>total price : {totalPrice}</p>
            <p>total qty : {totalQty}</p>
        </div>
    );
};

export default CartComponent;