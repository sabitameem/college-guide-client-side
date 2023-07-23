import { Link } from "react-router-dom";

const SingleCollegeCard = ({ singleCollegeData }) => {
  const {
    _id,
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
  } = singleCollegeData;

  return (
    <div className="card rounded-t-sm shadow-xl">
      <figure>
        <img
          className="lg:h-[260px] md:h-[230px] h-[260px] w-full rounded-none mb-0"
          src={image}
          alt="College Image"
        />
      </figure>
      <div className="card-body  mt-0">
        <h2 className="text-lg lg:text-xl font-semibold py-0 text-blue">{college_name}</h2>
        <h3 className="text-xs md:text-sm lg:text-base">Admission Date : <span className="space-y-1 text-blue font-semibold">{admission_date}</span></h3>
        <div className="lg:flex justify-between align-top text-xs md:text-sm lg:text-base">
        
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
        <Link to={`collegeDetails/${_id}`}><button className="button-sm">Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCollegeCard;
