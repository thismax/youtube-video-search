import React, { Component } from 'react';
import Videos from '../Videos/Videos';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResponse: {},
      searchTerm: 'react hooks',
    };
  }

  componentDidMount() {
    const { searchTerm } = this.state;
    this.searchVideos(searchTerm);
  }

  searchVideos = query => {
    const xhr = new XMLHttpRequest(); // eslint-disable-line

    xhr.addEventListener('load', e => {
      this.setState({ searchResponse: JSON.parse(e.target.response) });
    });

    xhr.open(
      'GET',
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&key=${process.env.REACT_APP_API_KEY}`,
    );

    xhr.send();
  };

  render() {
    const { searchResponse, searchTerm } = this.state;

    return (
      <div>
        <form
          id="youtube-video-search-form"
          onSubmit={e => {
            this.searchVideos(searchTerm);
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="Search..."
            name="youtube-video-search"
            value={searchTerm}
            onChange={e => this.setState({ searchTerm: e.target.value })}
          />
          <button type="submit">Search</button>
        </form>
        {searchResponse.items ? (
          <Videos searchResponse={searchResponse} />
        ) : (
          'Loading'
        )}
      </div>
    );
  }
}

export default App;
