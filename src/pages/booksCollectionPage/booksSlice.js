import { createSlice } from "@reduxjs/toolkit";
const id = () => Math.random().toString(36).substr(2, 9);
export const booksSlice = createSlice({
    name: "books",
    initialState: {
        initialBooks: [
            { id: id(), title: "LoveBook", author: "Asif", price: 200, qty: 2 },
            { id: id(), title: "HateBook", author: "Asif", price: 100, qty: 1 },
        ],
        initialCart: [],
    },
    reducers: {
        addBook: (state, action) => {
            state.initialBooks.push(action.payload);
        },
        removeBook: (state, action) => {
            state.initialBooks = state.initialBooks.filter(book => book.id !== action.payload);
        },
        updateBook: (state, action) => {
            // state.books = state.books.map(book => {
            //     if (book.id === action.payload.id) {
            //         return action.payload;
            //     }
            //     return book;
            // });

            /* secondway */
            const { id, title, author, price, qty } = action.payload;
            const theBookIs = state.initialBooks.find(book => book.id === id);
            theBookIs.title = title;
            theBookIs.author = author;
            theBookIs.price = price;
            theBookIs.qty = qty;
        },
        /* cart related reducers */
        addToCart: (state, action) => {
            const theBookIs = state.initialBooks.find(book => book.id === action.payload);
            state.initialCart.push(theBookIs);
        },
        removeFromCart: (state, action) => {
            state.initialCart = state.initialCart.filter(book => book.id !== action.payload);
        },
    }
})

export const { addBook, removeBook, updateBook,addToCart,removeFromCart } = booksSlice.actions;
export default booksSlice.reducer;