import DJTemplate from "./DJTemplate";

export default function DjMariePosa() {
  return (
    <DJTemplate
      name="Marie Posa"
      subtitle={
        "A dance floor full of strangers can feel connected through the vibration of music."
      }
      imageUrl="https://pub-256cbac8c7ba4219be4d35b225b48d92.r2.dev/marieposa.jpeg"
      imageClassName="w-full max-w-full md:w-4/5 h-auto rounded shadow-lg object-cover"
      content={
        <>
          <p className="whitespace-pre-line">
            <strong>Marie Posa</strong> is a <strong>DJ</strong> based in{" "}
            <strong>San Francisco</strong> and <strong>New York</strong>,
            renowned for her ability to craft <em>intentional vibes</em> through
            diverse, soulful flows from around the world.
            <br />
            <br />
            Growing up as a <strong>saxophone player</strong>, she was deeply
            influenced by <strong>jazz music</strong>, particularly the{" "}
            <em>spontaneous collaboration</em> and <em>improvisation</em> that
            define the genre.
            <br />
            <br />
            As a <strong>world traveler</strong>, Marie’s style is enriched by{" "}
            <strong>international influences</strong>, honed through
            collaborations with artists globally.
            <br />
            <br />
            With over a decade in the <strong>music industry</strong>, she
            transitioned from roles in <strong>management</strong> and{" "}
            <strong>operations</strong> to <strong>DJing</strong>, driven by a
            passion for music’s power to <em>connect people</em>.
          </p>
          <p className="mt-4 whitespace-pre-line">
            Marie’s debut year saw performances at the{" "}
            <strong>Art With Me Festival</strong> in <strong>Las Vegas</strong>{" "}
            and <strong>Perozah Beach Club</strong> in{" "}
            <strong>Costa Rica</strong>
            .<br />
            <br />
            She has since played at venues like <strong>
              Sanctuary
            </strong> in <strong>Rome, Italy</strong>, <strong>Gospel</strong>{" "}
            and <strong>Hearsay</strong> in <strong>Manhattan</strong>, and
            opened for notable artists including <strong>Mind Against</strong>,{" "}
            <strong>Damian Lazarus</strong>, <strong>Jan Blomqvist</strong>,{" "}
            <strong>Ben Klock</strong>, and <strong>Oliver Koletzki</strong>.
          </p>
        </>
      }
    />
  );
}
