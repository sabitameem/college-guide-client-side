import { useEffect, useState } from "react";
import cap from '../../assets/cap/icons8-graduation-cap-96.png'
import SingleColleges from "./SingleColleges";
import { Helmet } from "react-helmet";

const Colleges = () => {
  const [collegeCard, setCollegeCard] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/collegedata")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCollegeCard(data);
      });
  }, []);
  return (
    <div>
        <Helmet><title>Colleges | College Guide</title></Helmet>
        <h3 className="my-12 flex items-center justify-center gap-3 animate-bounce underline text-center text-4xl font-bold text-blue">Our Special Colleges <span><img src={cap} alt="" /></span></h3>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10 mt-10">
     {collegeCard.map((singleColleges) => (
        <SingleColleges key={singleColleges._id} singleColleges={singleColleges}></SingleColleges>
      ))}
     </div>
    </div>
  );
};

export default Colleges;
