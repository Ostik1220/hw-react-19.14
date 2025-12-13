import './App.css';
import { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';

class App extends Component{
state = {
  query: "",
};

searchCollector = (word) => {
    this.setState({ query: word});
    console.log(word);
  };

  render() {
    return (
    <div className="App">
      <Searchbar collector={this.searchCollector}/>
      <ImageGallery query={this.state.query}/>
    </div>
  );
  }
}

export default App;
