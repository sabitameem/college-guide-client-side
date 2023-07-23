import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const SingleColleges = ({ singleColleges }) => {
  const { user} = useContext(AuthContext)
  const navigate = useNavigate();
    const location =useLocation();
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
  const [showModal, setShowModal] = React.useState(false);

  const handleDetailsClick = () => {
    // Show the modal only if the user is logged in
    if (user) {
      setShowModal(true);
    } else {
      // Handle the case where the user is not logged in
      Swal.fire({
        title: 'Please login to select the class',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login now!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state: {from: location}})
        }
      })
      // For example, you can redirect them to the login page or show a message
      console.log("User is not logged in. Please log in to view details.");
    }
  };

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
          <button  onClick={handleDetailsClick} className="button-sm">
            Details
          </button>
        </div>
        {showModal ? (
          <>
            <div className="fixed inset-0 flex text-xs items-center justify-center z-50">
              <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
              <div className="bg-white rounded-lg p-4  shadow-2xl z-10 w-full max-w-md lg:mx-auto mx-5 sm:p-8 
              
              ">
                <p>
                  College Name :{" "}
                  <span className="font-medium text-lg">{college_name}</span>
                </p>
                <div className="flex mt-2">
                  <p>
                    <span className="font-medium">Rating :</span> {rating}
                  </p>
                  <p>
                    <span className="font-medium">Admission Date :</span>{" "}
                    {admission_date}
                  </p>
                  <p>
                    <span className="font-medium">Number of research :</span>{" "}
                    {number_of_research}
                  </p>
                </div>
                <h3 className="font-medium">Events:</h3>
                {events.map((event) => (
                  <div className="pb-2" key={event.event_name}>
                    <h4 className="text-blue underline">{event.event_name}</h4>
                    <p>{event.event_facilities}</p>
                  </div>
                ))}
                <h3 className="border-t font-medium border-solid border-slate-200 rounded-b pt-2">
                  Sports Facilities:
                </h3>
                {sports_category.map((sport) => (
                  <div key={sport.sport_name}>
                    <h4 className="text-blue underline">{sport.sport_name}</h4>
                    <p>{sport.description}</p>
                    <p>Achievements: {sport.achievements}</p>
                  </div>
                ))}
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-blue mt-4 text-gold pt-2 pb-2 pl-3 pr-3 rounded-lg hover:bg-gold shadow-md  hover:text-blue text-xs hover:border-blue border-b-2"
                >
                  Close
                </button>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default SingleColleges;
