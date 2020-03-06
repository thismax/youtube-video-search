import React from 'react';
import { shape } from 'prop-types';
import Video from '../Video/Video';

const Videos = ({ searchResponse }) => (
  <div>
    <div>
      Total Results:
      {searchResponse.pageInfo.totalResults}
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
};

export default Videos;
