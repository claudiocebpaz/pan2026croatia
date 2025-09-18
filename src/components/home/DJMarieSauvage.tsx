import DJTemplate from "./DJTemplate";

export default function MarieSauvage() {
  return (
    <div className="w-full px-4">
      <DJTemplate
        name="Marie Sauvage"
        subtitle="Franco-American Shibari Artist & Immersive Performer"
        imageClassName="w-full max-w-full md:w-8/10 h-auto rounded shadow-lg object-cover"
        imageUrl="https://pub-256cbac8c7ba4219be4d35b225b48d92.r2.dev/mariesauvage.jpg"
        content={
          <>
            <p>
              <strong>Marie Sauvage</strong> is a{" "}
              <strong>Franco-American shibari artist</strong> who has redefined
              this traditionally <em>male-dominated</em> art form through a
              distinctly <strong>feminine and empowering lens</strong>.<br />
              <br />
              Trained under <strong>Japanese rope master Hajime Kinoko</strong>,
              she brings <em>poetic</em> and <em>sensual intensity</em> to her{" "}
              <strong>immersive performances</strong>.
            </p>
            <p className="mt-4 whitespace-pre-line">
              Her unique style fuses <strong>shibari</strong> with{" "}
              <strong>visual arts</strong>, <strong>tantra</strong>, and{" "}
              <strong>hypnosis</strong>, using rope not only as a medium of{" "}
              <em>restraint</em> but as a tool for{" "}
              <strong>self-awareness</strong> and{" "}
              <strong>meditative exploration</strong>.<br />
              <br />
              She challenges cultural associations that limit shibari to BDSM,
              inviting audiences into a more <em>mindful</em> and{" "}
              <em>spiritual</em> experience.
            </p>
            <p className="mt-4 whitespace-pre-line">
              <strong>Marie</strong> has performed at prestigious venues such as
              the <strong>Palais de Tokyo</strong> in Paris and toured in cities
              like <strong>New York</strong> and <strong>Tokyo</strong>.<br />
              <br />
              Her <strong>inclusive approach</strong> and commitment to{" "}
              <strong>shifting perception</strong> have made shibari more{" "}
              <em>accessible</em> to a <strong>global audience</strong>.
            </p>
            <p className="mt-4 whitespace-pre-line">
              In addition to <strong>live shows</strong>, she offers{" "}
              <strong>private sessions</strong>,{" "}
              <strong>in-person workshops</strong>, and{" "}
              <strong>online tutorials</strong> for anyone curious about
              exploring this <em>transformative practice</em>.
            </p>
          </>
        }
      />
    </div>
  );
}
