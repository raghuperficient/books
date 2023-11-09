import { useContext, useEffect, useState } from 'react';
import BookCreate from './compnents/BookCreate';
import FavouriteBookList from './compnents/FavouriteBookList';
import BooksContext from './context/BooksContext';

function App() {

  const {fetchBooks} = useContext(BooksContext)
  
  useEffect( () => {
    fetchBooks();
  },[fetchBooks])


  return (
    <div className='app' >
      <h1>Reading List</h1>
    <FavouriteBookList />
    </div>
  );
}

export default App;
