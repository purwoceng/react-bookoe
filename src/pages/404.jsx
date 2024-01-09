import { Link } from "react-router-dom";

const error = () => {
  return (
    <>
      <div
        className="bg-white m-20 border border-solid"
        style={{
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p className="font-semibold text-[200px] text-violet-400">404</p>
        <p className="font-semibold text-black text-xl">
          Look Like You've Got Lost
        </p>
        <p className="font-semibold text-opacity-60 text-indigo-950  text-xl ">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link>
          <button className="border border-solid rounded-[5.16px] mt-6 px-4 py-3 border-violet-500">
            Back Home
          </button>
        </Link>
      </div>
    </>
  );
};
export default error;
