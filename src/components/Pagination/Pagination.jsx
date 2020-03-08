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
    const totalPages = this.calculateTotalPages(searchResponse.pageInfo);
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    return (
      <div>
        <button
          className="page-selector"
          onClick={() => {
            if (currentPage > 1) {
              this.setState({ currentPage: currentPage - 1 });
              searchVideos(searchTerm, prevPageToken);
            }
          }}
          type="button"
        >
          <i
            className={`fa fa-chevron-left ${isFirstPage ? 'disabled' : ''}`}
          />
        </button>
        <span className="mx-2">
          {currentPage} / {totalPages}
        </span>
        <button
          className="page-selector"
          onClick={() => {
            if (currentPage < totalPages) {
              this.setState({ currentPage: currentPage + 1 });
              searchVideos(searchTerm, nextPageToken);
            }
          }}
          type="button"
        >
          <i
            className={`fa fa-chevron-right ${isLastPage ? 'disabled' : ''}`}
          />
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
