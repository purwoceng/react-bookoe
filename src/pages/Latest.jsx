import { useEffect, useState } from "react";
import HeroLatest from "../component/HeroLatest";
import SmallLatest from "../component/SmallLatest";

const ENDPOINT = "https://bookapi.cm.hmw.lol/";

const Latest = () => {
  const [latestBook, setLatestBook] = useState([]);

  async function bookApi() {
    try {
      const url = `${ENDPOINT}api/books`;
      const response = await fetch(url);
      const json = await response.json();
      const data = json.data.slice(0, 100);
      const sortedData = data.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
      const slicedata = sortedData.slice(0, 20);
      console.log(slicedata);
      setLatestBook(slicedata);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    bookApi();
  }, []);

  return (
    <>
      <HeroLatest />
      <div className="grid grid-cols-4 mb-32 gap-4 m-12">
        {latestBook.map((result) => (
          <SmallLatest key={result.isbn} result={result} />
        ))}
      </div>
    </>
  );
};
export default Latest;
