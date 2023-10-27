import { useContext, useEffect, useState } from 'react';
import BookCreate from './compnents/BookCreate';
import BookList from './compnents/BookList';
import BooksContext from './context/Book';

function App() {

  const {fetchBooks} = useContext(BooksContext)
  
  useEffect( () => {
    fetchBooks();
  },[fetchBooks])


  return (
    <div className='app' >
      <h1>Reading List</h1>
    <BookList />
    <BookCreate />
    </div>
  );
}

export default App;
