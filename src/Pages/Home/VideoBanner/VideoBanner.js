import React, { useState } from 'react';
import './VideoBanner.css'
const VideoBanner = () => {
  const [loop, setLoop] = useState(true);
    return (
      <div className="container mt-5">
        <video loop={loop} autoPlay="autoplay" controls muted>
          <source
            src="https://content.thewosgroup.com/wosus/campaign/anytime-anywhere/aa-homepage-desktop-comp.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    );
};

export default VideoBanner;