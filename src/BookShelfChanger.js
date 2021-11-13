import { string } from 'prop-types'
import React, { Component } from 'react'

class BookShelfChanger extends Component {

    state = {
        result : ''
    }

    handleSelectChange = (event) => {
        this.setState({
          result: event.target.value
        })
      }

    render(){
        const { title } = this.props;
        console.log(this.state.result);
        return(
            <div className="book-shelf-changer">
            <select onClick={this.handleSelectChange}>
              <option hidden='' value="move" disabled>Move to...</option>
              <option hidden='' value="currentlyReading">Currently Reading</option>
              <option hidden='' value="wantToRead">Want to Read</option>
              <option hidden='' value="read">Read</option>
              <option hidden='' value="none">None</option>
            </select>
          </div>
        )
    }
}
export default BookShelfChanger