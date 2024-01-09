import moment from "moment";
import { Link } from "react-router-dom";
import StarRating from "./createRating";
const SmallLatest = ({ result }) => {
  return (
    <div className="h-auto relative mt-20">
      <img
        className="border border-solid w-[277px] h-[346px]"
        src={result.image_url}
      ></img>
      <p className="w-[260px] text-black text-2xl font-semibold font-['Poppins'] leading-loose line-clamp-2">
        {result.title}
      </p>
      <p className="w-[260px] text-black text-xl font-['Poppins'] leading-loose pb-4">
        by {result.author.name}
      </p>
      <StarRating rating={result.rating} />
      <div dir="rtl relative">
        <div className="bg-violet-600 w-[100px] rounded-s-lg text-center h-8  right-[202px] bottom-[480px] font-semibold text-white absolute">
          {moment(result.created_at).format("D/M/Y")}
        </div>
      </div>

      <Link
        key={result.id}
        to={`/books/${result.id}`}
        className="hover:bg-violet-400 hover:text-white text-violet-500 font-bold py-2 px-20 rounded-lg inline-flex items-center  border-solid border-2 border-gray-200 absolute bottom-[-60px]"
      >
        <span className="mr-2">Read Book</span>
      </Link>
    </div>
  );
};

export default SmallLatest;
