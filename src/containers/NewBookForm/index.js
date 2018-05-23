import React, { Component } from 'react';

// import { addBookToFakeXHR as addBook } from '../../lib/books.db';

class NewBookForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      author: ''
    }

    this.titleChangeHandler = this.titleChangeHandler.bind(this);
    this.authorChangeHandler = this.authorChangeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.focusTextInput = this.focusTextInput.bind(this); 
  }

  componentDidMount() {
    this.focusTextInput()
  }

  focusTextInput() {
    this.textInput.focus()
  }

  titleChangeHandler(event) {
    const { value } = event.target;
    this.setState({ title: value});
  }

  authorChangeHandler(event) {
    const { value } = event.target;
    this.setState({ author: value});
  }


  handleSubmit(event) {
    event.preventDefault();

    return this.props.submitHandler(Object.assign({}, this.state))
    .then(() => {
      this.setState({ title: '', author: '' });
      this.focusTextInput();
    })

  }

  render() {
    return(
      <div>
    <form onSubmit={this.handleSubmit}>
    <label htmlFor="title">Title: </label>
    <input 
      type="text" 
      id="title" 
      name="title"
      placeholder="Enter book title"
      ref={input => this.textInput = input}
      value={this.state.title}
      onChange={this.titleChangeHandler}
    />
    <label htmlFor="author">Author: </label>
     <input 
      type="text" 
      id="author" 
      name="author"
      placeholder="Enter book author"
      value={this.state.author}
      onChange={this.authorChangeHandler}
    />
    <button type="submit">Submit</button>
    </form>
    <div className="form debugging">
      <span>{this.state.title}</span> <span>{this.state.author}</span>
    </div>
    </div>
    )
  }
}

export default NewBookForm;