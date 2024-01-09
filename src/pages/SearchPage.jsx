import { Link, useLocation } from "react-router-dom";
import BookNotFound from "../component/BookNotFound";
import StarRating from "../component/createRating";

function SearchPage() {
  const location = useLocation();
  const searchResults = location.state?.searchResults || [];

  return (
    <div>
      {searchResults.length === 0 ? (
        <BookNotFound />
      ) : (
        <ul>
          <div className="grid grid-cols-4 mb-32 gap-4 m-12">
            {searchResults.map((result) => (
              <>
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
              </>
            ))}
          </div>
        </ul>
      )}
    </div>
  );
}

export default SearchPage;
