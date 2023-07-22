import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin";
import signUp from '../../assets/SignUp/undraw_enter_uhqk.svg'

const SignUp = () => {
  return (
    <div>
      <Helmet>
        <title>SignUp | College Guide</title>
      </Helmet>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left mt-12 lg:mt-0 lg:ml-20">
            <img className="lg:w-[430px] w-36 mb-12" src={signUp} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-3xl mt-6 font-bold text-center text-blue">Login now!</h1>
            <form className="card-body text-blue">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="******"
                  className="input input-bordered"
                />
                <label className="label">
                <button
                // onClick={handleReset}
                className=" hover:underline text-blue hover:text-gold"
              >
                Forgot password?
              </button>
                </label>
              </div>
              <div className="form-control mt-6 mb-0">
                <button className="button-lg">Login</button>
              </div>
            </form>
            <div>
              {/* <button
                // onClick={handleReset}
                className=" hover:underline text-blue hover:text-gold"
              >
                Forgot password?
              </button> */}
              <p className="text-center">
                Already have an account?
                <Link to="/login">
                  <span className="font-semibold">Go to Login</span>
                </Link>
              </p>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
