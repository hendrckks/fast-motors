import React from "react";
import PropTypes from "prop-types";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const updateForm = ({
  handleClose,
  loading,
  error,
  currentUser,
  fileRef,
  file,
  fileperc,
  errorUpload,
  handleSubmit,
  handleChange,
  setFile,
  anchorEl,
  handleDelete,
  handleClick,
}) => {
  return (
    <div className="h-screen flex flex-col my-14 items-center bg-[#112744]">
      <h1 className="font-semibold text-neutral-300 text-[30px]">Profile</h1>
      <div className="flex justify-center mt-10 bg-[#192f4e] backdrop-filter backdrop-blur-lg h-fit w-2/3 rounded-[20px] shadow-[0 8px 32px 0 rgba(0, 0, 0, 0.37)]">
        <div className="mt-20 flex flex-col">
          <img
            src={currentUser.data.avatar}
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
            {currentUser.data.username}
          </h2>
          <div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center gap-4 py-4"
            >
              <input
                type="text"
                className="inputs sm:w-[500px] pl-4 border border-transparent focus:outline-none focus:border-transparent focus:ring-0 self-center text-white"
                placeholder="    Username"
                onChange={handleChange}
                defaultValue={currentUser.data.username}
                id="username"
              />
              <input
                type="email"
                className="inputs sm:w-[500px] pl-4 border border-transparent focus:outline-none focus:border-transparent focus:ring-0 self-center text-white"
                placeholder="    email"
                onChange={handleChange}
                defaultValue={currentUser.data.email}
                id="email"
              />
              <input
                type="password"
                className="inputs text-white sm:w-[500px] pl-4 border border-transparent focus:outline-none focus:border-transparent focus:ring-0 self-center"
                placeholder="    password"
                onChange={handleChange}
                defaultValue={currentUser.data.password}
                id="password"
              />
              <button
                disabled={loading}
                className="mt-8 disabled:opacity-80 rounded-md bg-[#c0ec60] text-black font-[600] h-[50px] w-1/2 p-2 justify-center text-[14px] hover:scale-105 ease-in-out duration-200 border border-transparent focus:outline-none focus:border-transparent focus:ring-0 self-center"
              >
                {loading ? "Updating..." : "Update"}
              </button>
              <button className=" disabled:opacity-80 rounded-md bg-[#c0ec60] text-black font-[600] h-[50px] w-1/2 p-2 justify-center text-[14px] hover:scale-105 ease-in-out duration-200 border border-transparent focus:outline-none focus:border-transparent focus:ring-0 self-center">
                Create Listing
              </button>
            </form>
          </div>
          <div className="flex justify-center mt-2">
            {error && <p className="text-red-800">{error} !</p>}
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
          <MenuItem onClick={handleDelete}>
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

updateForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  errorUpload: PropTypes.bool.isRequired,
  anchorEl: PropTypes.object,
  file: PropTypes.object,
  fileRef: PropTypes.object,
  setFile: PropTypes.func.isRequired,
  fileperc: PropTypes.number.isRequired,
  currentUser: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};
export default updateForm;
