import React from 'react';
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


const NavigationBar = () => {
    const cartsArray = useSelector(store => {
        // console.log(store.books.initialCart)
        return store.books.initialCart
    });
    return (
        <div className='navBarstyles'>
            <NavLink to="home">Home</NavLink>
            <NavLink to="booksCollection">Books Collection</NavLink>
            <NavLink to="addBook">Add Book</NavLink>
            <span>cart Item : {cartsArray.length}</span>
        </div>
    );
};

export default NavigationBar;