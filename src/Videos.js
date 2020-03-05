import React from 'react';
import Video from './Video';

const Videos = ({ searchResponse }) => (
  <div>
    <div>Total Results: {searchResponse.pageInfo.totalResults}</div>
    <div>
      {searchResponse.items.map(video => (
        <Video key={video.etag} video={video} />
      ))}
    </div>
  </div>
);

export default Videos;
