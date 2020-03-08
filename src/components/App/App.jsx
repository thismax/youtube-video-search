import React, { Component } from 'react';
import Videos from '../Videos/Videos';
import searchResponse from '../../testData/searchResponse.json';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResponse,
      searchTerm: '',
    };
  }

  componentDidMount() {
    this.searchVideos('react hooks');
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

    // xhr.open(
    //   'GET',
    //   this.concatPageToken(
    //     `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&q=${query}&key=${process.env.REACT_APP_API_KEY}`,
    //     pageToken,
    //   ),
    // );

    // xhr.send();
  };

  render() {
    const { searchResponse, searchTerm } = this.state;

    return (
      <div className="container">
        <form
          id="youtube-video-search-form"
          onSubmit={e => {
            this.searchVideos(searchTerm);
            e.preventDefault();
          }}
          className="py-4"
        >
          <div className="row w-75 mx-auto py-2">
            <input
              className="search-input col-10 py-2"
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={e => this.setState({ searchTerm: e.target.value })}
            />
            <button type="submit" className="col-2 search-button">
              <i className="fa fa-search" />
            </button>
          </div>
        </form>

        {searchResponse.items && searchResponse.items.length ? (
          <Videos
            searchResponse={searchResponse}
            searchTerm={searchTerm}
            searchVideos={this.searchVideos}
          />
        ) : (
          'Not Found, try another Search'
        )}
      </div>
    );
  }
}

export default App;
