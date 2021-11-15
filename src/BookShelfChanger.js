import React, { Component } from 'react'

class BookShelfChanger extends Component {
   render(){
        const { book , changeBookShelf } = this.props;
       // console.log(this.state.result);
       // console.log(shelf , book);
       // var message='You selected '+this.state.selectValue;
       
        return(
            <div className="book-shelf-changer">
            <select defaultValue={book.shelf == null ? "none" : book.shelf }  onChange={(event) => changeBookShelf(book ,event.target.value)} >
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