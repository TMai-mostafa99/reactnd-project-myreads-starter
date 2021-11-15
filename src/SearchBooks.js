import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelfChanger from './BookShelfChanger'


class SearchBooks extends Component{
  state = {
    query: '',
    searchedBooks: []
  }
 
  updateQuery = (query) => {

    this.setState(() => ({
      query: query
    }))
    // handle empty query
    //console.log(query)
    if(query !== ''){ // avoid error after clearing query
    BooksAPI.search(query).then(searchedBooks => searchedBooks ? this.setState({searchedBooks}): [])
  }

  }
  updateBookShelf(book , shelf){
    BooksAPI.update(book,shelf).then(
      this.props.getAllbooks(),
     console.log("shelf updated :", book ," to shelf : ", shelf)  
    ).catch(()=> " something went wrong :(")
  }

  renderSearch(){
    const {query, searchedBooks} = this.state;
    if(query){
      return searchedBooks.error ?
       <div> No results found</div>
       :searchedBooks.map((book) =>{
         return(  
        <li key={book.id}>
       <div className="book">
         <div className="book-top">
           <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`  }}></div>
             <BookShelfChanger changeBookShelf={this.updateBookShelf.bind(this)} book={book}/>
         </div>
         <div className="book-title">{book.title}</div>
         <div className="book-authors">{book.authors}</div>
       </div>
     </li>
       )})

    } 
  }



render(){
    return (
        <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search" >Close</Link>        
          <div className="search-books-input-wrapper">
         
            <input type="text" 
                   placeholder="Search by title or author"
                   value={this.state.query}
                   onChange={(event) => this.updateQuery(event.target.value)}
            />
                  <div className="search-books-results">
                    <ol className="books-grid">
                      { this.renderSearch() }
                    </ol>
                  </div>
          </div>
        </div>
      </div>  

    )
}

}
export default SearchBooks;