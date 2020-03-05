import React from 'react';
import moment from 'moment';

const Video = ({ video }) => {
  const { thumbnails, title, description, publishedAt, channelTitle } = video.snippet;
  const { id } = video;

  return (
    <div>
      <img
        srcSet={`${thumbnails.medium.url} 320w,
              ${thumbnails.high.url} 480w`}
        sizes="(max-width:800px) 320px, 480px"
        src={thumbnails.high.url}
        alt="thumbnail"
      />

      <div>{title}</div>
      <div>{description}</div>
      <a href={`https://www.youtube.com/watch?v=${id}`}>View</a>
      <div>
        {moment(publishedAt).format('DD MMMM YYYY')} by {channelTitle}
      </div>
    </div>
  );
};

export default Video;
