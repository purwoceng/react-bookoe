import React from "react";
import { Link } from "react-router-dom";
import StarRating from "./createRating";

const Hero = ({ result }) => {
  return (
    <div className="container h-auto ml-12 border border-solid rounded-xl bg-hero mt-4 pb-[100px]">
      <div className="grid grid-cols-2 mt-12">
        <div className="ml-12">
          <p className="text text-violet-500 text-xl font-semibold font-['Poppins']">
            MUST READ
          </p>
          <p className="text-stone-900 text-[62px] font-semibold font-['Poppins'] leading-[72px]">
            {result[0]?.title}
          </p>
          <div className="mt-10">
            <p className="text-black text-[30px] text-base font-medium font-['Poppins'] flex items-center gap-8">
              {result[0]?.authors[0]?.name}
              <StarRating rating={result[0]?.rating} />
            </p>
          </div>
          {/* <p className="text-black text-base font-medium font-['Poppins'] mt-8">
            {result[0]?.synopsis}
          </p> */}
          <Link
            key={result.id}
            to={`/books/${result[0]?.id}`}
            className="bg-button hover:bg-gray-400 text-white font-bold py-2 px-4 rounded inline-flex items-center mt-4"
          >
            <span className="mr-2">Read Book</span>
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="14"
              viewBox="0 0 448 512"
            >
              <path
                d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                fill="white"
              />
            </svg>
          </Link>
          <button className="bg-button1 hover:bg-gray-400 text-violet-500 font-bold py-2 px-4 rounded inline-flex items-center mt-4 ml-5 border-solid border-4 border-gray-200">
            <span className="mr-2">See All Recomendations</span>
          </button>
        </div>
        <div className="relative">
          <Link key={result.id} to={`/books/${result.id}`}>
            <img
              className="rounded-[10px] w-[175px] h-[280px] absolute right-[50px] top-12"
              src={result.formats?.["image/jpeg"]}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
