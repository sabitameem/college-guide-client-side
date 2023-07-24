import React from "react";

const SingleCollege = ({ singleCollege }) => {
  return (
    <div className="mx-auto">
      <div className="lg:flex justify-around items-center">
        <div className="md:ms-12">
          <img
            className="w-[140px] h-[140px] lg:w-[200px] mx-auto lg:h-[200px] rounded-full lg:mt-10 mt-7 lg:mb-8 mb-5 shadow-lg"
            src={singleCollege.image}
            alt=""
          />
          <p className="text-xl  text-blue">
            <span className="text-gray-600 text-xl ">Candidate Name : </span>
            {singleCollege.candidateName}
          </p>
          <p className="text-xl  text-blue">
            <span className="text-gray-600 text-xl ">Selected College : </span>
            {singleCollege.selectedCollege}
          </p>
          <p className="text-xl  text-blue">
            <span className="text-gray-600 my-4 text-xl ">Subject : </span>
            {singleCollege.subject}
          </p>

          <p className="text-xl  text-blue">
            <span className="text-gray-600 my-4 text-xl ">Phone : </span>
            {singleCollege.candidatePhone}
          </p>
          <p className="text-xl  text-blue">
            <span className="text-gray-600 my-4 text-xl ">Address : </span>
            {singleCollege.address}
          </p>
          <p className="text-xl  text-blue">
            <span className="text-gray-600 my-4 text-xl ">
              Date of birth :{" "}
            </span>
            {singleCollege.dateOfBirth}
          </p>
        </div>
        <div className="text-center mx-auto">
          <p className="mt-12 text-center text-2xl font-semibold">
            College Info :{" "}
          </p>
          <img
            className="mx-auto mb-3 mt-3 lg:w-[440px] md:w-[330px] rounded-md w-[270px]"
            src={singleCollege.collegeImage}
            alt=""
          />
          <p>{singleCollege.collegeName}</p>

          <p>Admission Date : {singleCollege.admissionDate}</p>
          <p className="">Admission Process : {singleCollege.admissionProcess}</p>
          <p>Rating : {singleCollege.rating}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCollege;
