import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import AddBook from "./pages/addBookPage/AddBook";
import BooksCollection from "./pages/booksCollectionPage/BooksCollection";
import EditBook from "./pages/editBookPage/EditBook";
import Home from "./pages/homePage/Home";
import NotFound from "./pages/notFoundPag/NotFound";
import CartComponent from "./pages/shared/CartComponent";
import NavigationBar from "./pages/shared/NavigationBar";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/booksCollection" element={<BooksCollection />} />
        <Route path="/addBook" element={<AddBook />} />
        <Route path="/editBook" element={<EditBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CartComponent />
    </div>
  );
}

export default App;
