import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // const res = await fetch("http://localhost:3000/api/auth/signup", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      // });
      const res = await axios.post(
        "http://localhost:3000/auth/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data);
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };
  console.log(formData);

  return (
    <div className="h-[100vh] flex justify-center">
      <div className="flex flex-col mt-10 max-w-lg">
        <h2 className="text-center text-4xl text-neutral-200 my-8">Login</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 text-white"
        >
          <input
            type="username"
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
            className="my-8 rounded-md bg-[#c0ec60] text-black font-[600] h-[50px] w-1/2 p-2 justify-center text-[14px] hover:scale-105 ease-in-out duration-200 border border-transparent focus:outline-none focus:border-transparent focus:ring-0 self-center" // Added self-center class
          >
            {loading ? "LOADING..." : "LOGIN"}
          </button>
        </form>
        <div className="flex justify-center">
          <p className="text-neutral-500">Don't have an account?</p>
          <Link className="ml-2 text-neutral-200" to="/signup">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
