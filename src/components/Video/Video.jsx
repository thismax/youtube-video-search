import React from 'react';
import moment from 'moment';
import { shape, string } from 'prop-types';

const Video = ({ video }) => {
  const {
    thumbnails,
    title,
    description,
    publishedAt,
    channelTitle,
  } = video.snippet;
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
        {moment(publishedAt).format('DD MMMM YYYY')} by
        {channelTitle}
      </div>
    </div>
  );
};

Video.propTypes = {
  video: shape({
    snippet: shape({
      title: string.isRequired,
      description: string.isRequired,
      publishedAt: string.isRequired,
      channelTitle: string.isRequired,
    }).isRequired,
    id: shape({}).isRequired,
  }).isRequired,
};

export default Video;
