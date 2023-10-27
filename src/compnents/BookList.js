import BookShow from "./BookShow"
import BooksContext from "../context/Book"
import { useContext } from "react"

function BookList() {

    const {books} = useContext(BooksContext)
    const bookshowList = books.map((book) =>{
        return <BookShow  book={book} key={book.id} ></BookShow>

    })
    
    return (<div className="book-list">{bookshowList}</div>)
}

export default BookList