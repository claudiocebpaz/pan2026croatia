import { ImageLibrary } from "../../utils/ImageUtils";
import SanctuaryImage from "./SanctuaryImage";
import CastleLocation from "./CastleLocation";
// import GoogleMap from "./GoogleMap";

const SanctuaryOverviewSection = () => {
  const images = ImageLibrary.getImages("sanctuary");

  return (
    <section className="overflow-hidden bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-8">
        <h2 className="font-cinzel text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Welcome to the Castle
        </h2>
        <p className="font-quattrocento mt-2 mb-4 text-lg text-gray-600">
          Nestled on 22 acres of lush woodland, Château Paradis is the private
          sanctuary for Subhi’s Birthday Extravaganza. This isn’t just a
          party—it’s a whole world: community, connection, and castle-core
          energy.
        </p>
        <CastleLocation />
        <p className="mt-6 text-gray-600">
          The estate holds space for 91 guests to sleep onsite in beautifully
          restored 16th-century rooms, cozy lodges, and a massive
          air-conditioned cottage. You’ll dance, laugh, rest, and reconnect in
          spaces once home to poets, philosophers, and now—you.
        </p>
        <p className="mt-6 text-gray-600 mb-4">
          From the grand banquet hall to the heated pool and open-air terraces,
          every corner of the château is designed for presence. It’s not just
          beautiful—it’s intentional. From Subhi hugs to starlit sound baths,
          this is your home for the week.
        </p>
        <SanctuaryImage />
        <p className="mt-6 text-gray-600">
          The ground floor features two lounges, two dining rooms, a large
          kitchen, and a grand banquet hall for up to 120 seated guests. A Pool
          Hall accommodates an additional 60 seated guests. Bedrooms and
          bathrooms are spread across the upper floors, all tastefully decorated
          with 19th-century charm and modern touches.
        </p>
        <p className="mt-6 text-gray-600">
          The estate includes a modern air-conditioned cottage with space for 44
          guests in 12 bedrooms, an adjoining 3-bedroom apartment, and two
          charming lodges. In total, it comfortably sleeps up to 91 guests.
        </p>
        <p className="mt-6 text-gray-600">
          Outdoors, enjoy a brand new heated pool, a white stone terrace with
          loungers, and access to the Charentes River for canoeing, kayaking,
          and more. The château’s wooded park is ideal for strolls, games, and
          peaceful moments.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-2 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {images.map((image) => (
            <div key={image.id} className="relative w-full">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-contain rounded shadow-md"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-6">
        <p className="mt-6 text-gray-600">
          <span className="text-2xl text-black font-semibold font-quattrocento">
            More than a Venue.
          </span>
          <br />
          This is where the dance floor is sacred and the vibes are unmatched.
        </p>
        <p className="mt-6 text-gray-600">
          <span className="text-2xl text-black font-semibold font-quattrocento">
            Made for Sanctuary.
          </span>
          <br />
          No phones. No clout. No distractions. Just you, 400 beautiful humans,
          and a place that invites you to fully arrive. Château Paradis is the
          container—what happens inside is up to us.
        </p>
      </div>
      {/* <GoogleMap /> */}
    </section>
  );
};

export default SanctuaryOverviewSection;