import { Link } from "react-router-dom";
import StarRating from "./createRating";

const BookTop = ({ result }) => {
  return (
    <div className="h-auto">
      <img
        className="border border-solid w-[277px] h-[346px]"
        src={result.image_url}
      ></img>
      <p className="w-[260px] text-black text-2xl font-semibold font-['Poppins'] leading-loose line-clamp-2">
        {result.title}
      </p>
      <p className="w-[260px] text-black text-xl font-['Poppins'] leading-loose">
        by {result.author.name}
      </p>
      <StarRating rating={result.rating} />
      <div dir="rtl">
        <div className="bg-violet-600 w-[75px] rounded-s-lg text-center h-8 relative right-[226px] bottom-[480px] font-semibold text-white relative">
          <div className="rounded-full h-6 w-6 bg-white text-black items-center mr-8 mt-1 absolute">
            {result.nomorUrut}
          </div>
        </div>
      </div>

      <Link
        key={result.id}
        to={`/books/${result.id}`}
        className="hover:bg-violet-400 hover:text-white text-violet-500 font-bold py-2 px-20 rounded-lg inline-flex items-center mt-4  border-solid border-2 border-gray-200"
      >
        <span className="mr-2">Read Book</span>
      </Link>
    </div>
  );
};

export default BookTop;
