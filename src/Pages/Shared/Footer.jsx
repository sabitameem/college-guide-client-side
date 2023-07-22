import logo from "../../../public/icons8-school-64.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gold text-blue py-3 lg:py-8 mt-[20vh]">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8">
          <div className="text-blue text-lg font-bold mb-4 lg:mb-0">
            <Link to="/">
              <img className="w-12 lg:w-20 lg:h-20 h-12" src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="text-blue text-lg font-bold mb-4 lg:mb-0">
            <p>&copy; {new Date().getFullYear()} College Guide</p>
          </div>
          <div className="text-blue lg:text-lg text-base">
            <p className='text-center font-bold'>Contact:</p>
            <p>Address: Chattogram, Bangladesh</p>
            <p>Email: sabitameem578@gmail.com</p>
            <p>Phone: +880 1843571638</p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;