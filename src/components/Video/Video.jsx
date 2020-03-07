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
        <div className="col-md-5 col-sm-12">
          <img
            src={thumbnails.high.url}
            className="img-fluid"
            alt="thumbnail"
          />
        </div>

        <div className="col-md-7 col-sm-12">
          <h3 className="video-title pb-2">{title}</h3>
          <div>{description}</div>
          <div className="py-4">
            <a
              className="video-link"
              href={`https://www.youtube.com/watch?v=${id}`}
            >
              View
            </a>
          </div>
          <div className="video-date-channel">
            {moment(publishedAt).format('DD MMMM YYYY')} by {channelTitle}
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
