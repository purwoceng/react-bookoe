import { useEffect, useState } from "react";
import HeroTopPicks from "../component/HeroTopPicks";
import { Result } from "postcss";
import BookTop from "../component/BookTop";
const ENDPOINT = "https://bookapi.cm.hmw.lol/";

const TopPicks = () => {
  const [topPick, setTopPick] = useState([]);
  async function bookApi() {
    try {
      const url = `${ENDPOINT}api/books`;
      const response = await fetch(url);
      const json = await response.json();
      const data = json.data.slice(0, 100);
      const filteredData = data.filter((item) => item.is_top_pick === true);
      const toppick = filteredData.slice(4, 8);
      const dataWithIndex = toppick.map((item, index) => ({
        ...item,
        nomorUrut: index + 1,
      }));
      console.log(dataWithIndex);
      setTopPick(dataWithIndex);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    bookApi();
  }, []);
  return (
    <>
      <HeroTopPicks />
      <div className="grid grid-cols-4 gap-4 m-12">
        {topPick.map((result) => (
          <BookTop key={result.isbn} result={result} />
        ))}
      </div>
    </>
  );
};

export default TopPicks;
