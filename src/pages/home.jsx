import Navbar from "../components/navbar";
import photo from "./guru.png";
import khanda from "./khanda.png";
import { Link } from "react-router-dom";
export default function Home() {
  const menu = [
    "History & timeline",
    "Guru Sahib ji's teaching",
    "Legacy of martyrdom",
    "Events",
    "Picture & Video gallery",
    "Contact us",
  ];
  const links = [
    "/history",
    "/teachings",
    "/legacy",
    "/events",
    "/gallery",
    "/contact",
  ];

  return (
    <>
      <Navbar text="HIND DI CHADAR" />

      <div className="w-auto  h-full flex flex-wrap">
        <div id="non-menu" className=" flex-1/2 flex flex-col items-center">
          <img src={photo} alt="" className="m-2" />
          <h1 className="bg-[#FEE5BD] w-80 sm:w-100 p-2 border-2 rounded-2xl border-amber-50 text-center ">
            Welcome to the app about the legacy of
            <span className="text-nowrap font-bold">
              {" "}
              Guru Tegh Bahadur Sahib Ji
            </span>
          </h1>
        </div>
        <div id="menu" className=" p-2 text-[1.14rem] font-bold grow ">
          <ul>
            {menu.map((item, idx) => (
              <li
                key={idx}
                className="m-2 pr-2 pl-2 rounded-2xl bg-[#FEE5BD]/50 hover:bg-[#FEE5BD]/100 transition-all duration-300 font-bold flex items-center justify-center"
              >
                <img src={khanda} alt="" />
                <Link
                  to={links[idx]}
                  className="grow text-center hover:underline hover:text-orange-800"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
