import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SignupForm from "../components/SignupForm";

const SignUp = () => {
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
        "http://localhost:3000/auth/signup",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data);
      navigate("/login");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };
  console.log(formData);

  return (
    <SignupForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      loading={loading}
    />
  );
};

export default SignUp;
