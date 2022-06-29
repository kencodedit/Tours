import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, handleClick }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return (
            <Tour key={tour.id} {...tour} handleClick={handleClick}></Tour>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
