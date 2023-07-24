import { useEffect, useState, useRef } from "react";
import SearchCard from "./SearchCard";

const Search = () => {
  const [collegeCard, setCollegeCard] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [matchedCollege, setMatchedCollege] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const searchRef = useRef(null);

  useEffect(() => {


    //fetch("http://localhost:5000/collegedata")

    fetch("https://college-guide-server.vercel.app/collegedata")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCollegeCard(data);
      });
  }, []);

  // Function to handle changes in the search input field
  const handleSearchChange = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);

    // Find and set the suggestions based on the current search value
    const matchedSuggestions = collegeCard.filter((college) =>
      college.college_name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSuggestions(matchedSuggestions);
    setMatchedCollege(null);
  };

  // Function to handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const matchedCollegeData = collegeCard.find(
      (college) =>
        college.college_name.toLowerCase() === searchTerm.toLowerCase()
    );
    if (matchedCollegeData) {
      setMatchedCollege(matchedCollegeData);
    } else {
      setMatchedCollege(null);
    }
  };

  // Function to handle suggestion selection
  const handleSuggestionClick = (college) => {
    setSearchTerm(college.college_name);
    setSuggestions([]);
    setMatchedCollege(college);
  };

  // Function to handle clicks outside the search input
  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
        <form
      className="max-w-sm px-4 my-4 mx-auto"
      onSubmit={handleFormSubmit}
      ref={searchRef}
    >
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search"
          className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-blue"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {/* Display suggestions */}
        {suggestions.length > 0 && (
          <ul className="absolute z-10 top-10 left-0 right-0 bg-white border border-gray-300 rounded-md">
            {suggestions.map((college) => (
              <li
                key={college._id}
                className="p-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSuggestionClick(college)}
              >
                {college.college_name}
              </li>
            ))}
          </ul>
        )}
      </div>
      
    </form>
    {/* Display matched college */}
    <div className="">
        {matchedCollege ? (
          <SearchCard key={matchedCollege.image} matchedCollege={matchedCollege} />
        ) : null}
      </div>
    </div>
  );
};

export default Search;
