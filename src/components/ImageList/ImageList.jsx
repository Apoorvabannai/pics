import './ImageList.css';
import ImageCard from './ImageCard';
import React from 'react';

const ImageList = (props) => {
  let imagesList = props.images.map(image => {
    return (
      <ImageCard key={image.id} image={image} />
    )
  });
  return(
    <div className="image-list">
      {imagesList}
    </div>
  );
};

export default ImageList;
