import moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarRating from "./createRating";
const ENDPOINT = "https://bookapi.cm.hmw.lol/";
const DetailBook = () => {
  const [detailBook, setDetailBook] = useState({});
  const { id } = useParams();

  async function bookApi() {
    try {
      const url = `${ENDPOINT}api/books/${id}`;
      const response = await fetch(url);
      const data = await response.json();

      console.log(data);
      setDetailBook(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    bookApi();
  }, [id]);

  return (
    <div className="grid grid-cols-3 gap-4 justify-between m-12">
      <div className="col-span-1">
        <img
          className="w-full h-[400px] rounded"
          src={detailBook.image_url}
          alt={detailBook.title}
        />
      </div>
      <div className="col-span-2 pt-20">
        <p className="text-black text-2xl font-semibold font-['Poppins'] line-clamp-2 pt-3">
          {detailBook.title}
        </p>
        <p className="text-black text-xl font-['Poppins'] pt-3">
          By {detailBook.author?.name}
        </p>
        <div className="flex">
          <p className="text-black text-[20px] font-['Poppins'] mr-5  rounded-full bg-amber-400">
            {detailBook.rating}
          </p>
          <StarRating rating={detailBook.rating} />
        </div>

        <p className="text-black text-xl font-['Poppins'] pt-4">
          {detailBook.synopsis}
        </p>
        <p className="text-neutral-500 text-xl font-light  font-['Poppins'] pt-11">
          {" "}
          First Published {""}
          {moment(detailBook.created_at).format("MMMM Do YYYY")}
        </p>
      </div>
    </div>
  );
};

export default DetailBook;
