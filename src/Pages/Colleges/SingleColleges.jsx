const SingleColleges = ({ singleColleges }) => {
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
  } = singleColleges;
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
        <h2 className="text-lg lg:text-xl font-semibold py-0 text-blue">
          {college_name}
        </h2>
        <div className="flex gap-4">
          <h3 className="text-xs md:text-sm lg:text-base">
            Admission Date :{" "}
            <span className="space-y-1 text-blue font-semibold">
              {admission_date}
            </span>
          </h3>
          <h3 className="text-xs md:text-sm lg:text-base">
            Rating :{" "}
            <span className="space-y-1 text-blue font-semibold">{rating}</span>
          </h3>
        </div>
        <h2>
          Number of research :
          <span className="space-y-1 text-blue font-semibold">
            {" "}
            {number_of_research}
          </span>
        </h2>

        <div className="card-actions ms-auto">
          <button className="button-sm">Details</button>
        </div>
      </div>
    </div>
  );
};

export default SingleColleges;
