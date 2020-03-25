  
import { createContext } from 'react'

const BookContext = createContext({
  books: [],
  query: '',
  bookSearchInput: '',
  searchedBooks: [],
  handleInputChange: () => { },
  handleInputSearch: () => { }
})

export default BookContext