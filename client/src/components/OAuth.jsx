import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logInSuccess } from "../redux/user/userSlice";

const OAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGoogleAuth = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
      const res = await axios.post(
        "http://localhost:3000/auth/google",
        {
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = res.data;
      dispatch(logInSuccess(data));
      navigate("/");
    } catch (error) {
      console.log("could not sigin with google with error", error);
      console.log("Could not sign in with Google:", error); // Add this line
      console.error("Could not sign in with Google:", error);
    }
  };
  return (
    <button
      onClick={handleGoogleAuth}
      type="button"
      className="rounded-md bg-[#c0ec60] text-black font-[600] h-[50px] w-1/2 p-2 justify-center text-[14px] hover:scale-105 ease-in-out duration-200 border border-transparent focus:outline-none focus:border-transparent focus:ring-0 self-center" // Added self-center class
    >
      Continue With Google
    </button>
  );
};

export default OAuth;
