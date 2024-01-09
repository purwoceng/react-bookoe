import { Link } from "react-router-dom";
import StarRating from "./createRating";

const BigBook = ({ result }) => {
  return (
    <div className="grid grid-cols-2 justify-between">
      <img className="w-[277px] h-[346px]" src={result.image_url}></img>
      <div>
        <p className="text-black text-2xl font-semibold font-['Poppins'] line-clamp-2">
          {result.title}
        </p>
        <p className="text-black text-xl font-['Poppins']">
          By {result.author.name}
        </p>
        <div className="flex">
          <p className="text-black text-[20px] font-['Poppins'] mr-5  rounded-full bg-amber-400">
            {result.rating}
          </p>
          <StarRating rating={result.rating} />
        </div>

        <p className="text-black text-xl font-['Poppins']">{result.synopsis}</p>
        <Link
          key={result.id}
          to={`/books/${result.id}`}
          className="bg-button1 hover:bg-gray-400 text-violet-500 font-bold py-2 px-4 rounded inline-flex items-center mt-4  border-solid border-4 border-gray-200"
        >
          <span className="mr-2">Read Book</span>
        </Link>
      </div>
    </div>
  );
};

export default BigBook;
