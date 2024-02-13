import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#112744] h-[300px] flex justify-center font-sans">
      <div className="bg-[#091422] w-[98%] h-[90%] rounded-[50px] text-neutral-200 ">
        <div className="flex grid-cols-4 gap-52 justify-center mt-10">
          <div className="flex-col">
            <h2 className="text-white">Company</h2>
            <ul className="text-[#b8c8dd] py-4">
              <Link to="/about">
                <li>About Us</li>
              </Link>
              <Link>
                <li>Location</li>
              </Link>
              <Link>
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          <div>
            <h2 className="text-white">Support</h2>
          </div>
          <div className="flex-col">
            <h2 className="text-white">Newsletter</h2>
            <div className="flex items-center gap-2 mt-5">
              <form>
                <input
                  type="text"
                  className="h-[35px] w-60 rounded-sm bg-[#ffffff0f] border border-transparent focus:outline-none focus:border-transparent focus:ring-0"
                  placeholder="   Email Address"
                />
              </form>
              <button
                type="submit"
                className="rounded-md bg-[#c0ec60] text-black font-[500] p-2 text-[14px] hover:scale-105 ease-in-out duration-200 border border-transparent focus:outline-none focus:border-transparent focus:ring-0"
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex">
            <h2 className="text-white justify-center">Socials</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
