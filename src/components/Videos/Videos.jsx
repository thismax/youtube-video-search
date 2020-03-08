import React from 'react';
import { shape, string, func } from 'prop-types';
import Pagination from '../Pagination/Pagination';
import Video from '../Video/Video';

const Videos = ({ searchResponse, searchTerm, searchVideos }) => (
  <div>
    <div className="d-flex flex-row justify-content-between">
      <div>Total Results: {searchResponse.pageInfo.totalResults}</div>
      <Pagination
        searchResponse={searchResponse}
        searchTerm={searchTerm}
        searchVideos={searchVideos}
      />
    </div>
    <div>
      {searchResponse.items.map(video => (
        <Video key={video.etag} video={video} />
      ))}
    </div>
  </div>
);

Videos.propTypes = {
  searchResponse: shape({}).isRequired,
  searchTerm: string.isRequired,
  searchVideos: func.isRequired,
};

export default Videos;
