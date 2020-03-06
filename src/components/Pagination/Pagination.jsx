import React, { Component } from 'react';
import { shape, func, string } from 'prop-types';

export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      totalPages: 1,
    };
  }

  componentDidMount() {
    const { searchResponse } = this.props;
    this.setState({
      totalPages: this.calculateTotalPages(searchResponse.pageInfo),
    });
  }

  calculateTotalPages = ({ totalResults, resultsPerPage }) =>
    totalResults / resultsPerPage;

  render() {
    const { searchResponse, searchVideos, searchTerm } = this.props;
    const { nextPageToken, prevPageToken } = searchResponse;
    const { currentPage, totalPages } = this.state;

    return (
      <div>
        <button
          onClick={() => {
            this.setState({ currentPage: currentPage - 1 });
            searchVideos(searchTerm, prevPageToken);
          }}
          type="button"
        >
          left
        </button>
        {currentPage} / {totalPages}
        <button
          onClick={() => {
            this.setState({ currentPage: currentPage + 1 });
            searchVideos(searchTerm, nextPageToken);
          }}
          type="button"
        >
          right
        </button>
      </div>
    );
  }
}

Pagination.propTypes = {
  searchResponse: shape({}).isRequired,
  searchVideos: func.isRequired,
  searchTerm: string.isRequired,
};
