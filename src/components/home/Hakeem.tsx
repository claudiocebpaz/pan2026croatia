import DJTemplate from "./DJTemplate";

export default function HakeemBourne() {
  return (
    <DJTemplate
      name="HAKEEM BOURNE MCFARLANE"
      subtitle="SPEAKER, AUTHOR AND FOUNDER OF CHOOSE YOURSELF MOVEMENT"
      imageUrl="https://pub-256cbac8c7ba4219be4d35b225b48d92.r2.dev/hakeem.jpg"
      imageClassName="w-full max-w-full md:w-9/10 h-auto rounded shadow-lg object-cover"
      content={
        <>
          <div className="text-lg leading-relaxed">
            <p className="mb-6">
              Hakeem Bourne McFarlane is a motivational speaker, author, and
              founder of the Choose Yourself movement. A former standout athlete
              whose life was shaped by both triumphs and setbacks, Hakeem turned
              his personal challenges, including time behind bars, into a
              message of resilience, accountability, and self- discovery.
            </p>
            <p className="mb-6">
              Through his book{" "}
              <em>
                Choose Yourself to Be Chosen: G.Y.M – Grow Your Mind with
                Innercise
              </em>
              , Hakeem shares the tools and mindset that helped him rebuild his
              life and inspire others to rise above adversity. His work blends
              raw storytelling with practical strategies, encouraging audiences
              to strip away limiting beliefs, embrace authenticity, and unlock
              their true potential.
            </p>
            <p className="mb-6">
              Today, Hakeem speaks to communities, organizations, and
              individuals across the country, motivating people to take
              ownership of their journey and choose themselves in order to
              create the life they were meant to live.
            </p>
          </div>
        </>
      }
    />
  );
}
