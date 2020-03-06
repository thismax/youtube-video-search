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

  concatPageToken = (url, pageToken) => {
    if (pageToken) {
      return `${url}&pageToken=${pageToken}`;
    }
    return url;
  };

  searchVideos = (query, pageToken) => {
    const xhr = new XMLHttpRequest(); // eslint-disable-line

    xhr.addEventListener('load', e => {
      this.setState({ searchResponse: JSON.parse(e.target.response) });
    });

    xhr.open(
      'GET',
      this.concatPageToken(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&q=${query}&key=${process.env.REACT_APP_API_KEY}`,
        pageToken,
      ),
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
          <Videos
            searchResponse={searchResponse}
            searchTerm={searchTerm}
            searchVideos={this.searchVideos}
          />
        ) : (
          'Loading'
        )}
      </div>
    );
  }
}

export default App;
