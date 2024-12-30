import { Link } from "react-router-dom";
import StarRating from "./createRating";

const BigBook = ({ result }) => {
  return (
    <div className="grid grid-cols-2 justify-between">
      <img
        className="w-[277px] h-[346px]"
        src={result.formats["image/jpeg"]}
      ></img>
      <div className="relative">
        <p className="text-black text-2xl font-semibold font-['Poppins'] line-clamp-2">
          {result.title}
        </p>
        <p className="text-black text-xl font-['Poppins']">
          By {result.authors[0]?.name}
        </p>
        <div className="flex">
          <p className="text-black text-[20px] font-['Poppins'] mr-5  rounded-full bg-amber-400">
            {/* {result.rating} */}
          </p>
          {/* <StarRating rating={result.rating} /> */}
        </div>

        <p className="text-black text-xl font-['Poppins']">{result.formats?.['text/plain']}</p>
        <Link
          key={result.id}
          to={`/books/${result.id}`}
          className="hover:bg-violet-400 hover:text-white text-violet-500 font-bold py-2 px-20 rounded-lg inline-flex items-center border-solid border-2 border-gray-200 absolute bottom-0"
        >
          <span className="mr-2">Read Book</span>
        </Link>
      </div>
    </div>
  );
};

export default BigBook;
