// Import React
import React from 'react';

export class YoutubeEmbed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const src = `https://www.youtube.com/embed/${this.props.videoId}`;
    return (
      <iframe
        width="560"
        height="315"
        src={src}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    );
  }
}
