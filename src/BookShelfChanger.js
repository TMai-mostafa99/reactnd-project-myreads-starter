import React, { Component } from 'react'

class BookShelfChanger extends Component {

  
   render(){

    
      const { books,book , changeBookShelf } = this.props;
     
      let currentShelf = 'none'
      const foundBook = books.find( (i) => (i.id === book.id)); //will return object

      if(foundBook !== undefined)
       currentShelf = foundBook.shelf
        else
       currentShelf='none'
    
     //console.log("title: ",book.title,"shelf: ",book.shelf , "current shelf: ", currentShelf)
       
        return(
            <div className="book-shelf-changer">
            <select value={ currentShelf}  onChange={(event) => changeBookShelf(book ,event.target.value)} >
              <option  disabled >Move to...</option>
              <option  value="currentlyReading">Currently Reading</option>
              <option  value="wantToRead">Want to Read</option>
              <option  value="read">Read</option>
              <option  value="none">None</option>
            </select>
          </div>
        )
    }
}
export default BookShelfChanger