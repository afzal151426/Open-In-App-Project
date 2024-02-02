import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1 className="text-center text-slate-50 text-4xl">Homepage</h1>

      <ul className="bg-gray-400 text-white flex justify-around">
        <li className="p-5 text-slate-100 hover:bg-sky-700">
          <Link to="/signin">SignIn</Link>
        </li>
        <li className="p-5 text-slate-100 hover:bg-sky-700">
          <Link to="/">SignIn</Link>
        </li>
        <li className="p-5 text-slate-100 hover:bg-sky-700">
          <Link to="/upload">Upload</Link>
        </li>
        <li className="p-5 text-slate-100 hover:bg-sky-700">
          <Link to="/uploading">Uploading</Link>
        </li>
        <li className="p-5 text-slate-100 hover:bg-sky-700">
          <Link to="/uploaded">Uploaded</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
