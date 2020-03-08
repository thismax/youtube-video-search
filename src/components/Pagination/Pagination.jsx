import React, { Component } from 'react';
import { shape, func, string } from 'prop-types';
import './Pagination.css';

export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
    };
  }

  calculateTotalPages = ({ totalResults, resultsPerPage }) =>
    Math.ceil(totalResults / resultsPerPage);

  render() {
    const { searchResponse, searchVideos, searchTerm } = this.props;
    const { nextPageToken, prevPageToken } = searchResponse;
    const { currentPage } = this.state;

    return (
      <div>
        <button
          className="page-selector"
          onClick={() => {
            this.setState({ currentPage: currentPage - 1 });
            searchVideos(searchTerm, prevPageToken);
          }}
          type="button"
        >
          <i className="fa fa-chevron-left mr-2" />
        </button>
        {currentPage} / {this.calculateTotalPages(searchResponse.pageInfo)}
        <button
          className="page-selector"
          onClick={() => {
            this.setState({ currentPage: currentPage + 1 });
            searchVideos(searchTerm, nextPageToken);
          }}
          type="button"
        >
          <i className="fa fa-chevron-right ml-2" />
        </button>
      </div>
    );
  }
}

Pagination.defaultProps = {
  searchResponse: shape({
    nextPageToken: null,
    prevPageToken: null,
  }),
};

Pagination.propTypes = {
  searchResponse: shape({
    nextPageToken: string,
    prevPageToken: string,
  }),
  searchVideos: func.isRequired,
  searchTerm: string.isRequired,
};
