import React, { Component } from 'react';
import ImagesApi from '../api/ImagesApi';
import SearchBar from './SearchBar';
import ImageList from './ImageList/ImageList';

class App extends Component {
  state = {images: []};
  onSearchSubmit = async(term) => {
    const results = await ImagesApi.get('/search/photos', {
      params: {query: term}
    });
    this.setState({images: results.data.results});
  }
  render(){
    return(
      <div className="ui container" style={{marginTop: "10px"}}>
        <SearchBar onSearchEntered={this.onSearchSubmit}/>
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
