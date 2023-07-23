import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";



const CollegeDetails = () => {
    const detailsData =useLoaderData();
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
      } = detailsData;
      console.log(detailsData)
    
    return (
       <div>
        <Helmet>
            <title>{college_name} | College Guide</title>
        </Helmet>
         <div className="mx-auto justify-center text-center lg:tracking-wider">
            <p className="mt-12 mb-6 text-3xl font-bold text-blue">{college_name}</p>
            <img className="mx-auto w-[626px] rounded-md shadow-2xl lg:h-[351px] mb-10 md:h-[351px] h-[220px]" src={detailsData.image} alt="" />
            <h3 className="my-3"><span className="font-semibold text-2xl">Admission Process : </span>{admission_process}</h3>
            <div className="lg:flex flex-col-reverse justify-between gap-6 mx-auto">
                <div className="text-left lg:ml-14">
                <h3 className="font-medium text-xl  underline">Events:</h3>
                {events.map((event) => (
                  <div className="pb-2 " key={event.event_name}>
                    <h4 className="text-blue font-semibold">{event.event_name}</h4>
                    <p>{event.event_facilities}</p>
                  </div>
                ))}
                </div>
                <div className="text-right lg:mr-14">
                <h3 className="font-medium text-xl  underline">
                  Sports Facilities:
                </h3>
                {sports_category.map((sport) => (
                  <div key={sport.sport_name}>
                    <h4 className="text-blue font-semibold">{sport.sport_name}</h4>
                    <p className="">{sport.description}</p>
                    <p><span className="text-blue font-medium">Achievements:</span> {sport.achievements}</p>
                  </div>
                ))}
                </div>
            </div>
            {/* research works */}

        </div>
       </div>
    );
};

export default CollegeDetails;