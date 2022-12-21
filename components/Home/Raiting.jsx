import React from "react";
import ReactStars from "react-rating-stars-component";
function Raiting() {
  return (
    <div>
      <ReactStars
        count={5}
        size={24}
        activeColor="#ffd700"
        value={3}
        edit={false}
      />
    </div>
  );
}

export default Raiting;
