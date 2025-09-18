import DJTemplate from "./DJTemplate";

export default function SamathaKennedy() {
  return (
    <div className="w-full px-4">
      <DJTemplate
        name="Samantha Kennedy"
        subtitle="VIP Hospitality & Culinary Strategist"
        imageUrl="https://pub-256cbac8c7ba4219be4d35b225b48d92.r2.dev/samantha.jpeg"
        imageClassName="w-full max-w-full md:w-4/5 h-auto rounded shadow-lg object-cover"
        content={
          <p className="whitespace-pre-line">
            Samantha is a rising star in the world of{" "}
            <strong>high-end catering</strong> and{" "}
            <strong>event consulting</strong>, known for bringing{" "}
            <strong>bold flavours</strong>,{" "}
            <strong>striking presentation</strong>, and{" "}
            <strong>flawless execution</strong> to every project she touches.
            <br />
            <br />
            With a background catering for <strong>film sets</strong>,{" "}
            <strong>VIP private events</strong>, and{" "}
            <strong>luxury gatherings</strong>, she blends the precision of a{" "}
            <strong>private chef</strong> with the vision of a{" "}
            <strong>creative director</strong>. Her menus are always bespoke,
            on-trend, and designed to create a sense of theatre.{" "}
            <em>Fuel for the night, glow for the morning.</em> Expect vibe
            orientated food for hungry souls.
            <br />
            <br />
            For this seven-day celebration featuring{" "}
            <strong>world-class DJs</strong> and an{" "}
            <strong>elite guest list</strong>, Samantha is sourcing the finest
            ingredients, designing menus as vibrant as the event itself and
            leading a hand-picked team to deliver seamless service. Expect high
            energy, elevated style, and the kind of unforgettable dining moments
            that turn an amazing party into the party people talk about all
            year. <strong>Menus with style.</strong>{" "}
            <strong>Service with swagger.</strong>
          </p>
        }
      />
    </div>
  );
}
