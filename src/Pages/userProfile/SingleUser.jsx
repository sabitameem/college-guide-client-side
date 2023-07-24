import React from 'react';

const SingleUser = ({singleUser}) => {
    return (
        <div className="mx-auto my-10">
        
        
        <p className="text-xl lg:text-2xl text-blue"><span className="text-gray-600 text-xl lg:text-2xl">Selected College : </span>{singleUser.selectedCollege}</p>
      <p className="text-xl lg:text-2xl text-blue"><span className="text-gray-600 my-4 text-xl lg:text-2xl">Subject : </span>{singleUser.subject}</p>
      
      <p className="text-xl lg:text-2xl text-blue"><span className="text-gray-600 my-4 text-xl lg:text-2xl">Phone : </span>{singleUser.candidatePhone}</p>
      <p className="text-xl lg:text-2xl text-blue"><span className="text-gray-600 my-4 text-xl lg:text-2xl">Address : </span>{singleUser.address}</p>
      <p className="text-xl lg:text-2xl text-blue"><span className="text-gray-600 my-4 text-xl lg:text-2xl mb-8">Date of birth : </span>{singleUser.dateOfBirth}</p>
      <hr className='mt-10' />
      
    </div>
    );
};

export default SingleUser;