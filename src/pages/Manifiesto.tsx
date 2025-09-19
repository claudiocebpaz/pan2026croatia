// src/pages/Manifiesto.tsx
import SEO from "../components/shared/SEO";
import Logo from "../assets/logosanctuary.png";

function Manifiesto() {
  return (
    <>
      <SEO
        title="Manifesto - PAN Sanctuary"
        description="The Project Sanctuary Manifesto - A ceremonial invocation for our transformative wellness retreat in Croatia"
        keywords="manifesto, sanctuary, retreat, wellness, community, transformation, Croatia"
      />

      <div className="min-h-screen bg-black py-10">
        <div className="max-w-4xl mx-auto px-6">
          {/* Logo Section */}
          <div className="flex justify-center mb-6">
            <img
              src={Logo}
              alt="Project Sanctuary Logo"
              className="h-auto w-3/5 max-w-xs"
            />
          </div>

          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-cinzel font-bold text-white mb-6">
              The Project Sanctuary Manifesto
            </h1>
            <p className="text-xl text-amber-400 font-cinzel italic mb-4">
              A Ceremonial Invocation
            </p>
            <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
          </div>

          {/* Content Section */}
          <div className="prose prose-lg max-w-none text-gray-200">
            <div className="bg-gray-950 font-inter rounded-lg shadow-xl p-4 md:p-12 space-y-8 border border-gray-800">
              <p className="text-lg leading-relaxed">
                Welcome. Welcome to Sanctuary.
                <br />
                <br />
                When you stepped off the boat and placed your feet upon this
                island, you crossed a threshold.
                <br />
                Behind you, the world kept spinning in its endless rhythm.
                <br />
                Here, the rhythm slows.
                <br />
                Here, we create a new way of being.
              </p>

              <p className="text-lg leading-relaxed font-semibold text-amber-400">
                This is Sanctuary.
              </p>

              <p className="text-lg leading-relaxed">
                For six days, this island is not simply a place.
                <br />
                It is a world within a world.
                <br />
                It belongs to us and only us.
                <br />
                It is entrusted to our care, our imagination, and our love.
              </p>

              <p className="text-lg leading-relaxed font-semibold text-amber-400">
                This is Sanctuary.
              </p>

              <p className="text-lg leading-relaxed">
                Here, presence is our wealth.
                <br />
                We put down our screens.
                <br />
                We lift up our eyes.
                <br />
                We offer our attention, our breath, our laughter, our play.
              </p>

              <p className="text-lg leading-relaxed font-semibold text-amber-400">
                This is Sanctuary.
              </p>

              <p className="text-lg leading-relaxed">
                Here, privacy is sacred.
                <br />
                Our stories are not for the marketplace.
                <br />
                They are planted as seeds of trust.
                <br />
                They live only in the hearts of those who were here to witness.
              </p>

              <p className="text-lg leading-relaxed font-semibold text-amber-400">
                This is Sanctuary.
              </p>

              <p className="text-lg leading-relaxed">
                Here, consent is devotion.
                <br />
                A yes is golden.
                <br />
                A boundary is a blessing.
                <br />
                Connection is born of respect and care.
              </p>

              <p className="text-lg leading-relaxed font-semibold text-amber-400">
                This is Sanctuary.
              </p>

              <p className="text-lg leading-relaxed">
                Here, we are equal.
                <br />
                No titles, no hierarchies, no masks.
                <br />
                We meet one another barefoot, at the table, by the fire, beneath
                the stars.
              </p>

              <p className="text-lg leading-relaxed font-semibold text-amber-400">
                This is Sanctuary.
              </p>

              <p className="text-lg leading-relaxed">
                Here, the island is our temple.
                <br />
                The olive trees, the stones, the sea — all alive with memory and
                spirit.
                <br />
                We walk gently. We care deeply. We leave no trace but our songs.
              </p>

              <p className="text-lg leading-relaxed font-semibold text-amber-400">
                This is Sanctuary.
              </p>

              <p className="text-lg leading-relaxed">
                Here, contribution is celebration.
                <br />
                No spectators, only participants.
                <br />
                Each gift enriches the circle.
                <br />
                Each voice strengthens the whole.
              </p>

              <p className="text-lg leading-relaxed font-semibold text-amber-400">
                This is Sanctuary.
              </p>

              <p className="text-lg leading-relaxed">
                Here, joy is sacred.
                <br />
                We dance until sunrise.
                <br />
                We gather at the pool in laughter.
                <br />
                We sing with voices raw beneath the moon.
                <br />
                Joy, play, and laughter are holy.
              </p>

              <p className="text-lg leading-relaxed font-semibold text-amber-400">
                This is Sanctuary.
              </p>

              <p className="text-lg leading-relaxed">
                Here, connection is everything.
                <br />
                Do not be afraid to meet someone new.
                <br />
                Do not be afraid to ask for a hug.
                <br />
                Do not be afraid to say hello.
                <br />
                The circle waits for you to step inside.
              </p>

              <p className="text-lg leading-relaxed font-semibold text-amber-400">
                This is Sanctuary.
              </p>

              <p className="text-lg leading-relaxed">
                And when the six days close, Sanctuary does not end.
                <br />
                The ferry may carry us across the waters, but Sanctuary travels
                with us.
                <br />
                Into our friendships.
                <br />
                Into our families.
                <br />
                Into our work.
                <br />
                Into our world.
              </p>

              <p className="text-lg leading-relaxed font-semibold text-amber-400">
                This is Sanctuary.
              </p>

              <p className="text-lg leading-relaxed">
                Project Sanctuary is not an event.
                <br />
                It is a way of being.
                <br />
                It is our remembering.
                <br />
                It is our future.
              </p>

              <p className="text-lg leading-relaxed font-semibold text-amber-400">
                This is Sanctuary.
              </p>

              <p className="text-lg leading-relaxed">
                So we begin.
                <br />
                So we remember.
                <br />
                So we celebrate.
              </p>

              <p className="text-lg leading-relaxed font-semibold text-amber-400 text-center mt-12">
                Welcome home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Manifiesto;
