import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateBook } from '../booksCollectionPage/booksSlice';

const EditBook = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    // console.log(location.state);
    const {id,title,author,price,qty} = location.state || {};
    const handleSubmit = (e) => {
        e.preventDefault()
        const updatedBook = {
            id: id,
            title: e.target.title.value,
            author: e.target.author.value,
            price: e.target.price.value,
            qty: e.target.qty.value,
        }
        console.log(updatedBook);
        dispatch(updateBook(updatedBook));
        navigate("/booksCollection")
        
    }
    return (
        <div>
            <br />
            <br />
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <div>
                        <label htmlFor='title'>title</label>
                        <input type='text' className='form-control' defaultValue={title} name='title' placeholder='Enter title' />
                    </div>
                    <div>
                        <label htmlFor='author'>Author</label>
                        <input type='text' className='form-control' defaultValue={author} name='author' placeholder='Enter author' />
                    </div>
                    <div>
                        <label htmlFor='price'>Price</label>
                        <input type='text' className='form-control' defaultValue={price} name='price' placeholder='Enter price' />
                    </div>
                    <div>
                        <label htmlFor='qty'>Qty</label>
                        <input type='text' className='form-control' defaultValue={qty} name='qty' placeholder='Enter qty' />
                    </div>
                    <p><button type='submit' className='btn btn-primary'>Submit</button></p>
                </div>
            </form>
        </div>
    );
};

export default EditBook;