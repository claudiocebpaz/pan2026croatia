export function AboutText() {
  return (
    <div className="text-gray-900 lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
      <h2 className="font-cinzel text-4xl font-semibold tracking-tight sm:text-5xl">
        Project Sanctuary Presents... Early Bird Prelaunch!
      </h2>
      <p className="font-quattrocento mt-6 text-xl/8">
        For six unforgettable days, Obonjan Island belongs entirely to us—an
        intimate sanctuary in Croatia where every moment is curated to celebrate
        presence, deep human connection, and the joy of unbridled freedom.
      </p>
      <p className="font-inter mt-6 text-lg/8 font-medium">
        From May 19 to May 25, 2026, the island is ours. Obonjan transforms into
        a playground of
        <span className="font-semibold text-yellow-600">
          {" "}
          music, movement, and epic performances
        </span>
        from world-class artists across every modality. Rituals of connection
        meet long table feasts, poolside mischief, and late-night adventures
        that blur the line between festival and family. This is Pan, a living
        experiment in what happens when strangers step off the grid and into
        something real.
      </p>

      <p className="font-inter mt-6 text-lg/8 font-medium">
        Project Sanctuary is not a club, it is a frequency. Here we reclaim
        <span className="font-semibold text-yellow-600">
          {" "}
          dance floors as sacred ground
        </span>{" "}
        and conversation as art. Phones stay in pockets. There are no
        spectators, no performances for the outside world— only the magic of
        being fully here.
      </p>

      <div className="font-inter mt-8 p-6 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg border-l-4 border-yellow-400">
        <p className="text-lg/8 font-medium italic text-gray-800">
          And the schedule is only a foundation. Every day and every night the
          island will surprise you. A hidden performance, a sunrise ceremony, a
          pop-up jam, a secret gathering in the forest— some you may stumble
          upon alone, others will pull the whole community into one electric
          heartbeat.
          <span className="font-semibold text-yellow-600">
            {" "}
            Nothing is fixed. Everything is alive.
          </span>
          Stay curious, stay open, and let yourself be carried.
        </p>
      </div>
      <div className="font-inter mt-6 text-base/7 space-y-4">
        <p className="font-semibold text-lg">Your Experience Includes</p>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li>Private transfers to and from the airport by luxury bus</li>
          <li>Private boat transfers between the port and Obonjan Island</li>
          <li>Daily yoga sessions to awaken the body</li>
          <li>Daily breathwork journeys to center the mind</li>
          <li>Daily sound healing journeys to restore and expand the spirit</li>
          <li>Pool parties that bring everyone together in the sun</li>
          <li>Community brunch each day to gather and connect</li>
          <li>Community dinners each evening under the Adriatic sky</li>
          <li>
            Engaging community moments — from inspired conversations to
            activities that spark new friendships
          </li>
          <li>Daily and nightly surprises that will inspire and astonish</li>
        </ul>

        <p className="font-semibold text-lg mt-6">Not Included</p>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li>Alcoholic beverages</li>
          <li>
            Optional adventures like jet skiing, scuba diving, and private boat
            rides
          </li>
        </ul>

        <p className="mt-6">
          Every ticket unlocks an invitation to interview for membership in
          Project Sanctuary Club, opening the door to future gatherings and a
          global circle of extraordinary humans, visionaries, and creators who
          come together in pursuit of beauty, generosity, and the highest
          expressions of human connection.
        </p>
      </div>
      <p className="font-inter mt-2 text-base/7">
        ✨ Welcome to the Obonjan Island Experience — where sanctuary meets
        celebration, and the Adriatic Sea becomes our stage for connection.
      </p>
      <div className="font-inter mt-6 rounded-md border border-yellow-400 bg-yellow-50 p-6 text-base/7">
        <h3 className="mb-2 text-2xl font-semibold italic">What is Pan?</h3>
        <p className="not-italic leading-relaxed text-gray-800">
          Pan, the Greek god of the wild, is closely linked to music through his
          creation of the pan flute (or syrinx), fashioned from reeds that were
          once the nymph Syrinx.
        </p>
        <p className="mt-3 not-italic leading-relaxed text-gray-800">
          His music is earthy and instinctive, less refined than Apollo’s but
          charged with emotion and spontaneity. Heard drifting through forests
          and fields, his melodies could enchant animals, and even spark
          dancing.
        </p>
        <p className="mt-3 not-italic leading-relaxed text-gray-800">
          So in a musical sense, Pan embodies the untamed, primal side of music,
          a direct channel to nature, feeling, and freedom.
        </p>
      </div>
      <p className="font-inter mt-8 text-base/7">
        Welcome to{" "}
        <span className="font-extrabold text-lg">Project Sanctuary.</span> 🏝️💛
      </p>
      <div className="mt-2 text-center sm:text-left grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Button linking to /program */}
        <a
          href="/program"
          className="mt-2 inline-block rounded-md bg-yellow-300 px-6 py-3 text-base font-medium text-black hover:bg-yellow-500 transition w-full text-center"
        >
          View the Program
          <span className="text-xl"> &rarr;</span>
        </a>
        {/* Button linking to /manifiesto */}
        <a
          href="/manifiesto"
          className="mt-2 inline-block rounded-md bg-gray-800 px-6 py-3 text-base font-medium text-white hover:bg-gray-600 transition w-full text-center"
        >
          Manifesto
          <span className="text-xl"> &rarr;</span>
        </a>
      </div>
    </div>
  );
}
