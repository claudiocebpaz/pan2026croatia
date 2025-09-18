// src/components/HostSubhi.tsx

export default function HostSubhi() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-12">
      {/* Imagen para mobile: visible solo en mobile */}
      <img
        src="https://pub-858a9865baad48afa914044f2883a089.r2.dev/img/hosts/subhibarakat.jpg"
        alt="Subhi Barakat"
        className="w-full md:hidden h-auto rounded shadow-lg object-cover"
      />

      <div className="md:w-2/3">
        <h3 className="font-cinzel text-2xl font-semibold">Subhi Barakat</h3>
        <p className="font-quattrocento italic mb-3">
          Founder of Project Sanctuary
        </p>
        <p>
          <span className="font-semibold">Subhi Barakat</span> is the visionary
          founder of
          <span className="font-semibold"> Project Sanctuary</span>, a private
          community and immersive retreat experience designed to foster deep
          human connection, transformation, and presence. With a background in
          <span className="font-semibold">
            {" "}
            luxury real estate, super connecting, and community building
          </span>
          , Subhi has dedicated his life to curating extraordinary spaces—both
          physical and emotional—where individuals can reconnect with themselves
          and others in meaningful, authentic ways.
        </p>
        <p className="mt-4">
          Rooted in his passion for
          <span className="font-semibold">
            {" "}
            re-humanization, genuine human connection, and intentional living
          </span>
          , Subhi created
          <span className="font-semibold"> Project Sanctuary</span> as a
          response to a world increasingly disconnected from presence and
          genuine interaction. His work is built on the pillars of
          <span className="font-semibold">
            {" "}
            safety, consent, privacy, and transformation
          </span>
          , ensuring that every participant experiences a space free from
          external noise, social media, and performative interactions.
        </p>
        <p className="mt-4">
          Through carefully designed events and retreats in the most
          breathtaking settings, and an exclusive global network, Subhi invites
          those who seek something deeper— a return to presence, a rekindling of
          purpose, and an opportunity to co-create a sanctuary where the world's
          most extraordinary minds and souls come together.
        </p>
      </div>

      {/* Imagen para desktop: visible solo en pantallas medianas y superiores */}
      <img
        src="https://pub-858a9865baad48afa914044f2883a089.r2.dev/img/hosts/subhibarakat.jpg"
        alt="Subhi Barakat"
        className="hidden md:block md:w-1/4 h-auto rounded shadow-lg object-cover"
      />
    </div>
  );
}
