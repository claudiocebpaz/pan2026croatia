import { ImageLibrary } from "../../utils/ImageUtils";
import SanctuaryImage from "./SanctuaryImage";
// import GoogleMap from "./GoogleMap";

const SanctuaryOverviewSection = () => {
  const images = ImageLibrary.getImages("sanctuary");

  return (
    <section className="overflow-hidden bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-8">
        <h2 className="font-cinzel text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Welcome to Obonjan Island
        </h2>
        <p className="font-quattrocento mt-2 mb-4 text-lg text-gray-600">
          Nestled in the Šibenik Archipelago in Dalmatia, Obonjan Island is
          Croatia's only relaxing island resort. This isn't just a
          destination—it's a whole world: community, connection, and island
          paradise energy.
        </p>
        <p className="mt-6 text-gray-600">
          The island spans 136 acres and offers space for 866 guests in
          exclusive glamping accommodations including Island Homes, Lodges, and
          O-Tents. You'll dance, laugh, rest, and reconnect in spaces surrounded
          by the warm waters of the Adriatic Sea, secluded enough to escape the
          stresses of everyday life.
        </p>
        <p className="mt-6 text-gray-600 mb-4">
          From the rocky beaches to the outdoor seawater swimming pool and
          open-air terraces, every corner of Obonjan is designed for presence
          and relaxation. It's not just beautiful—it's intentional. This is your
          sanctuary for the week.
        </p>
        <SanctuaryImage />
        <p className="mt-6 text-gray-600">
          The resort features two main rocky beaches and many rustic beaches
          around the island, perfect for swimming and sunbathing. The outdoor
          seawater swimming pool comes with parasols and lounging terraces for
          ultimate relaxation.
        </p>
        <p className="mt-6 text-gray-600">
          For dining and entertainment, Obonjan offers 2 restaurants serving
          fresh local cuisine, 3 bars for socializing, and 1 pizzeria for casual
          meals. All accommodations are air-conditioned and include free WiFi
          for all guests.
        </p>
        <p className="mt-6 text-gray-600">
          Located just 20 minutes from the mainland via speedboat, Obonjan
          provides the perfect escape from traffic and city rush. The island is
          pet-friendly, has medical staff always available, and offers tap water
          that is safe to drink.
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
            More than a Resort.
          </span>
          <br />
          This is where the dance floor meets the sea and the vibes are
          unmatched.
        </p>
        <p className="mt-6 text-gray-600">
          <span className="text-2xl text-black font-semibold font-quattrocento">
            Made for Sanctuary.
          </span>
          <br />
          No phones. No clout. No distractions. Just you, 866 beautiful humans,
          and an island that invites you to fully arrive. Obonjan is the
          container—what happens inside is up to us.
        </p>
      </div>
      {/* <GoogleMap /> */}
    </section>
  );
};

export default SanctuaryOverviewSection;
