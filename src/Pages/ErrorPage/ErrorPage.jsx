import error from '../../assets/error/undraw_access_denied_re_awnf.svg'
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="w-full text-center">
      <Helmet>
        <title>Error Page | College Guide</title>
      </Helmet>
      <img className="mx-auto w-1/2 h-[140px] lg:h-[200px] mt-12" src={error} alt="" />
      <div className='mt-3 text-xs md:text-base md:font-semibold lg:text-lg  font-normal lg:font-semibold'>
        <h1>Oops! Something went wrong.</h1>
        <p>We apologize, but it seems that there was an error.</p>
        <p>
          Please try again later or contact support if the problem persists.
        </p>
      </div>
      <Link to="/">
        <button className="button-sm mt-4 md:mt-7 lg:mt-10">
          Back to Home Page
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
