import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from './context/BooksContext';
import {
    BrowserRouter, Routes, Route
  } from 'react-router-dom';
  import './index.css';
  import Home from './pages/Home/Home';
  import About from "./pages/About/About";
  import Favourite from './pages/Favourite/Favourite';
  import BookList from "./compnents/BookList/BookList";
  import BookDetails from "./compnents/BookDetails/BookDetails";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}>
        <Route path = "about" element = {<About />} />
        <Route path = "favourite" element = {<Favourite />} />
        <Route path = "book" element = {<BookList />} />
        <Route path = "/book/:id" element = {<BookDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);


