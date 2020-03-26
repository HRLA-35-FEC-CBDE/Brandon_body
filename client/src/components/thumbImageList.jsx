import React from 'react';
const selected="image-thumb selected";
const unselected="image-thumb";
const ThumbImage = (props) => (
  <div className="image-carousel">
    {props.images.map((item, idx) => {
      const className = idx === props.selectedIdx ? selected : unselected;
      return (
        <div className={className} onClick={()=> {props.updateImage(item, idx);}}>
          <img src={item}></img>
        </div>
      );
    })}
  </div>
);

export default ThumbImage;