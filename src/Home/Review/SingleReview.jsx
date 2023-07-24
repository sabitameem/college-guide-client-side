import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const SingleReview = ({ singleReview }) => {
  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={i <= rating ? faStar : ["far", "star"]}
          className="star-icon"
        />
      );
    }
    return stars;
  };

  return (
    <div className="ms-6">
      <p className="text-xl font-semibold ">
        {singleReview.name}
      </p>
      <p className="">
        <span className="font-bold">{singleReview.collegeName} : </span>
        {renderRatingStars(singleReview.rating)}
      </p>
      
      <p className="overflow-y-auto ">
        
       {singleReview.reviewText}
      </p>
      
    </div>
  );
};

export default SingleReview;
