import React, {useState, useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import './Bookshow.css'
import cover_img from "../images/cover_not_found.jpg";
import {MdDelete} from 'react-icons/md'
import BooksContext from "../context/BooksContext"

const URL = "https://openlibrary.org/works/";

const BookDetails = ({id}) => {

  const {deleteFavourite} = useContext(BooksContext)
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  

  useEffect(() => {
    async function getBookDetails(){
      try{
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();

        if(data){
          const {description, title, covers, subject_places, subject_times, subjects} = data;
          const newBook = {
            description: description ? description.value : "No description found",
            title: title,
            cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : cover_img,
            subject_places: subject_places ? subject_places.join(", ") : "No subject places found",
            subject_times : subject_times ? subject_times.join(", ") : "No subject times found",
            subjects: subjects ? subjects.join(", ") : "No subjects found"
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
      } catch(error){
        console.log(error);
      }
    }
    getBookDetails();
  }, [id]);


  const onDelete = () => {
    deleteFavourite(id);
  }


  return (

    <div className="book-show">
    <img alt="books" src={book?.cover_img}  />
    <div>{book?.title}</div>
    <div className="actions">
        <button className="delete" onClick={onDelete}>
          <MdDelete size = {22} />
        </button>
    </div>
    </div>

    


  )
}

export default BookDetails