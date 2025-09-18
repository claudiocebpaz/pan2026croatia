import { HashLink } from "react-router-hash-link";

// Configura el offset en píxeles
const CONFIGURABLE_OFFSET = -60;

// Función de scroll con timeout de 300ms para esperar a que el destino esté cargado
const scrollWithOffset = (el: HTMLElement) => {
  setTimeout(() => {
    const targetPosition =
      el.getBoundingClientRect().top + window.scrollY + CONFIGURABLE_OFFSET;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  }, 300);
};

export default function RoomsOverview() {
  return (
    <section className="border-t border-gray-500 bg-gray-950 text-white">
      <div className="bg-gray-950 p-8 max-w-7xl mx-auto mt-12">
        <h2 className="font-cinzel text-4xl font-bold mb-4">Rooms Overview</h2>
        <p className="font-quattrocento text-lg text-gray-300 mx-auto">
          Welcome to Château Paradis, a 16th-century estate nestled in a 22-acre
          wooded park. <br />
          With luxurious lounges, banquet halls, and accommodations for up to 91
          guests, this heritage venue blends historical elegance with modern
          comfort.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Single Rooms Overview */}
          <div className="border border-gray-700 rounded-lg p-6">
            <h3 className="font-quattrocento text-2xl font-semibold mb-4">
              Castle Rooms
            </h3>
            <p className="text-gray-300">
              The <span className="font-semibold">Castle Suites</span> offer a
              refined and peaceful retreat, each featuring{" "}
              <span className="font-semibold">
                elegant furnishings, ensuite bathrooms, and views of the
                historic parkland
              </span>
              .
            </p>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>
                🏡 Castle Suite Single - $10,000
                <span className="ml-2 px-1.5 py-0.5 text-xs font-medium text-red-500 border border-red-500 rounded">
                  Sold Out
                </span>
              </li>
              <li>
                🌿 Castle Shared - $10,000 / Person
                <span className="ml-2 px-1.5 py-0.5 text-xs font-medium text-yellow-300 border border-yellow-300 rounded">
                  One Room Left!
                </span>
              </li>
            </ul>

            <HashLink
              smooth
              to="/rooms#single-rooms"
              scroll={scrollWithOffset}
              className="block mt-6 text-gray-100 hover:underline"
            >
              View Castle Suites →
            </HashLink>
          </div>

          {/* Double Rooms Overview */}
          <div className="border border-gray-700 rounded-lg p-6">
            <h3 className=" font-quattrocento text-2xl font-semibold mb-4">
              Cottage Rooms
            </h3>
            <p className="text-gray-300">
              Ideal for friends or groups, our{" "}
              <span className="font-semibold">shared rooms</span> are part of
              the estate’s spacious lodgings, including the large group cottage
              and charming lodges. Each space offers{" "}
              <span className="font-semibold">
                comfortable bedding, modern amenities, and a peaceful
                countryside setting
              </span>
              .
            </p>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>
                🌿 Double, Triple and Quad $3,000 / person
                <span className="ml-2 px-1.5 py-0.5 text-xs font-medium text-yellow-300 border border-yellow-300 rounded">
                  One Room Left!
                </span>
              </li>
            </ul>

            <HashLink
              smooth
              to="/rooms#double-rooms"
              scroll={scrollWithOffset}
              className="block mt-6 text-gray-100 hover:underline"
            >
              View Shared Rooms →
            </HashLink>
          </div>

          {/* Tent Overview */}
          <div className="md:col-span-2 border border-gray-700 rounded-lg p-6">
            <h3 className="font-quattrocento text-2xl font-semibold mb-4 text-yellow-300">
              Shared Glamping Experience
            </h3>
            <p className="text-gray-300">
              Embrace the magic of outdoor living with our Shared Tents — a
              unique glamping experience that combines rustic charm with
              luxurious comfort, all within the serene 22-acre estate.
            </p>

            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-200 mb-2">
                Premium:
              </h4>
              <ul className="space-y-1 text-gray-400 list-disc list-inside">
                <li>1–2 people – $3,500</li>
                <li>3 people – $4,500</li>
                <li>4 people – $5,500</li>
              </ul>
              <p className="mt-2 text-gray-400">
                Tailor your stay with flexible sleeping arrangements: 1 double
                bed, 2 double beds, 2 doubles + 2 singles, or 4 singles.
              </p>
            </div>

            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-200 mb-2">
                Standard:
              </h4>
              <ul className="space-y-1 text-gray-400 list-disc list-inside">
                <li>4 people – $3,500</li>
                <li>5 people – $4,500</li>
                <li>6 people – $5,500</li>
              </ul>
              <p className="mt-2 text-gray-400">
                Designed for comfort and versatility: 2 double beds, 1 double +
                4 singles, or up to 6 single beds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
