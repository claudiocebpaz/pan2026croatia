import DJTemplate from "./DJTemplate";

export default function DjSarahHaywood() {
  return (
    <DJTemplate
      name="Sarah Haywood"
      subtitle={
        <>
          An <strong>internationally acclaimed DJ</strong> known for her
          masterful ability to blend songs across{" "}
          <strong>different decades and genres</strong>.
        </>
      }
      imageUrl="https://pub-256cbac8c7ba4219be4d35b225b48d92.r2.dev/SarahHaywood.jpeg"
      imageClassName="w-full max-w-full md:w-4/5 h-auto rounded shadow-lg object-cover"
      content={
        <>
          <p className="font-quattrocento mb-3 whitespace-pre-line">
            Her <em>genre-defying sets</em> have captivated audiences across{" "}
            <strong>exclusive venues</strong> and <strong>global stages</strong>
            , establishing her as a <strong>premier talent</strong> in the{" "}
            <strong>luxury event space</strong> through her sophisticated
            approach to <strong>sonic curation</strong>.
          </p>
          <p className="whitespace-pre-line">
            Having partnered with and opened for industry titans including{" "}
            <strong>Full Crate</strong>, <strong>Usher</strong>,{" "}
            <strong>Swizz Beatz</strong>, and <strong>Diplo</strong>,{" "}
            <strong>Sarah</strong> has proven her ability to command stages
            alongside music's biggest names.
          </p>
          <p className="mt-4 whitespace-pre-line">
            As <strong>co-host</strong> and <strong>sound designer</strong> of
            transformative <em>Leadership retreat experiences</em> on{" "}
            <strong>Sir Richard Branson's private island</strong>, she creates{" "}
            <em>extraordinary musical journeys</em> for the world's most{" "}
            <strong>discerning clientele</strong>.
          </p>
        </>
      }
    />
  );
}
