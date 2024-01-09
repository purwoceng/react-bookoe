import { useLocation } from "react-router-dom";
import BookNotFound from "../component/BookNotFound";

function SearchPage() {
  const location = useLocation();
  const searchResults = location.state?.searchResults || [];

  return (
    <div>
      {searchResults.length === 0 ? (
        <BookNotFound />
      ) : (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id} result={result}>
              <p>Title: {result.title}</p>
              <p>Author: {result.author?.name}</p>
              <p>Rating: {result.rating}</p>
              {/* Add more book details as needed */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchPage;
