// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
// import dynamic from "next/dynamic";
import ReactStars from "react-rating-stars-component";

function Raiting() {
  // const ratingChanged = (newRating) => {
  //     console.log(newRating);
  //   };
  // const Table = dynamic(() => import("/design-systems/Molecules/Table"), {
  //     ssr: false,
  //     });
  return (
    <div>
      <ReactStars
        count={5}
        //   onChange={ratingChanged}
        size={18}
        activeColor="#ffd700"
        value={3}
      />
    </div>
  );
}

export default Raiting;
