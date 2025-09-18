import { AboutText } from "./AboutText";
import AboutImages from "./AboutImages";

export default function About() {
  return (
    <div className=" isolate border-t border-gray-500 ">
      <div className="mt-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:min-w-full lg:flex-none lg:gap-y-8">
            {/* About Text Section */}
            <AboutText />
            {/* About Images Section */}
            <AboutImages />
          </div>
        </div>
      </div>
    </div>
  );
}
