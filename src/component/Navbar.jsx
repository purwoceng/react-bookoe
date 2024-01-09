import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const ENDPOINT = "https://bookapi.cm.hmw.lol/";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const navigate = useNavigate();

  async function handleSearch(event) {
    event.preventDefault();
    try {
      const url = `${ENDPOINT}api/books?search=${searchTerm}`;
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      setSearchResults(json.results);
      navigate("/search", { state: { searchResults: json.results } });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="navbar bg-base-100 px-12">
      <Link to="" className="navbar-start">
        <img src="./src/assets/3.png" alt="error"></img>
        <p className=" top-[0px] ml-16 text-stone-900 text-[41px] font-medium absolute">
          Bookoe
        </p>
        <p className="top-[20px] left-[10px] text-stone-900 text-[19px] text-sm font-light font-['Poppins'] relative">
          Rekomendasi Bukumu
        </p>
      </Link>
      <div className="navbar-center hidden ml-40 lg:flex  text-[20px] text-sm font-light font-['Poppins']">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className="text-[21px] text-sm font-light font-['Poppins']"
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/latest"
              className="text-[21px] text-sm font-light font-['Poppins']"
            >
              Latest
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/top_picks"
              className="text-[21px] text-sm font-light font-['Poppins']"
            >
              Top Picks
            </NavLink>
          </li>
        </ul>
      </div>
      <form
        onSubmit={handleSearch}
        className="form-control w-1/2  flex justify-end items-center "
      >
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm ml-20"
          placeholder="Search for anything..."
          type="text"
          value={searchTerm}
          name="search"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </form>
      <div className="navbar-end">
        <a className="btn">Edit List</a>
      </div>
    </div>
  );
}
export default Navbar;
