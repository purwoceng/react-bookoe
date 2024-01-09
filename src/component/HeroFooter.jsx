import { FaEnvelope } from "react-icons/fa";

const HeroFooter = () => {
  return (
    <>
      <div className="container h-auto ml-12 border border-solid rounded-xl bg-button mt-12 pb-[100px]">
        <div className="w-[794px] mx-auto text-center mt-14 text-white text-[42px] font-semibold font-['Poppins']">
          Join our newsletter to get our latest recommendation!
        </div>
        <form>
          <div className="flex items-center max-w-xs mx-auto">
            {" "}
            <input
              type="text"
              placeholder="Enter Your Email"
              className=" text-center input input-bordered input-accent w-full max-w-xs"
            />
            <FaEnvelope className="absolute ml-3 text-[18px]" />
            <button className="bg-button1 hover:bg-gray-400 text-violet-500 font-bold py-2 px-4 rounded inline-flex items-center ml-4  border-solid border-4 border-gray-200">
              <span className="mr-2">Submit</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default HeroFooter;
