import React, { useState } from 'react';
import Saved from './pages/Saved'
import Search from './pages/Search'
import { Route } from 'react-router-dom'
import BookContext from './utils/BookContext'
import axios from 'axios';

function App() {

  const [bookState, setBookState] = useState({
    books: [],
    query: '',
    bookSearchInput: '',
    searchedBooks: []
  })

  bookState.handleInputChange = ({ target }) => {
    setBookState({ ...bookState, [target.name]: target.value })
  }

  bookState.handleInputSearch = event => {
    event.preventDefault()

    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookState.bookSearchInput}&key=AIzaSyCE0ZsJWit1sRHec64nP7PNBEMp1_vtU9Y`)
      .then(({data: { items }}) => {
        let booksObj = items.map(obj => obj.volumeInfo)
        setBookState({ 
          ...bookState,
          bookSearchInput: '', 
          searchedBooks: booksObj })
      })
      .catch(e => console.error(e))
  }

  return (
    <BookContext.Provider value={bookState}>
      <Route exact path="/" component={Search} />
      <Route exact path="/saved" component={Saved} />
    </BookContext.Provider>
  );
}

export default App;
