import { useContext, useState } from "react"
import BooksContext from "../context/Book";

function BookEdit({book, onSave}) {

    const {editBookById} = useContext(BooksContext)

    const[updateValue , setUpdatedValue] = useState(book.title);

    const onValueChange = (event) => {
        setUpdatedValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        editBookById(book.id, updateValue);
        onSave();
    }
    return <form className="book-edit">
        <label>Title</label>
        <input className="input" onChange={onValueChange} value={updateValue}></input>
        <button className="button is-primary" onClick={handleSubmit}>save</button>
    </form>
}

export default BookEdit