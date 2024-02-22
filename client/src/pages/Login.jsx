import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  logInStart,
  logInFailure,
  logInSuccess,
} from "../redux/user/userSlice.js";
import LoginForm from "../components/LoginForm.jsx";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(logInStart());
      const res = await axios.post(
        "http://localhost:3000/auth/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = res.data;
      if (data.success === false) {
        dispatch(logInFailure(data.message));
        return console.log(data.message);
      }
      dispatch(logInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(logInFailure(error.message));
    }
  };

  return (
    <LoginForm
      error={error}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      loading={loading}
    />
  );
};

export default Login;
