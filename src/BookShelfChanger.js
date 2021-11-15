import React, { Component } from 'react'

class BookShelfChanger extends Component {
   render(){
      const { books,book , changeBookShelf } = this.props;
  
      let currentShelf = 'none';

    // if book is in current list, set current shelf to book.shelf

    for (let i of books) {
      if (i.id === book.id) { currentShelf = i.shelf;
        break;
      }
    }
    
    //console.log("the ",book.title,"has shelf of ", book.shelf)
       
        return(
            <div className="book-shelf-changer">
            <select defaultValue={ currentShelf }  onChange={(event) => changeBookShelf(book ,event.target.value)} >
              <option  value="none" disabled >Move to...</option>
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