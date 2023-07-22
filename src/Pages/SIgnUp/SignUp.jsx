import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin";
import signUp from "../../assets/SignUp/undraw_enter_uhqk.svg";

const SignUp = () => {
  return (
    <div>
      <Helmet>
        <title>SignUp | College Guide</title>
      </Helmet>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
            <img
              className="lg:w-[380px] w-36 mb-12 lg:mr-24"
              src={signUp}
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
            <div className="mb-8 text-center">
              <h1 className="my-3 text-blue text-4xl font-bold">Sign Up</h1>
              <p className="text-sm text-gray-400">Welcome to College Guide!</p>
            </div>
            <form className="card-body text-blue">
            <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue bg-gray-200 text-gray-900"
              />
            </div>
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
