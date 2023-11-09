import { useContext, useState } from "react"
import BooksContext from "../context/BooksContext"

function BookCreate() {

   const [value , setValue] = useState('')
   const {createBook} = useContext(BooksContext)

    const onValueChange = (event) => {
        setValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        createBook(value);
        setValue('');
    }


    return (<div className="book-create">
        <h3>Add a Book</h3>
        <form>
            <label>Enter the book Title</label>
            <div><input className = "input "value={value} onChange={onValueChange}></input></div>
            <button className="button" onClick={onSubmit}>Create</button>
        </form>
    </div>)
}

export default BookCreate