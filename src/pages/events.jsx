import Ribbon from "../components/ribbon";
import { FaChalkboardTeacher, FaQuestionCircle, FaFileAlt, FaSeedling } from "react-icons/fa";
import { GiDrum, GiCrossedSwords, GiTheaterCurtains } from "react-icons/gi";

export default function Events() {
  const events = [
    ["Seminar competition", <FaChalkboardTeacher className="text-3xl text-[#E66223]" />],
    ["Quiz competition", <FaQuestionCircle className="text-3xl text-[#E66223]" />],
    ["Kirtan competition", <GiDrum className="text-3xl text-[#E66223]" />],
    ["Essay/Poem writing", <FaFileAlt className="text-3xl text-[#E66223]" />],
    ["Gatka Competition", <GiCrossedSwords className="text-3xl text-[#E66223]" />],
    ["Street Plays", <GiTheaterCurtains className="text-3xl text-[#E66223]" />],
    ["Tree Plantation drive", <FaSeedling className="text-3xl text-[#E66223]" />],
  ];

  return (
    <div style={{ fontFamily: "'Montserrat', serif" }} className="flex font-bold flex-col m-1 items-center text-center">
      <Ribbon text="Upcoming Events" />
      <span className="m-3 text-2xl md:w-2xl mt-7 rounded-2xl font-medium border-2 p-1 bg-[#E2C473]/50">
        What's happening? Browse diverse events, then tap to discover details and sign up!
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 pb-10">
  {events.map(([name, Icon], idx) => {
    const isLastAndOdd = events.length % 3 === 1 && idx === events.length - 1;
    return (
      <div
        key={idx}
        className={`flex items-center gap-4 bg-[#FF8800]/20 shadow-md rounded-xl p-6 hover:shadow-lg transition-all duration-300 w-full h-28 md:w-72 md:h-24 mx-auto ${
          isLastAndOdd ? "md:col-span-3 md:justify-self-center" : ""
        }`}
      >
        <div className="text-3xl text-[#E66223]">{Icon}</div>
        <span className="text-lg font-medium text-start">{name}</span>
      </div>
    );
  })}
</div>
    </div>
  );
}
