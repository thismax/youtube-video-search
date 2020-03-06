import React from 'react';
import { shape } from 'prop-types';
import Pagination from '../Pagination/Pagination';
import Video from '../Video/Video';

const Videos = ({ searchResponse }) => (
  <div>
    <div>
      Total Results:
      {searchResponse.pageInfo.totalResults}
    </div>
    <Pagination searchResponse={searchResponse} />
    <div>
      {searchResponse.items.map(video => (
        <Video key={video.etag} video={video} />
      ))}
    </div>
  </div>
);

Videos.propTypes = {
  searchResponse: shape({}).isRequired,
};

export default Videos;
