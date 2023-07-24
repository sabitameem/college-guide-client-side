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
         <div className="mx-auto justify-center lg:tracking-wide">
            <p className="mt-12 mb-6 text-3xl text-center font-bold text-blue">{college_name}</p>
            <img className="mx-auto w-[626px] rounded-md shadow-2xl lg:h-[351px] mb-12 md:h-[351px] h-[220px]" src={detailsData.image} alt="" />
            <h3 className="m-2 lg:ml-12 lg:mr-12 lg:text-lg text-sm"><span className="font-semibold text-lg lg:text-2xl text-blue">Admission Process : </span>{admission_process}</h3>
            <div className="lg:flex flex-col-reverse justify-between gap-6 mx-auto">
                <div className="lg:text-left text-start m-2 lg:ml-12">
                <h3 className="font-medium text-xl pb-3 underline">Events:</h3>
                {events.map((event) => (
                  <div className="pb-2 " key={event.event_name}>
                    <h4 className="text-blue font-bold lg:text-xl">{event.event_name}</h4>
                    <p className="text-sm lg:text-lg">{event.event_facilities}</p>
                  </div>
                ))}
                </div>
                <div className="lg:text-right text-start m-2 lg:mr-12">
                <h3 className="font-medium text-xl pb-3 underline">
                  Sports Facilities:
                </h3>
                {sports_category.map((sport) => (
                  <div key={sport.sport_name}>
                    <h4 className="text-blue lg:text-xl font-bold">{sport.sport_name}</h4>
                    <p  className="text-sm lg:text-lg">{sport.description}</p>
                    <p className="text-sm lg:text-lg"><span className="text-gray-800 text-base font-medium">Achievements:</span> {sport.achievements}</p>
                  </div>
                ))}
                </div>
            </div>
            {/* research works */}
            <div></div>

        </div>
        <div>
          <h3 className="m-2 lg:ml-12 lg:mr-12 lg:text-lg text-sm"><span className="text-blue font-semibold text-lg lg:text-2xl">Research Work : </span>{research_work}</h3>
        </div>
        <div>
          <h3 className="lg:text-3xl text-xl text-blue text-center mt-12 font-semibold mb-6">Happy graduates :</h3>
          <img className="mx-auto w-[626px] rounded-md shadow-2xl lg:h-[351px] mb-12 md:h-[351px] h-[220px]" src={graduation_image} alt="" />
        </div>
       </div>
    );
};

export default CollegeDetails;