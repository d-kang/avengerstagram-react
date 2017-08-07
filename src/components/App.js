import React, { Component } from 'react';
import '../App.css';
import SearchMarvel from './SearchMarvel';
import Character from './Character';
import { filteredSampleData } from '../sampleData';
class App extends Component {
  constructor() {
    super();
    this.state = {
      characterQuery: [],
      filteredSampleData
    }
    this.renderQuery = this.renderQuery.bind(this);
    this.renderChar = this.renderChar.bind(this);

  }

  renderInitialState() {
    return this.state.filteredSampleData.map((char, key) => {
      return (
        <span class="character-list">
          <li><img class="character-list"src={`${char.thumbnail.path}/portrait_fantastic.jpg`} alt=""/></li>
          <ul>
            <li>name: {char.name}</li>

            <li><a href={char.urls[0].url} target="_blank">Detail</a></li>
            <li><a href={char.urls[1].url} target="_blank">Wiki</a></li>
            <li><a href={char.urls[2] ? char.urls[2].url : ''} target="_blank">Comic Link</a></li>
          </ul>
          {/* <span>type: {char.urls[2].url}</span> */}
        </span>
      )
    })

  }

  renderQuery(q) {
    // console.log({q});
    this.setState({characterQuery: q.data[0]});
    // console.log(Object.keys(q.data[0]))
    // ["id", "name", "description", "modified", "thumbnail", "resourceURI", "comics", "series", "stories", "events", "urls"]
    this.renderChar();
  }
  renderChar() {
    console.log(11, this.state.characterQuery)

    var q = this.state.characterQuery
    return (
      <div>
        <img src={`${q.thumbnail.path}/portrait_uncanny.jpg`} alt=""/>
        <ul>
          <li>name: {q.name}</li>
          <li>description: {q.description}</li>
          <li><a href={q.urls[0].url} target="_blank">Detail</a></li>
          <li><a href={q.urls[1].url} target="_blank">Wiki</a></li>
          <li><a href={q.urls[2] ? q.urls[2].url : ''} target="_blank">Comic Link</a></li>
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">

          <h2>Welcome to Avengerstagram</h2>
        </div>
        <p className="App-intro">

        </p>
        <SearchMarvel renderQuery={this.renderQuery} />
        <br/>
        {this.state.characterQuery.length === 0 ? 'Search for your favorite super hero!!' : this.renderChar() }
        <br/><br/>
        <div id="flexcontainer">
          {this.renderInitialState()}
        </div>
      </div>
    );
  }
}

export default App;
