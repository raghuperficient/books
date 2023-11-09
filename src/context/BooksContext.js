import {  createContext, useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
const URL = "http://openlibrary.org/search.json?title=";

const BooksContext = createContext()


function Provider({children}){

 const [books, setBooks] = useState([]);
 const [favBooks, setFavBooks] = useState([]);
 const [searchTerm, setSearchTerm] = useState("");
 const [loading, setLoading] = useState(true);
 const [resultTitle, setResultTitle] = useState("");
 const [isSearchVisible, setIsSearchVisible] = useState(true);


 const fetchBooks = useCallback(async() => {
  setLoading(true);
  try{

      const favResponse =  await axios.get('http://localhost:8080/api/books');
   
      setFavBooks(favResponse.data)
      if(searchTerm.length==0){
        return;
      }
      const response = await fetch(`${URL}${searchTerm}`);
      const data = await response.json();
      const {docs} = data;

      if(docs){
          const newBooks = docs.slice(0, 20).map((bookSingle) => {
              const {key, author_name, cover_i, edition_count, first_publish_year, title} = bookSingle;

              return {
                  id: key,
                  author: author_name,
                  cover_id: cover_i,
                  edition_count: edition_count,
                  first_publish_year: first_publish_year,
                  title: title
              }
          });

          setBooks(newBooks);

          

          if(newBooks.length > 1){
              setResultTitle("Your Search Result");
          } else {
              setResultTitle("No Search Result Found!")
          }
      } else {
          setBooks([]);
          setResultTitle("No Search Result Found!");
      }
      setLoading(false);
  } catch(error){
      console.log(error);
      setLoading(false);
  }
}, [searchTerm]);

useEffect(() => {
  fetchBooks();
}, [searchTerm, fetchBooks]);



const fetchFavorites = useCallback ( async (title) => {
  const response =  await axios.get('http://books-git-raghu-demo.apps.prft-cps.zuvk.p1.openshiftapps.com/api/books');
  setFavBooks(response.data)
},[])

  const addtoFavourite = async (id) => {
    const response =  await axios.post('http://books-git-raghu-demo.apps.prft-cps.zuvk.p1.openshiftapps.com/api/books', {
      id
    })
    const updatedBooks = [...favBooks, response.data];
    setFavBooks(updatedBooks);
  }
  
  const deleteFavourite = async (id) => {
      const response =  await axios.delete(`http://books-git-raghu-demo.apps.prft-cps.zuvk.p1.openshiftapps.com/api/books/${id}`)
      const updateBooks = favBooks.filter((book) => {
         return book.id != id
      } );
      setFavBooks(updateBooks);

  }

  const setVisibility = (val) => {
    setIsSearchVisible(val)
  }

 
    const valueToShare = {
        books: books,
        setVisibility:setVisibility,
        isSearchVisible,isSearchVisible,
        setSearchTerm:setSearchTerm,
        fetchBooks: fetchBooks,
        deleteFavourite : deleteFavourite,
        addtoFavourite: addtoFavourite,
        setResultTitle:setResultTitle,
        favBooks:favBooks
        
    }

    return <BooksContext.Provider value={valueToShare}>{children}</BooksContext.Provider>

}

export {Provider}
export default BooksContext;