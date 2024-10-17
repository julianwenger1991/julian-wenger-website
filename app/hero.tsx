import { FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

export default function Hero() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/background1.webp')" }}>
      <div className="absolute inset-0 bg-blue-400 opacity-80"></div>
      <div className="relative w-full max-w-4xl p-8 bg-white bg-opacity-90 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-5xl font-bold text-black-900 mr-4">Julian Wenger</h1>
              
              <a href="https://www.linkedin.com/in/julian-wenger/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-600 text-3xl hover:text-blue-800" />
              </a>
            </div>
            <p className="text-xl text-black-700 mb-6">LEAN Consultant & Civil Engineer</p>
            <div className="flex items-center mb-2">
              <MdPhone className="mr-2 text-black-600" />
              <p className="text-lg text-black-700">+436766603317</p>
            </div>
            <div className="flex items-center mb-2">
              <MdEmail className="mr-2 text-black-600" />
              <p className="text-lg text-black-700">julianwenger1991@gmail.com</p>
            </div>
            <div className="flex space-x-4">
            </div>
          </div>
          <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
            <img
              src="julian.png"
              alt="Julian Wenger"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
