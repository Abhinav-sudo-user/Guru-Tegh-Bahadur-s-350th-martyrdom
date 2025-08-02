import Ribbon from "../components/ribbon";
import guruImage from "./guru1.png"
import kesari from "./kesari.png"
function Teachings(){
    let list = [
  ["ਨਾਮ ਸਿਮਰਨ", "NAAM SIMRAN", "Remembering God's name cleanses the soul and brings peace."],
  ["ਸਭ ਲਈ ਬਰਾਬਰੀ", "EQUALITY FOR EVERYONE", "Guru Sahib Ji taught Sabh Manukh Ikk Samaan — all humans are equal."],
  ["ਸਚ ਤੇ ਨਿਰਭਤਾ", "SACHTE NIRBHTA", "Guru Sahib Ji taught to speak truth and stand fearless against injustice."],
  ["ਧਰਮ ਦੀ ਆਜ਼ਾਦੀ", "DHARAM DI AZAADI", "Guru Ji sacrificed his life so others could freely follow their faith."],
  ["ਸੁਖ ਦੁੱਖ ਸਮ", "BE HIGH-SPIRITED IN JOYS AND SORROWS", "Guru Ji taught to stay humble in joy and steady in pain."],
  ["ਦੁੱਖ ਵਿਚ ਵੀਰਤਾ ਨਾਲ ਜੀਣਾ", "ENDURE PAIN WITH COURAGE", "Endure pain with courage, not complaint."],
  ["ਰੰਗਰੂਟਾ ਸਿਦਕ ਤੇ ਮੂਲਕ", "DISCIPLINED AND A CHEERFUL WARRIOR", "He taught spiritual detachment as the key to true joy."],
  ["ਅਨੰਦ ਪੂਰਨ ਸੇਵਾ", "SERVICE OF HUMANITY", "Guru Ji taught that serving humanity is serving the Divine."],
  ["ਸਚਾਈ ਤੇ ਦਇਆਲਤਾ", "HONESTY AND COMPASSION", "Guru Ji taught to live simply, honestly, and with compassion."],
  ["ਮਨ ਤੇ ਜੀਤ", "VICTORY OVER MIND", "He taught spiritual detachment as the key to true joy."]
]

return (
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
<link href="https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;500;600;700;800&family=Tiro+Gurmukhi:ital@0;1&display=swap" rel="stylesheet"></link>
    <div className="flex flex-col p-2 items-center">
    <Ribbon text="Guru Sahib's ji teaching" />
    <img className="w-50 h-65 m-1.5"src={guruImage} alt="guru" />
    <div className=" font-bold text-right" style={{ fontFamily: "'Tiro Gurmukhi', serif" }}>
        <p className="text-center" ><span className="text-nowrap">“ਜੋ ਨਰ ਦੁਖ ਮੈ ਦੁਖ ਨਹੀਂ ਮਨੈ, ਸੁਖ ਸਨੇਹੁ ਅਰੁ ਭੈ ਨਹੀ ॥ ”</span><br /> (One who does not react to pain, pleasure, love, or fear — such a soul is enlightened.)</p> 
        <h3 className="text-[1.2em] ">— Guru Tegh Bahadur Ji</h3>
        </div>
        <div
  style={{ fontFamily: "'Tiro Gurmukhi', serif" }}
  className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-4 mx-auto max-w-screen-lg place-items-center"
>
  {list.map((p, idx) => (
    <div
  key={idx}
  className="relative bg-cover bg-center rounded-xl overflow-hidden w-full max-w-[250px] h-full shadow-md transition-all duration-300 hover:scale-[1.03]"
  style={{
    backgroundImage: `./kesari.png`,
  }}
>
  <div className="backdrop-brightness-110 bg-white/70 p-4 h-full flex flex-col justify-between text-center space-y-2 rounded-xl">
    <div className="inline-block bg-[#fde4ab] text-[#FD782D] font-semibold px-3 py-1 rounded">
      <p className="text-base">{p[0]}</p>
      <p className="text-sm">({p[1]})</p>
    </div>
    <p
      style={{ fontFamily: "'Montserrat', sans-serif" }}
      className="text-gray-700 text-sm"
    >
      {p[2]}
    </p>
  </div>
</div>

  ))}
</div>


    </div>
    </>
)
}

export default Teachings;