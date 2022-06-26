import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../pages/booksCollectionPage/booksSlice";

const store = configureStore({
    reducer: {
        books: booksReducer,
    },
})

export default store;