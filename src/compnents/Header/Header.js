import React, { useContext } from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";
import BooksContext from "../../context/BooksContext";
import HomeHeader from '../HomeHeader';

const Header = () => {

  const {isSearchVisible, setSearchVisible} = useContext(BooksContext);

  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
          
                { isSearchVisible ? <HomeHeader /> : null }
        </header>
    </div>
  )
}

export default Header