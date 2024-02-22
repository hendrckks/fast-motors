import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import OAuth from "./OAuth";

const LoginForm = ({ error, handleChange, handleSubmit, loading }) => {
  return (
    <div className="h-[100vh] flex justify-center">
      <div className="flex flex-col mt-10 max-w-lg">
        <h2 className="text-center text-4xl text-neutral-200 my-8">Login</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 text-white"
        >
          <input
            type="email"
            className="inputs pl-4 border border-transparent focus:outline-none focus:border-transparent focus:ring-0 self-center"
            placeholder="    Email"
            onChange={handleChange}
            id="email"
          />
          <input
            type="password"
            className="inputs pl-4 border border-transparent focus:outline-none focus:border-transparent focus:ring-0 self-center"
            placeholder="    Password"
            onChange={handleChange}
            id="password"
          />
          <button
            disabled={loading}
            className="mt-8 rounded-md bg-[#c0ec60] text-black font-[600] h-[50px] w-1/2 p-2 justify-center text-[14px] hover:scale-105 ease-in-out duration-200 border border-transparent focus:outline-none focus:border-transparent focus:ring-0 self-center"
          >
            {loading ? "LOADING..." : "LOGIN"}
          </button>
          <OAuth />
        </form>
        <div className="flex justify-center mt-4">
          <p className="text-neutral-500">Dont have an account?</p>
          <Link className="ml-2 text-neutral-200" to="/signup">
            SignUp
          </Link>
        </div>
        <div className="flex justify-center mt-2">
          {error && <p className="text-red-800">{error} !</p>}
        </div>
      </div>
    </div>
  );
};
LoginForm.propTypes = {
  error: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default LoginForm;
