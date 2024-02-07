import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full h-full">
      <div className="flex text-2xl text-[#b8c8dd] items-center justify-center">
        <h1 className="mt-16">Find Your New Patner😉</h1>
      </div>
      <div className="flex justify-center items-center mt-16">
        <ul className="flex gap-5 font-semibold">
          <li>
            <Link
              className="px-14 hover:bg-[#c0ec60] p-4 rounded-sm text-[16px] duration-300 ease-in-out text-[#b8c8dd] hover:text-black"
              to=""
            >
              Pre-Owned Cars
            </Link>
          </li>
          <li>
            <Link
              className="px-14 hover:bg-[#c0ec60] p-4 rounded-sm text-[16px] duration-300 ease-in-out text-[#b8c8dd] hover:text-black"
              to=""
            >
              Zero Milage
            </Link>
          </li>
        </ul>
      </div>
      {/* <form
        action="http://localhost:5173/cars"
        method="POST"
        enctype="multipart/form-data"
      >
        <input type="text" name="make" placeholder="Make" />
        <input type="text" name="model" placeholder="Model" />
        <input type="number" name="year" placeholder="Year" />
        <input type="number" name="price" placeholder="Price" />
        <input type="file" name="image" accept="image/*" />
        <button type="submit">Submit</button>
      </form> */}
    </div>
  );
};

export default Hero;
