import { useSelector } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useRef } from "react";

const Profile = () => {
  const fileRef = useRef(null);
  const { currentUser } = useSelector((state) => state.user);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
            type="file"
            ref={fileRef}
            className="hidden"
            accept="image/*"
          />
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
