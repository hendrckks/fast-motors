import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full h-full">
      <div className="flex text-3xl text-[#b8c8dd] items-center justify-center">
        <h1 className="mt-16">Find Your New Partner😉</h1>
      </div>
      <div className="flex justify-center items-center mt-16">
        <ul className="flex gap-5 font-semibold caret-transparent">
          <li>
            <Link
              className="px-14 hover:bg-[#c0ec60] p-4 rounded-md text-[16px] duration-300 ease-in-out text-[#b8c8dd] hover:text-black"
              to=""
            >
              Pre-Owned Cars
            </Link>
          </li>
          <li>
            <Link
              className="px-14 hover:bg-[#c0ec60] p-4 rounded-md text-[16px] duration-300 ease-in-out text-[#b8c8dd] hover:text-black"
              to=""
            >
              Zero Milage
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
