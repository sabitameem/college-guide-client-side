import { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Admission = () => {
  const [collegeCard, setCollegeCard] = useState([]);
  // const [subjectName, setSubjectName] = useState("");
  // const [address, setAddress] = useState("");
  // const [candidatePhone, setCandidatePhone] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [selectedCollege, setSelectedCollege] = useState(null);
  // const [candidateData, setCandidateData] = useState({
  //   candidateName: "",
  //   subject: "",
  //   candidateEmail: "",
  //   candidatePhone: "",
  //   address: "",
  //   dateOfBirth: "",
  //   image: "",
  //   email: `${user.email}`
  // });
  // console.log(candidateData)

  useEffect(() => {
    //fetch("http://localhost:5000/collegedata")
    fetch("https://college-guide-server.vercel.app/collegedata")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCollegeCard(data);
      });
  }, []);

  const handleCollegeClick = (college) => {
    setSelectedCollege(college);
  };
  console.log(selectedCollege);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setCandidateData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name =form.name.value;
    const email =user?.email;
    const subject =form.subject.value;
    const candidatePhone =form.phone.value;
    const address =form.address.value;
    const dateOfBirth=form.dateOfBirth.value;
    const image=form.image.value;
    console.log(image);
    if (!user) {
      Swal.fire(
        'Login Required',
        'Please log in to submit your information!',
        'error'
      );
      return;
    }



    const candidateData = {
      candidateName: name,
      subject: subject,
      candidateEmail: email,
      candidatePhone: candidatePhone,
      address: address,
      dateOfBirth: dateOfBirth,
      image: user?.photoURL,
      email: user?.email,
      selectedCollege:selectedCollege.college_name,
      collegeName : selectedCollege.college_name,
      collegeImage: selectedCollege.image,
      admissionDate: selectedCollege.admission_date,
      admissionProcess: selectedCollege.admission_process,
      rating:selectedCollege.rating,
      
       

      
      
      
    };
    console.log(candidateData)
    //fetch("http://localhost:5000/submit", {
    fetch("https://college-guide-server.vercel.app/submit", {
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
            'You select the college!',
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
      <Helmet>
        <title>Admission | College Guide</title>
      </Helmet>
      <div className="text-center">
        
        {selectedCollege ? (
          <form onSubmit={handleSubmit}>
            <h2 className="text-3xl my-8 uppercase font-bold underline animate-bounce">
          SUBMIT your information!
        </h2>
            <h2 className="text-3xl">{selectedCollege.college_name}</h2>
            <div>
              <label className="block mb-2 text-sm">Name:</label>
              <input
                type="text"
                className="w-[300px] px-3 py-2 border rounded-md border-gray-300 focus:outline-blue bg-gray-200 text-gray-900"
                name="name"
                required
                // defaultValue={user?.displayName}
                placeholder="Name"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm">Subject:</label>
              <input
                type="text"
                name="subject"
                required
                placeholder="E.g. Math"
                className="w-[300px] px-3 py-2 border rounded-md border-gray-300 focus:outline-blue bg-gray-200 text-gray-900"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm">Candidate Email:</label>
              <input
                type="text"
                name="email"
                defaultValue={user?.email}
                className="w-[300px] px-3 py-2 border rounded-md border-gray-300 focus:outline-blue bg-gray-200 text-gray-900"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm">
                Candidate Phone number:
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="+0000000000000"
                className="w-[300px] px-3 py-2 border rounded-md border-gray-300 focus:outline-blue bg-gray-200 text-gray-900"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm">Address:</label>
              <input
                type="text"
                name="address"
                required
                placeholder="City,Country"
                className="w-[300px] px-3 py-2 border rounded-md border-gray-300 focus:outline-blue bg-gray-200 text-gray-900"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm">Date of Birth:</label>
              <input required placeholder="Date of birth" type="date" name="dateOfBirth" />
            </div>

            <div>
              <label className="block mb-2 text-sm">Image:</label>
              <input placeholder="Paste your image link" defaultValue={user?.photoURL} type="text" name="image" className="w-[300px] px-3 py-2 border rounded-md border-gray-300 focus:outline-blue bg-gray-200 text-gray-900" />
            </div>

            <button type="submit" className="bg-blue text-gold pt-3 pb-3 pl-24 pr-24 rounded-lg hover:bg-gold  hover:text-blue shadow-md hover:border-blue border-b-2 mt-4">
              Submit
            </button>
          </form>
        ) : (
          <div>
            <h2 className="text-3xl my-8 uppercase font-bold underline animate-bounce">
          SELECT your preferable college
        </h2>
            <ul>
              {collegeCard.map((college) => (
                <li
                  className="text-xl text-blue cursor-pointer mb-3"
                  key={college._id}
                  onClick={() => handleCollegeClick(college)}
                >
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
