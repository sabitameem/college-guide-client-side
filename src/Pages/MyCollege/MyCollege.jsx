import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const MyCollege = () => {
  //const [selectedCollege, setSelectedCollege] = useState([]);
  const { user } = useContext(AuthContext);
  const [reviewText, setReviewText] = useState("");
  const [collegeName,setCollegeName]=useState("")
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();
 

  // useEffect(() => {
  //   fetch(`http://localhost:5000/submit?email=${user.email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setSelectedCollege(data);
  //     });
  // }, []);

  const handleReviewSubmit = () => {
    if (!rating) {
      // You can display an error message or perform any other actions to inform the user.
      alert("Please select a rating before submitting the review.");
      return;
    }
    if (!collegeName) {
      // You can display an error message or perform any other actions to inform the user.
      alert("Please type your college name before submitting the review.");
      return;
    }
    if (!reviewText) {
      // You can display an error message or perform any other actions to inform the user.
      alert("Please type your review before submitting the review.");
      return;
    }
    const reviewData = {
      name: user.displayName,
      collegeName: collegeName, 
      reviewText: reviewText,
      rating: rating,
    };
    console.log(reviewData)
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Server response:", data);
        Swal.fire(
            'Good job!',
            'You added a review!',
            'success'
          )
          navigate('/')
        // You can handle the server response here, e.g., show a success message
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
        // Handle the error here, e.g., show an error message
      });
  };

  return (
    <div>
      <Helmet>
        <title>My College | College Guide</title>
      </Helmet>
      {/* <h3>Selected College: {selectedCollege.length}</h3> */}
      {/* <img src={selectedCollege.image} alt="" /> */}
      {/* You can display the selected college data here */}

      {/* review field */}
      <div className="ms-4">
        <h4 className="text-2xl font-semibold text-blue my-5">Add Your Review:</h4>
        <div>
          <label htmlFor="name" className="block mb-2 text-sm">
            Name
          </label>
          <input
          type="text"
          name="name"
          id="name"
          value={user.displayName}
          placeholder="Enter Your Name Here"
          className="px-3 py-2 border rounded-md border-gray-300 focus:outline-blue bg-gray-200 text-gray-900 w-[411px]"
          data-temp-mail-org="0"
          />
        </div>

        <div>
          <label htmlFor="collegeName" className="block mb-2 mt-2 text-sm">
            College Name
          </label>
          <input
          type="text"
          name="collegeName"
          value={collegeName}
          onChange={(e)=>setCollegeName(e.target.value)}
          id="collegeName"
          placeholder="Enter Your College Name Here"
          className="px-3 py-2 border rounded-md border-gray-300 focus:outline-blue bg-gray-200 text-gray-900 w-[411px]"
          data-temp-mail-org="0"
          required
          />
        </div>
        <textarea
          className="border px-3 py-2 my-4 rounded-md border-gray-300 focus:outline-blue bg-gray-200"
          rows="4"
          cols="50"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Write your review here..."
          required
        />
        <div>
          <label className="text-blue font-semibold">Rating:</label>
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <button className="button-sm mt-3" onClick={handleReviewSubmit}>
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default MyCollege;
