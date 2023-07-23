import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet";

const MyCollege = () => {
  const [selectedCollege, setSelectedCollege] = useState([]);
  const {user}=useContext(AuthContext)



useEffect(() => {
    fetch(`http://localhost:5000/submit?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSelectedCollege(data);
      });
  }, []);

  return (
    <div>
      <Helmet><title>My College | College Guide</title></Helmet>
      <h3>Selected College: {selectedCollege.length}</h3>
      {/* You can display the selected college data here */}
    </div>
  );
};

export default MyCollege;
