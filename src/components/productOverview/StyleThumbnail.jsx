import React from 'react';

const StyleThumbnail = ({thumbnailUrl, selected, syleId, handleStyleSelectClick}) => (
  <div
    className={selected ? 'style-thumbnail selected': 'style-thumbnail'}
    style={{ backgroundImage: `url(${thumbnailUrl})` }}
    onClick={(e) => handleStyleSelectClick(e.target.getAttribute("data-style-id"))}
   data-style-id={syleId}
  />
);
export default StyleThumbnail;
