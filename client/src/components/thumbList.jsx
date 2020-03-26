import React from 'react';
const selected="dot-thumb selected";
const unselected="dot-thumb";
const Thumb = (props) => (
  <div className="dot-carousel">
  {console.log(props.className)}
    {props.images.map((item, idx) => {
      const className = idx === props.selectedIdx ? selected : unselected;
      return (
        <div className={className} onClick={()=> {props.updateImage(item, idx);}}></div>
      );
    })}
  </div>
);

export default Thumb;