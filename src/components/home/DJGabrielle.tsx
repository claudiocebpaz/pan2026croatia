import DJTemplate from "./DJTemplate";

export default function GabrielleManuel() {
  return (
    <DJTemplate
      name="Gabrielle Manuel"
      subtitle="Sound Bath and Performing Arts Goddess"
      imageUrl="https://pub-256cbac8c7ba4219be4d35b225b48d92.r2.dev/gabrielle.jpeg"
      imageClassName="w-full md:w-4/5 h-auto rounded shadow-lg object-cover"
      content={
        <>
          <p className="font-quattrocento mb-3 whitespace-pre-line">
            <strong>Gabrielle Manuel</strong> is a{" "}
            <strong>creative performer</strong> who loves to express the
            different facets of herself through <strong>dance</strong>,{" "}
            <strong>costuming</strong>, <strong>makeup</strong>, and the{" "}
            <strong>healing arts</strong>.<br />
            <br />
            She has spent years dancing and vibe curating at some of Chicago's
            most lively events for artists such as{" "}
            <strong>Francis Mercier</strong>, <strong>Green Velvet</strong>,{" "}
            <strong>Sabo</strong>, <strong>Nitefreak</strong>,{" "}
            <strong>Double Touch</strong>, and many more.
            <br />
            <br />
            Everything she creates is a <em>channeled expression</em> of herself
            brought to life through <strong>movement</strong> and{" "}
            <strong>sound</strong>.
          </p>
          <p className="font-quattrocento mb-3 whitespace-pre-line">
            Additionally, she is a certified{" "}
            <strong>Reiki Master practitioner</strong>,{" "}
            <strong>New Paradigm MDT energy healer</strong>,{" "}
            <strong>Heart Math Mentor</strong>, and{" "}
            <strong>professional sound and vibrational therapist</strong>.<br />
            <br />
            She is passionate about creating a <strong>safe</strong> and{" "}
            <strong>fun environment</strong> where people can freely express
            their <em>authentic selves</em> on the <strong>dance floor</strong>{" "}
            and beyond.
          </p>
        </>
      }
    />
  );
}
