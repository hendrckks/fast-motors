import TOYOTA from "../logos/toyota_vector.png";
import MERCEDES from "../logos/mercedes_vector.png";
import RANGE from "../logos/range_rover_vector.png";
import SUBARU from "../logos/subaru_vector.png";
import AUDI from "../logos/audi_vector.png";
import NISSAN from "../logos/nissan_vector.png";

const Carousel = () => {
  return (
    <div className="h-[120px] whitespace-nowrap overflow-hidden bg-opacity-10 backdrop-filter backdrop-blur-md bg-white">
      <div className="flex justify-center items-center gap-16">
        <img className="h-[120px]" src={AUDI} alt="" />
        <img className="h-[120px]" src={MERCEDES} alt="" />
        <img className="h-[120px]" src={NISSAN} alt="" />
        <img className="h-[120px]" src={RANGE} alt="" />
        <img className="h-[120px]" src={TOYOTA} alt="" />
        <img className="h-[120px]" src={SUBARU} alt="" />
      </div>
    </div>
  );
};

export default Carousel;
