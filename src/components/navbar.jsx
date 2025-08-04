import logo from "./logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <>
      <div
        style={{ fontFamily: "'Montserrat', serif" }}
        className="bg-[#fde4ab] font-[] flex items-center"
      >
        <span id="logo" className="w-10 h-10 p-1">
          <img src={logo} alt="" />
        </span>
        <Link
          to="/"
          className="cursor-pointer w-80 text-3xl font-bold grow text-center p-1"
        >
          <span id="heading">{props.text}</span>
        </Link>
        <span id="account" className="w-10 text-[#000000]">
          {" "}
          <FontAwesomeIcon icon={faUser} />
        </span>
      </div>
    </>
  );
}
