import { Link } from "react-router-dom";
import logo from "/icons8-school-64.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  console.log(user)
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar bg-blue text-gold ">
      <div className="flex-1">
        <Link to="/">
          <img className="w-12 lg:w-20 lg:h-20 h-12" src={logo} alt="" />
        </Link>
        <Link to="/" className=" hidden lg:block text-4xl font-bold">
          <span className="">College</span> Guide
        </Link>
      </div>
      <div className="flex-none">
        <div className="md:hidden text-gold z-40 dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue rounded-box w-52"
          >
            {/* icon mobile screen */}
            <Link className='font-semibold' to="/">Home</Link>
            <Link className="font-semibold mr-4" to="/colleges">Colleges</Link>
            <Link className="font-semibold mr-4" to="/admission">Admission</Link>
            
           

            {user && (
              <div className="">
              <Link className="font-semibold mr-4" to="/myCollege">My College</Link>
              <br />
              <Link className="font-semibold text-xs mr-4" to="/userProfile">
                {user.displayName}
              </Link>
                <br />
                <button onClick={handleLogOut} className="bg-blue text-gold pt-2 pb-2 pl-3 pr-3 rounded-lg hover:bg-gold shadow-md  hover:text-blue text-xs hover:border-blue border-b-2">
                  Log Out
                </button>
              </div>
            )}
          </ul>
        </div>
        {user ? (
          <>
          {/* user available in big screen */}
            <div className="dropdown dropdown-end  md:block hidden text-lg mr-3">
              <Link className="font-semibold mr-4" to="/">
                Home
              </Link>
              <Link className="font-semibold mr-4" to="/colleges">Colleges</Link>
              <Link className="font-semibold mr-4" to="/admission">Admission</Link>
              <Link className="font-semibold mr-4" to="/myCollege">My College</Link>
              <Link className="font-semibold mr-4" to="/userProfile">
                {user.displayName}
              </Link>
              <button onClick={handleLogOut} className="bg-blue text-gold pt-2 pb-2 pl-3 pr-3 rounded-lg hover:bg-gold shadow-md  hover:text-blue text-xs hover:border-blue border-b-2">Log Out</button>
            </div>
            <div className="dropdown dropdown-end flex">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-15 rounded-full btn btn-ghost btn-circle avatar border-2 border-rose-50">
                  <img src={user.photoURL} />
                </div>
              </label>
            </div>
          </>
        ) : (
          <>
          {/* not user */}
            <Link className="font-semibold hidden lg:inline mr-4" to="/">
              Home
            </Link>
            <Link className="font-semibold mr-4 hidden lg:block" to="/colleges">Colleges</Link>
              <Link className="font-semibold mr-4 hidden lg:block" to="/admission">Admission</Link>
            <Link to="/login">
              <button className="btn button-sm btn-sm border-1 border-gold hover:border-blue mr-3 ">LogIn</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
