import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';


import {
  getBooksFromFakeXHR as getBooks,
  addBookToFakeXHR as addBook
} from '../../lib/books.db';
import BookList from '../../components/BookList';

import AppTitle from '../../components/AppTitle';
import FeaturedBook from '../../components/FeaturedBook';
import NewBookForm from '../NewBookForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      books: []
    }
    this.addNewBook = this.addNewBook.bind(this);
  }

  addNewBook(book) {
    return addBook(book)
    .then(books => {
      return this.setState({
        books: [...books]
      })
    })
  }

  componentDidMount() {
    this.setState({ title: 'My Books List'});
    getBooks()
    .then( books => {
      // this.setState({ books:books})
      this.setState({ books });
    });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

        </header>
        <AppTitle title={this.state.title}/>
        {
          this.state.books.length > 0 
          ?  <FeaturedBook book={this.state.books[2]}/>
          : null
        }
        <NewBookForm submitHandler={this.addNewBook}/>
        <BookList books={this.state.books}/>
      </div>
    );
  }
}

export default App;
