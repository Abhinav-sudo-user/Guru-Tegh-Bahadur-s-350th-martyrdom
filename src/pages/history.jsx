import Ribbon from "../components/ribbon";
import guruImage from "./history_photo.png"; // Keep this name as-is
import khandaIcon from "./khanda.png"; // Keep this name as-is

export default function History() {
  const timeline = [
    "Early Life of Guru Tegh Bahadur Sahib Ji",
    "Guru Tegh Bahadur Sahib Ji becomes Ninth Guru",
    "Visit to Harmandir Sahib",
    "Mission in the Punjab",
    "Mission to the East",
    "Help of Gobind Rai (Future Guru Gobind Singh Ji)",
    "Return to Punjab",
    "Oppression by the Mughals under Aurangzeb",
    "Guru Tegh Bahadur Ji arrested",
    "Gobind Rai (Guru Gobind Singh Ji) becomes the Tenth Guru",
    "Journey to Martyrdom",
    "Guru Tegh Bahadur Sahib Ji’s Journey to Heaven",
  ];

  return (
    <div className="history-page">
      <Ribbon text="History & Timeline" />

      <img
        src={guruImage}
        alt="Guru Tegh Bahadur Ji"
        className="history-image"
      />

      <div className="history-overview">
        <h2 className="section-title">
          Guru Tegh Bahadur Ji: A Concise Overview
        </h2>

        <p className="mb-2">
          Guru Tegh Bahadur Ji (Wednesday, April 18, 1621 – Wednesday, November
          24, 1675), revered as Srisht-di-Chadar (Protector of humanity), was
          the ninth Guru of the Sikhs. He became Guru on 16 April 1664,
          succeeding his grand-nephew and the eighth Guru, Guru Har Krishan Ji.
        </p>
        <p className="mb-2">
          A poet, thinker, and warrior, Guru Tegh Bahadur Ji continued the
          spiritual legacy of Guru Nanak Dev Ji and the earlier Sikh Gurus. He
          wrote 116 hymns addressing topics like the nature of God, human
          attachments, dignity, service, and deliverance, which are included in
          the sacred Sri Guru Granth Sahib Ji.
        </p>
        <p className="mb-2">
          Guru Ji traveled throughout the Indian subcontinent to spread Sikh
          teachings and established new preaching centers. He founded Chak-Nanki
          in Punjab, which was later developed into the city of Sri Anandpur
          Sahib by Guru Gobind Singh Ji.
        </p>
        <p className="mb-2">
          In May 1675, Hindu Pandits from Kashmir sought Guru Ji’s help against
          forced conversions to Islam under the Mughal rulers. Guru Tegh Bahadur
          Ji defended religious freedom, refused to convert to Islam himself,
          and was publicly executed by beheading in Delhi on Emperor Aurangzeb’s
          orders.
        </p>
        <p>
          Gurdwara Sis Ganj Sahib and Gurdwara Rakab Ganj Sahib in Delhi now
          mark the sites of his beheading and cremation. Three Sikhs—Bhai Mati
          Das, Bhai Sati Das, and Bhai Dyal Das—were also executed with him.
        </p>
      </div>

      <div className="timeline-section">
        <h2 className="section-title">
          The Complete Timeline of <br />
          Guru Tegh Bahadur Sahib Ji
        </h2>

        <div className="timeline-list">
          {timeline.map((event, index) => (
            <div key={index} className="timeline-item">
              <img src={khandaIcon} alt="Khanda" className="sikh-icon large" />
              <div className="timeline-card">{event}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
