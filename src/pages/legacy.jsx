import Ribbon from "../components/ribbon";
import martyrImage from "./legacy.png";
import matiDasImg from "./bhai_mati_das_ji.png";
import satiDasImg from "./bhai_sati_das_ji.png";
import dayalDasImg from "./bhai_dayal_das_ji.png";
import lakhiShahImg from "./bhai_lakhi_shah.png";
import jaitaImg from "./bhai_jaita_ji.png";

export default function Martyrdom() {
  return (
    <div className="min-h-screen px-4 pt-4 pb-8 flex flex-col items-center bg-[url('/mandala-bg.svg')] bg-cover bg-fixed">
      <div className="mb-3">
        <Ribbon text="Legacy of Martyrdom" />
      </div>

      <h1 className="text-center text-xl font-bold text-gray-900 mt-4">
        Shaheedi of Guru Tegh Bahadur Sahib Ji
      </h1>

      <img
        src={martyrImage}
        alt="Guru Tegh Bahadur Shaheedi"
        className="mt-4 w-full max-w-xs rounded-2xl shadow-md"
      />

      <div className="mt-4 bg-[#fee5bd] bg-opacity-80 rounded-2xl p-4 text-[0.97rem] leading-6 text-justify text-gray-900 max-w-md">
        <p className="mb-2">
          Guru Tegh Bahadur Sahib Ji, the ninth Sikh Guru undertook the supreme
          sacrifice for the protection of the most fundamental of human rights -
          the right of a person to freely practice his or her religion without
          interference or hindrance. In the modern times we tend to take this
          freedom for granted – but in 1675, millions of people were denied this
          basic right. There was forced conversion of religion, many thousands
          were killed for refusing to change their religion. The commitment by
          the Sikh Guru to protect and support the liberty of all the people of
          a country was unprecedented. This type of supreme sacrifice had never
          been recorded in human history. On May 25, 1675 in answer to an appeal
          of a large group of revered Kashmiri Pandits, Guru Tegh Bahadur Sahib
          Ji made the momentous decision to lay down his life if necessary to
          protect the rights of the Hindus.
        </p>
        <p>
          To bring to the attention of all human beings in greater India and to
          record in world history the barbaric ways of the Mughal Empire, Guru
          Tegh Bahadur Sahib Ji escalated the consciousness of the Sikh psyche
          to a newer level. It was now not acceptable for a God loving people to
          protect just their own kind, but it was the duty of all God loving
          people to protect the rights of all the people of God, no matter what
          their chosen religion may be.
        </p>
        <p className="mb-2">
          In the summer of 1675, the Guru along with some of his companions Bhai
          Mati Das, Bhai Sati Das and Bhai Dyal Das were finally brought to
          Delhi and asked to convert to Islam or else face death penalty. Guru
          Ji was also asked to perform a miracle. Guru Ji averred that he would
          rather sacrifice his life than give up his faith and his freedom or
          belief or perform a miracle. Thus, under Aurangzeb’s order Guru Ji and
          his companions were tortured. The Guru was chained and imprisoned in
          cage and was tortures in the most inhumane ways for five long days. In
          order to terrorise him further into submission, one his distinguished
          devotees Bhai Mati Das was sawn alive, another Bhai Dyal Das was
          boiled alive in a cauldron and the third Bha Sati Das was roasted
          alive before the Guru.
        </p>
        <p className="mb-2">
          Finally, The Guru himself was beheaded, under imperial warrant, in
          broad daylight, in the middle of a public square, the most prominent
          public place in Delhi, called Chandani Chowk on the charge that he was
          stumbling block in the spread of Islam in the Indian Subcontinent. The
          exact location of beheading is marked by Gurudwara Sis Ganj Sahib in
          Delhi.His martyrdom was yet another challenge to the Sikh conscience.
          It was then realized that there could be no understanding between an
          insensate power imbrued with blood and a proud people wedded to a life
          of peace with honour. The sacrifice roused the Hindus from their
          passive silence and gave them the fortitude to understand the power
          that comes from self-respect and sacrifice. Guru Tegh Bahadur thus
          earned the affectionate title of "Hind-di-Chadar" or the Shield of
          India.
        </p>
      </div>

      <div className="w-full max-w-4xl text-left mt-4">
        <div className="space-y-6">
          {[
            {
              name: "Bhai Mati Das Ji",
              img: matiDasImg,
              desc: `Bhai Mati Das Ji was executed along with Guruji at the Kotwali (police station) near the Sunehri Masjid in Chandni Chowk area of Old Delhi, under the express orders of emperor Aurangzeb.`,
            },
            {
              name: "Bhai Sati Das Ji",
              img: satiDasImg,
              desc: `Bhai Sati Das was tied to a pole and wrapped in cotton fibre. He was then set on fire by the executioner. He remained calm and peaceful and kept uttering Waheguru Gurmantar, while fire consumed his body.`,
            },
            {
              name: "Bhai Dayal Das Ji",
              img: dayalDasImg,
              desc: `Bhai Dayala was martyred at Chandni Chowk at Delhi on 24 November 1675 on account of his refusal to barter his faith. He was the third Sikh to be executed by the Mughals in November 1675 before the Martyrdom of Guru Tegh Bahadar.`,
            },
            {
              name: "Bhai Lakhi Shah Vanjara",
              img: lakhiShahImg,
              desc: `Bhai Lakhi Shah Vanjara was a devout Sikh who lived during the time of the ninth Sikh Guru, Guru Tegh Bahadur. He hailed from the Lobana community of Sikhs, who played an important role during the times of the Sikh Gurus. `,
            },
            {
              name: "Bhai Jaita Ji",
              img: jaitaImg,
              desc: `Bhai Jivan Singh (13 December 1649 - 22 December, 1705) was the name given to Bhai Jaita after he had received the rites of initiation at the hands of Guru Gobind Singh Ji on the day - 14 April, 1699 when the Khalsa was inaugurated.`,
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-[#fee5bd] rounded-2xl p-4 flex flex-col sm:flex-row items-center text-left shadow-md gap-4"
            >
              <img
                src={card.img}
                alt={card.name}
                className="w-[120px] h-[120px] object-cover rounded-xl"
              />

              <div className="flex flex-col justify-center">
                <div className="name bg-[#fdd59c] px-3 py-1 rounded-lg mb-2">
                  <h2 className="text-lg font-semibold text-black">
                    {card.name}
                  </h2>
                </div>

                <p className="text-[0.95rem] text-[#222] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
