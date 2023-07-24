import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

import SingleUser from "./SingleUser";


const UserProfile = () => {
    const [selectedCollege, setSelectedCollege] = useState([]);
    const {user}=useContext(AuthContext)
    useEffect(() => {
        //const url = `http://localhost:5000/submit?email=${user?.email}`;
        const url = `https://college-guide-server.vercel.app/submit?email=${user?.email}`;
        fetch(url)
          .then((res) => res.json())
          .then((data) => setSelectedCollege(data));
      }, [user?.email]);
    return (
        <div className="mt-8 text-lg text-center">
            <img className="w-[140px] h-[140px] lg:w-[200px] mx-auto lg:h-[200px] rounded-full lg:mt-10 mt-7 lg:mb-8 mb-5 shadow-lg" src={user?.photoURL} alt="" />
            <h3 className="text-xl lg:text-2xl text-blue"><span className="text-gray-600 my-4 text-xl lg:text-2xl">User Name : </span>{user?.displayName}</h3>
            <h3 className="text-xl lg:text-2xl text-blue"><span className="text-gray-600 my-4 text-xl lg:text-2xl ">User Email :</span> {user?.email}</h3>
            <br />
            <hr />
           
            <div className="grid grid-rows-2">
                {
                    selectedCollege.length >0 ?
                //      <div className="grid grid-cols-1 mb-12">
                //     {selectedCollege.map((singleCollege, index) => (
                //       <SingleCollege key={index} singleCollege={singleCollege} />
                //     ))}
                //   </div>
                <div>
                    {
                        selectedCollege.map((singleUser,index)=><SingleUser key={index} singleUser={singleUser}></SingleUser>)
                    }
                </div>
                   : <p className="text-xl lg:text-2xl text-gold mt-12 ">You have not select any college Yet.</p>
                }
            </div>
        </div>
    );
};

export default UserProfile;