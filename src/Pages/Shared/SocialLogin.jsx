import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <div className="divider"></div>
      <div className="mt-0 text-center">
        <p className=" mb-2 mr-3 text-blue font-bold">Login With </p>

        
      </div>
     <div className="flex justify-center items-center">
     <div className="flex items-center justify-center">
          <button
            //   onClick={handleGoogleLogin}
            className="btn mb-2 text-color-four hover:bg-color-four hover:text-white btn-sm btn-circle btn-outline"
          >
            <FaGoogle></FaGoogle>
          </button>{" "}
          <span className="text-lg text-color-one font-semibold mb-2">
            OOGLE
          </span>
        </div>
        <div className="divider divider-horizontal divider-blue mb-2">OR</div>
        <div className="flex items-center justify-center">
          <button
            //   onClick={handleGoogleLogin}
            className="btn mb-2 text-color-four hover:bg-color-four hover:text-white btn-sm btn-circle btn-outline"
          >
            <FaGithub></FaGithub>
          </button>{" "}
          <span className=" text-lg text-color-one font-semibold mb-2">
            ITHUB
          </span>
        </div>
     </div>

      <div className="mt-0 mb-4">
        
      </div>
      <div className="text-center"></div>
    </div>
  );
};

export default SocialLogin;
