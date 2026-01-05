import { FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Hero() {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/background1.webp')" }}
    >
      <div className="absolute inset-0 bg-blue-400 opacity-80"></div>
      <div className="relative w-full max-w-4xl p-4 sm:p-8 bg-white bg-opacity-90 rounded-lg shadow-lg">
        <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between">
          <div className="w-24 h-24 sm:w-30 sm:h-30 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg mb-4 md:mb-0 md:order-2">
            <img
              src="julian.png"
              alt="Julian Wenger"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-auto md:mr-8 md:order-1">
            <div className="flex items-center justify-center md:justify-between mb-2 sm:mb-4">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black-900 mr-4">
                Julian Wenger :)
              </h1>

              <a
                href="https://www.linkedin.com/in/julian-wenger/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-blue-600 text-xl sm:text-2xl md:text-3xl hover:text-blue-800" />
              </a>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-black-700 mb-3 sm:mb-6 text-center md:text-left">
              LEAN Consultant & Civil Engineer
            </p>
            <div className="flex items-center justify-center md:justify-start mb-1 sm:mb-2">
              <MdPhone className="mr-2 text-black-600 text-sm sm:text-base md:text-lg" />
              <p className="text-sm sm:text-base md:text-lg text-black-700">
                +436766603317
              </p>
            </div>
            <div className="flex items-center justify-center md:justify-start mb-1 sm:mb-2">
              <MdEmail className="mr-2 text-black-600 text-sm sm:text-base md:text-lg" />
              <p className="text-sm sm:text-base md:text-lg text-black-700">
                julianwenger1991@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
