import Navbar from "../components/navbar";
import Ribbon from "../components/ribbon";

export default function Contact() {
  return (
    <>
      <Navbar text="Contact Us" />
      <div
        style={{ fontFamily: "'Tiro Gurmukhi', serif" }}
        className="flex flex-col items-center px-4 pt-4 contact-bg min-h-screen"
      >
        <h2 className="heading text-xl font-bold text-center text-black my-4">
          Reach Out to Us
        </h2>

        <form className="glass-card w-full max-w-md contact-form p-5 rounded-2xl shadow-xl">
          <div className="mb-4">
            <label className="block text-black font-bold mb-1">Email ID:</label>
            <input
              type="email"
              placeholder="Please enter your email address"
              className="w-full px-4 py-2 rounded-full bg-[#fdd9a1]/60 focus:bg-[#fdd9a1] focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-black font-bold mb-1">Name:</label>
            <input
              type="text"
              placeholder="Please enter your name"
              className="w-full px-4 py-2 rounded-full bg-[#fdd9a1]/60 focus:bg-[#fdd9a1] focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-black font-bold mb-1">Phone No:</label>
            <input
              type="tel"
              placeholder="Please enter your phone number"
              className="w-full px-4 py-2 rounded-full bg-[#fdd9a1]/60 focus:bg-[#fdd9a1] focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-black font-bold mb-1">Query:</label>
            <input
              type="text"
              placeholder="Please enter your query"
              className="w-full px-4 py-2 rounded-xl bg-[#fdd9a1]/60 focus:bg-[#fdd9a1] focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-black font-bold mb-1">
              Suggestions:
            </label>
            <textarea
              placeholder="Please enter any suggestions"
              rows="4"
              className="w-full px-4 py-2 rounded-xl bg-[#fdd9a1]/60 focus:bg-[#fdd9a1] focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#FEE5BD] hover:bg-[#fdd9a1] text-black font-bold py-2 rounded-full transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
