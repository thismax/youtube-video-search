import React from 'react';
import moment from 'moment';
import { shape, string } from 'prop-types';
import './Video.css';

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
    <div className="card container">
      <div className="row">
        <div className="col-sm-4">
          <img src={thumbnails.high.url} alt="thumbnail" />
        </div>

        <div className="col-sm-8">
          <div>{title}</div>
          <div>{description}</div>
          <a href={`https://www.youtube.com/watch?v=${id}`}>View</a>
          <div>
            {moment(publishedAt).format('DD MMMM YYYY')} by
            {channelTitle}
          </div>
        </div>
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
