import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import SearchBooks  from './SearchBooks'
import BookShelfChanger from './BookShelfChanger'
import { Link } from 'react-router-dom'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    currentlyReading: [],
    wantToRead: [],
    read: []
  } 
 
  componentDidMount() {
    this.getAllbooks()
  }
  getAllbooks(){
    BooksAPI.getAll()
    .then((books) => {
      let currentlyReading = books ? books.filter(book => book.shelf == "currentlyReading") : null
      let wantToRead = books ? books.filter(book => book.shelf == "wantToRead") : null
      let read = books ? books.filter(book => book.shelf == "read") : null

      this.setState({currentlyReading, wantToRead , read })
      console.log(currentlyReading,wantToRead,read)
    })

  }
  //reload if shelf changes to view immediate change without reloading
  changeBookShelf(book , shelf){
    console.log(book.title , " the shelf is ",shelf)
    BooksAPI.update(book ,shelf).then(()=>
    this.getAllbooks()
    )
  }
//to avoid redundancy
renderShelf(books , title){

  return (
    <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        { books.map((book) =>(
           <li key={book.id}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail ? book.imageLinks.thumbnail : null })`  }}></div>
                <BookShelfChanger 
                book={book}
                changeBookShelf={this.changeBookShelf.bind(this)}/>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
          </div>
        </li>
        ))}
      </ol>
    </div>
  </div>
  )



}

  render() {
    const { currentlyReading, wantToRead, read } = this.state;

    return (
      
      <div className="app">
        <Route exact path='/search' render = {() => (
          <SearchBooks getAllbooks={this.getAllbooks.bind(this)}/>)}/>
        <Route exact path='/' render = {() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {this.renderShelf(currentlyReading , 'Currently Reading')}
                {this.renderShelf(wantToRead , ' Want to Read')}
                {this.renderShelf(read , 'Read')}
              </div>
            </div>
            <div className="open-search">
            <Link
            to='/search'
            className='go-search'> search </Link>
            </div>
          </div>

        )

        }/>
       
        
      </div>
    )
  }
}

export default BooksApp
