import React from "react";

const SearchCard = ({ matchedCollege }) => {
  const {
    college_name,
    image,
    graduation_image,
    admission_date,
    admission_process,
    research_history,
    number_of_research,
    research_work,
    events,
    sports_category,
    rating,
    research_paper,
  } = matchedCollege;
  return (
    <div className="lg:flex justify-between gap-4 my-12 p-6 rounded-md shadow-2xl lg:w-[670px] lg:h-auto  mx-auto">
        <div>
        <img
          className="lg:h-[260px] md:h-[260px] h-[260px] w-[890px] rounded-none mb-0"
          src={image}
          alt="College Image"
        />
        </div>
        <div>
        <div className=" mt-0">
        <h2 className="text-lg lg:text-xl font-semibold py-0 text-blue">{college_name}</h2>
        <h3 className="text-xs md:text-sm lg:text-base">Admission Date : <span className="space-y-1 text-blue font-semibold">{admission_date}</span></h3>
        <div className="lg:flex md:flex justify-between align-top text-xs md:text-sm lg:text-base">
        
        <div className="mb-1">
          <p className="font-semibold text-blue ">Sports:</p>
          <ul className="list-disc pl-6">
            {sports_category.map((sports, index) => (
              <li key={index}>{sports.sport_name}</li>
            ))}
          </ul>
        </div>
        <div className="mb-1">
          <p className="font-semibold text-blue">Events:</p>
          <ul className="list-disc pl-6">
            {events.map((event, index) => (
              <li key={index}>{event.event_name}</li>
            ))}
          </ul>
        </div>
        </div>
        <p className="text-xs lg:text-base md:text-sm"><span className="font-semibold text-blue">Research History :</span> {research_history}</p>
        <div className="card-actions ms-auto">
          <button className="button-sm">Details</button>
        </div>
      </div>
        </div>
    </div>
  );
};

export default SearchCard;
