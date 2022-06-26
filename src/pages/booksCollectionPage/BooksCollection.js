import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeBook } from './booksSlice';
import { Link } from "react-router-dom";
const BooksCollection = () => {
    const dispatch = useDispatch();
    const booksArray = useSelector(store => {
        // console.log(store.books.initialBooks)
        return store.books.initialBooks
    });

    const handleDelete = (id) => {
        // console.log(id);
        dispatch(removeBook(id));
     }
    const handleAdd2Delete = (id) => {
        // console.log(id);
        dispatch(addToCart(id));
     }

    return (
        <div>
            <h1>Books Collection</h1>
            <br />
            <br />

            <div className='tableWraper'>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>title</th>
                            <th>Author</th>
                            <th>Id</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            booksArray && booksArray.map((book, index) => {
                                const { id, title, author, price, qty } = book;
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{title}</td>
                                        <td>{author}</td>
                                        <td>{id}</td>
                                        <td>{price}</td>
                                        <td>{qty}</td>
                                        <td>
                                            <Link to="/editBook" state={book}><button>Edit</button></Link>
                                            <button onClick={() => handleDelete(id)}>Delete</button>
                                            <button onClick={() => handleAdd2Delete(id)}>Add2Cart</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BooksCollection;