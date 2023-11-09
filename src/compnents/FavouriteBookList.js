import BookShow from "./BookShow"
import BooksContext from "../context/BooksContext"
import { useContext } from "react"
import './Bookshow.css'

const URL = "https://openlibrary.org/works/";

function FavouriteBookList() {

    const {favBooks} = useContext(BooksContext)
   
    const bookshowList = favBooks.map((book) =>{
        return <BookShow  id={book.id} key={book.id} ></BookShow>
    })
    
    return (
      <div>
      <h1>Favourite List</h1>
      <div className="book-list">{bookshowList}</div>
      </div>
    )
}

export default FavouriteBookList