import { useEffect } from "react";
import { useState } from "react";
import Hero from "../component/HeroSection";
import BigBook from "../component/BigBook";
import SmallBook from "../component/SmallBook";
import HeroFooter from "../component/HeroFooter";

const ENDPOINT = "https://bookapi.cm.hmw.lol/";

const Home = () => {
  const [bigBook, setBigBook] = useState([]);
  const [smallBook, setSmallBook] = useState([]);
  const [bookHero, setBookHero] = useState([]);
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };
  async function bookApi() {
    try {
      const url = `${ENDPOINT}api/books`;
      const response = await fetch(url);
      const json = await response.json();
      const data = json.data.slice(0, 100);
      setBigBook(shuffleArray(data.slice(0, 4)));
      setSmallBook(shuffleArray(data.slice(0, 4)));
      setBookHero(shuffleArray(data));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    bookApi();
  }, []);

  return (
    <>
      <Hero result={bookHero} />
      <div className="grid grid-cols-2 gap-4 m-12">
        {bigBook.map((result) => (
          <BigBook key={result.isbn} result={result} />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4 m-12">
        {smallBook.map((result) => (
          <SmallBook key={result.isbn} result={result} />
        ))}
      </div>
    </>
  );
};

export default Home;
