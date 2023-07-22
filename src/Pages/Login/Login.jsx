import { Helmet } from "react-helmet";

import login from "../../assets/Login/undraw_access_account_re_8spm.svg";
import { Link } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin";

const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Login | College Guide</title>
      </Helmet>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img
              className="lg:w-[470px] w-36 mb-12 lg:ml-20"
              src={login}
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm">
            <div className="mb-8 text-center">
              <h1 className="my-3 text-blue text-4xl font-bold">Log In</h1>
              <p className="text-sm text-gray-400">
                Sign in to access your account
              </p>
            </div>{" "}
            <form className="card-body text-blue">
            <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                // ref={emailRef}
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
                New here?
                <Link to="/signUp">
                  <span className="font-semibold">Create a New Account</span>
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

export default Login;
