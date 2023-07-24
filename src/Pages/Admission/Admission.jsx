import { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Admission = () => {
  const [collegeCard, setCollegeCard] = useState([]);
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [candidateData, setCandidateData] = useState({
    candidateName: "",
    subject: "",
    candidateEmail: "",
    candidatePhone: "",
    address: "",
    dateOfBirth: "",
    image: "",
    email: user.email
  });
  console.log(candidateData)

  useEffect(() => {
    fetch("http://localhost:5000/collegedata")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCollegeCard(data);
      });
  }, []);

  const handleCollegeClick = (college) => {
    setSelectedCollege(college);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCandidateData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Send the candidateData to the server
    fetch("http://localhost:5000/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(candidateData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Server response:", data);
        Swal.fire(
            'Good job!',
            'You clicked the button!',
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
    <>
    <Helmet><title>Admission | College Guide</title></Helmet>
    <div className="text-center">
        <h2 className="text-3xl my-8 uppercase font-bold underline animate-bounce">SELECT your preferable college</h2>
      {selectedCollege ? (
        <div>
          <h2 className="">{selectedCollege.name}</h2>
          <div>
            <label className="block mb-2 text-sm">Candidate Name:</label>
            <input
              type="text"
              className="w-[300px] px-3 py-2 border rounded-md border-gray-300 focus:outline-blue bg-gray-200 text-gray-900"
              name="candidateName"
              value={candidateData.candidateName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm">Subject:</label>
            <input
              type="text"
              name="subject"
              className="w-[300px] px-3 py-2 border rounded-md border-gray-300 focus:outline-blue bg-gray-200 text-gray-900"
              value={candidateData.subject}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm">Candidate Email:</label>
            <input
              type="email"
              name="candidateEmail"
              className="w-[300px] px-3 py-2 border rounded-md border-gray-300 focus:outline-blue bg-gray-200 text-gray-900"
              value={candidateData.candidateEmail}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm">Candidate Phone number:</label>
            <input
              type="tel"
              name="candidatePhone"
              className="w-[300px] px-3 py-2 border rounded-md border-gray-300 focus:outline-blue bg-gray-200 text-gray-900"
              value={candidateData.candidatePhone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm">Address:</label>
            <input
              type="text"
              name="address"
              className="w-[300px] px-3 py-2 border rounded-md border-gray-300 focus:outline-blue bg-gray-200 text-gray-900"
              value={candidateData.address}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm">Date of Birth:</label>
            <input
              type="date"
              name="dateOfBirth"
              
              value={candidateData.dateOfBirth}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm">Image:</label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
            />
          </div>
          <button className="button-md mt-6" onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div>
          
          <ul>
            {collegeCard.map((college) => (
              <li className="text-xl text-blue cursor-pointer mb-3" key={college._id} onClick={() => handleCollegeClick(college)}>
                {college.college_name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </>
  );
};

export default Admission;
