import DJTemplate from "./DJTemplate";

export default function DJShelleySmith() {
  return (
    <DJTemplate
      name="Shelley Smith"
      subtitle="Advanced Somatic Breathwork Practitioner"
      imageUrl="https://pub-256cbac8c7ba4219be4d35b225b48d92.r2.dev/shelley.jpeg"
      imageClassName="w-full max-w-full md:w-9/10 h-auto rounded shadow-lg object-cover"
      content={
        <>
          <div className="text-lg leading-relaxed">
            <p className="mb-6">
              <strong>Shelley</strong> is an{" "}
              <em>Advanced Somatic Breathwork Practitioner</em>.<br />
              <br />
              She is passionate about the{" "}
              <strong>medicine of our breath</strong> and the{" "}
              <strong>somatic practice</strong> to get us{" "}
              <strong>back into the body</strong> and{" "}
              <strong>out of the mind</strong> to{" "}
              <strong>process our emotions</strong> and{" "}
              <strong>lead us back to our intuition</strong>.<br />
              <br />
              She is the founder of{" "}
              <span className=" font-bold">Joy Juice</span>, a movement to
              inspire all beings to tap into the things they love. In other
              words, to keep taking sips of their joy juice.
            </p>
            <p className="mt-6">
              <a
                href="http://www.joyjuice.com"
                target="_blank"
                className="text-yellow-500 underline font-bold hover:text-yellow-700"
              >
                www.joyjuice.com
              </a>
            </p>
          </div>
        </>
      }
    />
  );
}
