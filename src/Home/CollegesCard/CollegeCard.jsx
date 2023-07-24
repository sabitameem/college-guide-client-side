import { useEffect, useState } from "react";
import SingleCollegeCard from "./SingleCollegeCard";

const CollegeCard = () => {
  const [collegeCard, setCollegeCard] = useState([]);
  useEffect(() => {
    //fetch("http://localhost:5000/collegedata")
    fetch("https://college-guide-server.vercel.app/collegedata")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCollegeCard(data);
      });
  }, []);

  const threeCollegeCards = collegeCard.slice(0, 3);

  return (
    <div className="mt-28">
      
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10 mt-10">
     {threeCollegeCards.map((singleCollegeData) => (
        <SingleCollegeCard key={singleCollegeData._id} singleCollegeData={singleCollegeData}></SingleCollegeCard>
      ))}
     </div>
    </div>
  );
};

export default CollegeCard;
