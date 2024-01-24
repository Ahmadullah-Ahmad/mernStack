import { HiOutlineArrowRight } from "react-icons/hi2";
import Advertisment from "../features/Advertisments/Advertisment";
import { Back } from "../hooks/Back";

function AdvertismentDetails() {
  const { goBack } = Back();
  return (
    <div className="bg-gray-300 h-[88dvh] flex justify-center w-full relative darkModeTop">
      <HiOutlineArrowRight
        onClick={goBack}
        className="absolute right-6 top-2 hover:text-blue-500 cursor-pointer"
        size={30}
      />
      <Advertisment />
    </div>
  );
}

export default AdvertismentDetails;
