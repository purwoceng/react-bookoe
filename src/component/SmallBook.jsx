import { Link } from "react-router-dom";
import StarRating from "./createRating";

const SmallBook = ({ result }) => {
  return (
    <div className=" pt-12 h-auto">
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
      <StarRating rating={result.rating} className="text-xl" />
      <Link
        key={result.id}
        to={`/books/${result.id}`}
        className=" hover:bg-violet-400 hover:text-white text-violet-500 font-bold py-2 w-[270px] rounded-lg inline-flex items-center mt-4  border-solid border-2 border-gray-200"
      >
        <span className="ml-20">Read Book</span>
      </Link>
    </div>
  );
};

export default SmallBook;
