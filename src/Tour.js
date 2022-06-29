import React, { useEffect, useState } from "react";


const Tour = ({ id, name, info, image, price, handleClick }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    
    <article className="single-tour">
      <img src={image} alt={name}></img>
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.slice(0, 200)}...`}
          <button className="tour-price" onClick={()=>setReadMore(!readMore)}>
            {readMore ? 'Show less': 'Read More'}
          </button>
         
        </p>

        <button className="delete-btn" onClick={()=>handleClick(id)} >Not Interested</button>
      </footer>
    </article>
  );
};

export default Tour;
