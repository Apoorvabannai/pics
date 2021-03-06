import React, { Component } from 'react';

class SearchBar extends Component{
  state = {term: ''};

  onInputClicked = (event) => {
    this.props.onSearchEntered(this.state.term);
  };

  onFormSubmit = (event) => {
    event.preventDefault();
  }

  render(){
    return(
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search an Image: </label>
            <input type="text" value={this.state.term} onChange={e => this.setState({term: e.target.value})}/>
          </div>
          <button className="ui button" onClick={this.onInputClicked}> Search </button>
        </form>
      </div>
    );
  };
};

export default SearchBar;
