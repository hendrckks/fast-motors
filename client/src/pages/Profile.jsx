import { useDispatch, useSelector } from "react-redux";
import { useState, useRef, useEffect, React } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import UpdateForm from "../components/UpdateForm.jsx";
import { app } from "../firebase";
import {
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  updateUserStart,
  updateUserFailure,
  updateUserSuccess,
} from "../redux/user/userSlice.js";
import axios from "axios";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";

// import { Hidden } from "@mui/material";

const Profile = () => {
  const fileRef = useRef(null);
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [anchorEl, setAnchorEl] = useState(null);
  const [file, setFile] = useState(undefined);
  const [fileperc, setFilePerc] = useState(0);
  const [errorUpload, setErrorUpload] = useState(false);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = Cookies.get("access_token");
  console.log("Token:", token);

  console.log(formData);

  console.log(file);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await axios.post(
        `http://localhost:3000/user/update/${currentUser.data._id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
      if (res.status !== 200) {
        dispatch(updateUserFailure(res.data));
        return console.log(res.data.statusText);
      }
      dispatch(updateUserSuccess(res));
    } catch (error) {
      dispatch(updateUserFailure(error));
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //firebase storage rules
  // rules_version = '2';

  // // Craft rules based on data in your Firestore database
  // // allow write: if firestore.get(
  // //    /databases/(default)/documents/users/$(request.auth.uid)).data.isAdmin;
  // service firebase.storage {
  //   match /b/{bucket}/o {
  //     match /{allPaths=**} {
  //       allow read;
  //       allow write: if request.resource.size < 2 * 1024 * 1024 &&
  //       request.resource.contentType.matches("image/.*")
  //     }
  //   }
  // }

  const handleDelete = async () => {
    try {
      dispatch(deleteUserStart());

      const res = await axios.delete(
        `http://localhost:3000/user/delete/${currentUser._id}`
      );
      const data = res.data;

      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      navigate("/auth/signup");
      dispatch(deleteUserSuccess(data.message));
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
    setAnchorEl(null);
  };

  useEffect(() => {
    if (file) {
      handleUpload(file);
    }
  }, [file]);

  const handleUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "stage_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setErrorUpload(true);
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURl) => {
          setFormData({ ...formData, avatar: downloadURl });
        });
      }
    );
  };
  return (
    <UpdateForm
      handleDelete={handleDelete}
      fileRef={fileRef}
      file={file}
      anchorEl={anchorEl}
      fileperc={fileperc}
      setFile={setFile}
      errorUpload={errorUpload}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleClick={handleClick}
      handleClose={handleClose}
      loading={loading}
      error={error}
      currentUser={currentUser}
    />
  );
};

export default Profile;
