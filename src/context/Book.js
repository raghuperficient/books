import {  createContext, useCallback } from "react";
import { useState } from "react";
import axios from 'axios';

const BooksContext = createContext()


function Provider({children}){

 const [books, setBooks] = useState([]);

  const fetchBooks = useCallback ( async (title) => {
    const response =  await axios.get('http://book-service-git-raghu-demo.apps.prft-cps.zuvk.p1.openshiftapps.com/api/books');

    setBooks(response.data)

  },[])

  const createBook = async (title) => {

    const response =  await axios.post('http://book-service-git-raghu-demo.apps.prft-cps.zuvk.p1.openshiftapps.com/api/books', {
      title
    })
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  }
  
  const deleteBookById = async (id) => {
    const response =  await axios.delete(`http://book-service-git-raghu-demo.apps.prft-cps.zuvk.p1.openshiftapps.com/api/books/${id}`)

      const updateBooks = books.filter((book) => {
         return book.id != id
      } );
      setBooks(updateBooks);

  }

 const editBookById = async (id, title) => {

  const response =  await axios.put(`http://book-service-git-raghu-demo.apps.prft-cps.zuvk.p1.openshiftapps.com/api/books/${id}`, {
    title : title
  });

  const updateBookspdatedBooks = books.map((book) =>{
    if(book.id == id ){
      return {...books, ...response.data};
      
    }
    return book;

  })

  setBooks(updateBookspdatedBooks)

 }

    const valueToShare = {
        books: books,
        fetchBooks: fetchBooks,
        editBookById : editBookById,
        deleteBookById : deleteBookById,
        createBook: createBook
    }

    return <BooksContext.Provider value={valueToShare}>{children}</BooksContext.Provider>

}

export {Provider}
export default BooksContext;