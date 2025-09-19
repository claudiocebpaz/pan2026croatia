import { getRandomGlobalImage, ImageData } from "../../utils/ImageUtils";
import LogoImage from "../../assets/logosanctuary.webp";

const stats = [
  { name: "Days/Nights of celebration", value: "6" },
  { name: "Planned Activities", value: "40+" },
  { name: "Musical Sets", value: "20+" },
  { name: "Surprises", value: "Many" },
  { name: "New Friendships", value: "Countless" },
];

const randomImage: ImageData | null = getRandomGlobalImage();

export default function ActivitiesHeader() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24">
      {randomImage ? (
        <img
          alt={randomImage.alt}
          src={randomImage.src}
          className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
        />
      ) : (
        <div className="absolute inset-0 -z-10 bg-gray-800 flex items-center justify-center text-white">
          No Image Available
        </div>
      )}
      {/* Overlay con opacidad */}
      <div className="absolute inset-0 bg-black opacity-75 -z-10" />

      {/* Container: aligned across screens */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:mx-0 flex items-center gap-4">
          <img
            src={LogoImage}
            alt="Sanctuary Logo"
            className="h-16 sm:h-24 w-auto"
          />
          <h2 className="font-cinzel text-4xl font-bold tracking-tight text-white sm:font-semibold sm:text-5xl">
            A Sanctuary Celebration
          </h2>
        </div>
        <p className="font-quattrocento mt-8 text-lg font-medium text-pretty text-gray-100 sm:text-xl/8 sm:mx-auto sm:max-w-2xl lg:max-w-max">
          For six days a private island in Croatia becomes the heart of
          Sanctuary. The Adriatic surrounds us in turquoise silence, and every
          sunrise opens the door to wonder. Music drifts across the water,
          laughter rises from hidden paths, and the night sky becomes our
          cathedral.
        </p>
        <p className="font-quattrocento mt-8 text-lg font-medium text-pretty text-gray-100 sm:text-xl/8 sm:mx-auto sm:max-w-2xl lg:max-w-max">
          There are no filters and no feeds. Only presence. Only the joy of
          greeting a stranger who may become family, the freedom to dance
          beneath the stars, the courage to ask for a hug or to share silence.
          Meals become communion. Serendipity becomes our guide.
        </p>
        <p className="font-quattrocento mt-8 text-lg font-medium text-pretty text-gray-100 sm:text-xl/8 sm:mx-auto sm:max-w-2xl lg:max-w-max">
          Every corner of the island holds a secret waiting to be revealed. Each
          day unfolds like a story written in real time by those who gather.
          What we create together will live far beyond the shores we leave
          behind.
        </p>
        <p className="font-quattrocento mt-8 text-lg font-medium text-pretty text-gray-100 sm:text-xl/8 sm:mx-auto sm:max-w-2xl lg:max-w-max">
          This is the last semi public Sanctuary celebration. A closing chapter
          held in beauty and fire. An island fairytale of connection, play, and
          soul filled intimacy, offered once before the gates close and
          Sanctuary becomes fully private.
        </p>
        <p className="font-quattrocento mt-8 text-lg font-semibold font-stretch-75% text-pretty text-yellow-300 sm:text-xl/8 sm:mx-auto sm:max-w-2xl lg:max-w-max">
          You're not just attending a party. You're stepping into a fairytale of
          connection, laughter, and soul-filled celebration.
        </p>
        <div className="mx-auto mt-8 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="mt-12 grid grid-cols-1 gap-8 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="font-quattrocento text-base/7 text-gray-300">
                  {stat.name}
                </dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
