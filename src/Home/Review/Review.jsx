import { useEffect, useState } from "react";
import SingleReview from "./SingleReview";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Review = () => {
    const [reviewData,setReviewData]=useState([])

    useEffect(() => {
        fetch("https://college-guide-server.vercel.app/review")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setReviewData(data);
          });
      }, []);

       // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

    return (
    //     <div className="w-50% h-auto mx-auto text-center">
    //         <p className="my-4 text-2xl font-semibold text-blue">Review :</p>
    //        {/* <div className="text-center lg:mx-auto text-blue">
    //        <Slider 
    //        className="lg:mx-auto bg-gray-200 py-6 px-6 w-100% rounded-md lg:w-[500px]"
    //         {...carouselSettings}>
    //     {reviewData.map((singleReview, index) => (
    //       <div key={index}>
    //         <SingleReview singleReview={singleReview} />
    //       </div>
    //     ))}
    //   </Slider>
    //        </div> */}
    //        <div className="">
    //         <Slider className="" {...carouselSettings}>
    //         {reviewData.map((singleReview, index) => (
    //       <div key={index}>
    //         <SingleReview singleReview={singleReview} />
    //       </div>
    //     ))}
    //         </Slider>
    //        </div>
    //     </div>
    <div className="lg:w-[500px] md:w-[500px] w-[300px] text-start mx-auto">
    <p className="my-4 ms-6 text-2xl font-semibold text-blue">Review :</p>
    <Slider className="bg-gray-300 py-6 px-6 rounded-md" {...carouselSettings}>
      {reviewData.map((singleReview, index) => (
        <div key={index}>
          <SingleReview singleReview={singleReview} />
        </div>
      ))}
    </Slider>
  </div>
    );
};

export default Review;