import Image from "next/image";
import SocialLinks from "./social_links";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 md:p-16 lg:p-24 font-sans">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <main className="flex flex-col items-start">
          <div className="mb-6">
            <p className="text-xl font-light">Hi,</p>
            <p className="text-xl font-light">I bims</p>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            Miriam
            <br />
            Baumgartner
          </h1>
        </main>
        <div className="flex flex-col items-center">
          <Image
            src="/miri.jpg"
            alt="Miriam Baumgartner"
            width={300}
            height={300}
            className="rounded-lg shadow-xl mb-4"
          />
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
