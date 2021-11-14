import { string } from 'prop-types'
import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class BookShelfChanger extends Component {

    state = {
        result : ''
    }
    
    handleChange = (result, book) => {
      
        BooksAPI.update(book, result).then(
          
            console.log("here with :" , book , result),
            
        )
        this.setState({
            result: result
          })
      }    

    render(){
        const { book , shelf } = this.props;
       // console.log(this.state.result);
       // console.log(shelf , book);
       // var message='You selected '+this.state.selectValue;
       
        return(
            <div className="book-shelf-changer">
            <select defaultValue={shelf}  onChange={(event) => this.handleChange(event.target.value, book)} >
              <option  value="move" disabled >Move to...</option>
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