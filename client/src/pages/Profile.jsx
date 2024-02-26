import { useSelector } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState, useRef, useEffect, React } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
// import { Hidden } from "@mui/material";

const Profile = () => {
  const fileRef = useRef(null);
  const { currentUser } = useSelector((state) => state.user);
  const [anchorEl, setAnchorEl] = useState(null);
  const [file, setFile] = useState(undefined);
  const [fileperc, setFilePerc] = useState(0);
  const [errorUpload, setErrorUpload] = useState(false);
  const [formData, setFormData] = useState({});
  console.log(formData);

  console.log(file);

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
    <div className="h-screen flex flex-col my-14 items-center bg-[#112744]">
      <h1 className="font-semibold text-neutral-300 text-[30px]">Profile</h1>
      <div className="flex justify-center mt-10 bg-[#192f4e] backdrop-filter backdrop-blur-lg h-fit w-2/3 rounded-[20px] shadow-[0 8px 32px 0 rgba(0, 0, 0, 0.37)]">
        <div className="mt-20 flex flex-col">
          <img
            src={currentUser.avatar}
            onClick={() => fileRef.current.click()}
            className="rounded-full self-center object-cover h-32 w-32 cursor-pointer"
            alt="profile image"
          />
          <input
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            ref={fileRef}
            className="hidden"
            accept="image/*"
          />
          {file && (
            <>
              {fileperc < 100 ? (
                <h2 className="text-green-700 self-center text-[16px] mt-4">
                  {fileperc}% uploaded
                </h2>
              ) : (
                <p className="text-green-700 self-center mt-4">
                  Image Uploaded Succesfully
                </p>
              )}
              {errorUpload && (
                <p className="text-red-700">Error Uploading Image</p>
              )}
            </>
          )}

          <h2 className="text-white self-center text-[20px] mt-4">
            {currentUser.username}
          </h2>
          <div>
            <form className="flex flex-col items-center gap-4 py-4">
              <input
                type="text"
                className="inputs sm:w-[500px] pl-4 border border-transparent focus:outline-none focus:border-transparent focus:ring-0 self-center "
                placeholder="    Username"
                id="username"
              />
              <input
                type="email"
                className="inputs sm:w-[500px] pl-4 border border-transparent focus:outline-none focus:border-transparent focus:ring-0 self-center"
                placeholder="    email"
                id="username"
              />
              <input
                type="password"
                className="inputs sm:w-[500px] pl-4 border border-transparent focus:outline-none focus:border-transparent focus:ring-0 self-center"
                placeholder="    password"
                id="username"
              />
              <button className="mt-8 disabled:opacity-80 rounded-md bg-[#c0ec60] text-black font-[600] h-[50px] w-1/2 p-2 justify-center text-[14px] hover:scale-105 ease-in-out duration-200 border border-transparent focus:outline-none focus:border-transparent focus:ring-0 self-center">
                Update
              </button>
              <button className=" disabled:opacity-80 rounded-md bg-[#c0ec60] text-black font-[600] h-[50px] w-1/2 p-2 justify-center text-[14px] hover:scale-105 ease-in-out duration-200 border border-transparent focus:outline-none focus:border-transparent focus:ring-0 self-center">
                Create Listing
              </button>
            </form>
          </div>
        </div>
        <MenuIcon
          onClick={handleClick}
          className="text-white absolute cursor-pointer hover:scale-110 ease-in-out duration-300 transition-transform right-40 top-10"
        />
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          className="mt-2"
        >
          <MenuItem onClick={handleClose}>
            <p className="font-semibold">Existing Listings</p>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <p className="font-semibold">Delete Account</p>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <p className="font-semibold">Logout</p>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Profile;
