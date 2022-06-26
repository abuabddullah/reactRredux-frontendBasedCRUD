import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addBook } from '../booksCollectionPage/booksSlice';
import { useNavigate } from "react-router-dom";


const id = () => Math.random().toString(36).substr(2, 9);


const AddBook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        const newBook = {
            id: id(),
            title: e.target.title.value,
            author: e.target.author.value,
            price: e.target.price.value,
            qty: e.target.qty.value,
        }
        // console.log(newBook);
        dispatch(addBook(newBook));
        e.target.reset()
        navigate("/booksCollection")
    }
    return (
        <div>
            <h1>Add Book</h1>
            <br />
            <br />

            <div>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <div>
                            <label htmlFor='title'>title</label>
                            <input type='text' className='form-control' name='title' placeholder='Enter title' />
                        </div>
                        <div>
                            <label htmlFor='author'>Author</label>
                            <input type='text' className='form-control' name='author' placeholder='Enter author' />
                        </div>
                        <div>
                            <label htmlFor='price'>Price</label>
                            <input type='text' className='form-control' name='price' placeholder='Enter price' />
                        </div>
                        <div>
                            <label htmlFor='qty'>Qty</label>
                            <input type='text' className='form-control' name='qty' placeholder='Enter qty' />
                        </div>
                        <p><button type='submit' className='btn btn-primary'>Submit</button></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBook;