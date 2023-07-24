import { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "tailwindcss/tailwind.css";
import './gallery.css'

const Gallery = () => {
  const [collegeCard, setCollegeCard] = useState([]);

  useEffect(() => {
     fetch("https://college-guide-server.vercel.app/collegedata")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCollegeCard(data);
      });
  }, []);

  return (
    <div className="container mx-auto my-20">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry columnsCount={3} gutter="10px">
          {collegeCard.map((card) => (
            <div key={card.image} className="masonry-item relative">
              <img
                style={{ width: "100%", display: "block"}}
                src={card.graduation_image}
                alt=""
                className="w-full rounded-md"
              />
              <div className="overlay">
                <h2 className="text-white text-lg font-semibold">
                    Graduation party of : {""}
                    <br />
                  {card.college_name}
                </h2>
              </div>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Gallery;
