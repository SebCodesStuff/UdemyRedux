import React, {Component} from 'react';
import { connect } from 'react-redux';
import {selectBook} from '../actions/index';

//This makes your action flow through the reducers in your app
import {bindActionCreators} from 'redux';

class Booklist extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      )
    })
  }

  render(){
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned will shoow up as props inside Booklist
  return {
    books: state.books
  };
}

// Anything returned from this function ends up as props in booklist container
function mapDispatchToProps(dispatch) {
// When selectBook is called the result should be passed to all reducers
// Dispatch actually sends it to all the reducers
  return bindActionCreators({selectBook:selectBook}, dispatch)
}

// This connects it to redux and exports the container (takes a function and the container)
// Adding mapDispatchToProps props makes the selectBook method available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(Booklist)
