export function AboutText() {
  return (
    <div className="text-gray-900 lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
      <h2 className="font-cinzel text-4xl font-semibold tracking-tight sm:text-5xl">
        Six-day Project Sanctuary Community Experience
      </h2>
      <p className="font-quattrocento mt-6 text-xl/8">
        A six-day community experience unlike any other—set on the stunning
        Obonjan Island, Croatia, curated to celebrate presence, human
        connection, and joyful freedom.
      </p>
      <p className="font-inter mt-6 text-base/7">
        From Tuesday, May 19 to Tuesday, May 26, 2026, join{" "}
        <span className="font-semibold">Subhi Barakat</span> and the
        <span className="font-semibold"> Project Sanctuary community</span> for
        a week of
        <span className="font-semibold">
          {" "}
          music, movement, connection rituals, magical meals, and intentional
          play
        </span>
        . This is our "Pan" event—an evolving experiment in building conscious
        community through celebration.
      </p>
      <p className="font-inter mt-6 text-base/7">
        Project Sanctuary isn't a club you join—it's a vibration you share. We
        believe in reclaiming spaces for dance, for depth, and for joy, away
        from the noise of social media and outside validation. No
        cinematographers here—just humans, hearts open, feet moving.
      </p>
      <div className="font-inter mt-6 text-base/7 space-y-4">
        <p className="font-semibold text-lg">Your Experience Includes</p>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li>Private transfers to and from the airport by luxury bus</li>
          <li>Private boat transfers between the port and Obonjan Island</li>
          <li>Daily yoga sessions to awaken the body</li>
          <li>Daily breathwork journeys to center the mind</li>
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
          Every ticket unlocks an opportunity to interview for membership in
          <span className="font-semibold"> Project Sanctuary Club</span>,
          opening the door to future gatherings and a global community built on
          connection.
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
          His music is earthy and instinctive—less refined than Apollo’s, but
          charged with emotion and spontaneity. Heard drifting through forests
          and fields, his melodies could enchant animals, and even spark
          dancing.
        </p>
        <p className="mt-3 not-italic leading-relaxed text-gray-800">
          So in a musical sense, Pan embodies the untamed, primal side of
          music—a direct channel to nature, feeling, and freedom.
        </p>
      </div>
      <p className="font-inter mt-8 text-base/7">
        Welcome to{" "}
        <span className="font-extrabold text-lg">Project Sanctuary.</span> 🏝️💛
      </p>
      <div className="mt-2 text-center sm:text-left">
        {/* Button linking to /program */}
        <a
          href="/program"
          className="mt-2 inline-block rounded-md bg-yellow-300 px-6 py-3 text-base font-medium text-black hover:bg-yellow-500 transition"
        >
          View the Program
          <span className="text-xl"> &rarr;</span>
        </a>
      </div>
    </div>
  );
}
