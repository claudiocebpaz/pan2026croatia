import DJTemplate from "./DJTemplate";

export default function DjDoubleTouch() {
  return (
    <DJTemplate
      name="Double Touch"
      subtitle={
        <>
          <strong>Ambient Soundscapes</strong> to <strong>Melodic House</strong>
        </>
      }
      imageUrl="https://pub-256cbac8c7ba4219be4d35b225b48d92.r2.dev/doubletouch.jpeg"
      imageClassName="w-full h-auto rounded shadow-lg object-cover"
      content={
        <>
          <p className="whitespace-pre-line">
            <strong>Double Touch</strong> is a{" "}
            <strong>live electronic duo</strong> collaboration between{" "}
            <strong>
              Sydney/Los Angeles-based Classical Pianist/Composer Van-Anh Nguyen
            </strong>{" "}
            and <strong>DJ/Drummer/Producer Mark Olsen</strong>.<br />
            <br />
            Despite their distinct individual careers, they blend their two
            worlds together to form a <em>unique mix</em> of{" "}
            <strong>acoustic melodies</strong>, <strong>percussion</strong>, and{" "}
            <strong>electronic sounds</strong>.<br />
            <br />
            Ranging from <strong>ambient soundscapes</strong> to{" "}
            <strong>Organic</strong>, <strong>Latin</strong>, and{" "}
            <strong>Afro House</strong>, Double Touch weave their{" "}
            <strong>musicianship</strong>, <strong>virtuosity</strong>, and{" "}
            <strong>contagious energy</strong> into their{" "}
            <strong>live performances</strong>.
          </p>
          <p className="mt-4 whitespace-pre-line">
            <strong>Double Touch</strong> are official{" "}
            <strong>All Day I Dream Artists</strong> with multiple releases and
            performances at <strong>All Day I Dream events</strong> globally.
            <br />
            <br />
            Their shows are a unique blend of a{" "}
            <strong>traditional DJ set</strong> and{" "}
            <strong>live performance</strong>, adding <strong>live keys</strong>{" "}
            and <strong>drums</strong>, <em>improvising</em> and creating{" "}
            <em>new directions</em> in their music during their{" "}
            <strong>live sets</strong>.<br />
            <br />
            The <strong>synergy</strong> and <strong>connection</strong> between
            the two results in a <em>unique experience</em> for listeners and
            concert goers alike.
          </p>
        </>
      }
    />
  );
}
