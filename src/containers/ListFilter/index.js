import React, {Component} from 'react';

class ListFilter extends Component {
constructor(props) {
  super(props);

  this.state = {
    filter: ''
  }
  this.changeHandler = this.changeHandler.bind(this);
  this.clickHandler = this.clickHandler.bind(this);
}

changeHandler(event) {
  const { value } = event.target;
  const setFilter = this.props.setFilter;
  this.setState({ filter: value }, () => {
    setFilter(this.state.filter);
  });
}

clickHandler(event) {
  event.preventDefault();
  const setFilter = this.props.setFilter;
  this.setState({ filter: '' }, () => {
    setFilter(this.state.filter);
  })
}

  render(){
    return(
      <form>
      <label htmlFor="filter">Filter List:</label>
      <input
        type="text" 
        id="filter" 
        name="filter" 
        placeholder="filter"
        value={this.state.filter}
        onChange={this.changeHandler}
      />
      <button onClick={this.clickHandler}>Clear</button>
    </form>
    )
  }
}

export default ListFilter; 