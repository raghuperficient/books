import { useContext, useState } from "react"
import BookEdit from "./BookEdit";
import BooksContext from "../context/Book";

function BookShow({book}) {

const { deleteBookById }  = useContext(BooksContext)


const [showedit, setShowEdit] = useState(false);

const handleDeleteClick = () => {
    deleteBookById(book.id)
}

const handleEditClick = () => {
    setShowEdit(!showedit)
}

const onSave = () => {
    setShowEdit(false)
}

let content = <h3>{book.title}</h3>
if(showedit){
    content = <BookEdit book={book}  onSave={onSave}></BookEdit>
}
  return <div className="book-show">
    <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
    <div>{content}</div>
    <div className="actions">
    <button className="edit" onClick={handleEditClick}>edit</button>
        <button className="delete" onClick={handleDeleteClick}>delete</button>
    </div>
    </div>
}

export default BookShow;
