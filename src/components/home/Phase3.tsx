import DJTemplate from "./DJTemplate";

export default function Phase3() {
  return (
    <DJTemplate
      name="Phase 3 Announcements"
      subtitle={
        <>
          <strong>🌊 The third wave approaches.</strong>
        </>
      }
      imageUrl="https://pub-256cbac8c7ba4219be4d35b225b48d92.r2.dev/phase3.jpeg"
      content={
        <>
          <p className="whitespace-pre-line">
            It moves beneath the surface, unseen, gathering force.
          </p>
          <p className="mt-4 whitespace-pre-line">
            On Obonjan Island the air is shifting. Whispers ripple through the
            pines, echoes travel across the sea, and something extraordinary
            stirs in the night.
          </p>
          <p className="mt-4 whitespace-pre-line">
            ✨ Phase 3 is not just another announcement—it is the unveiling of
            what has been waiting, the hidden threads now ready to reveal
            themselves.
          </p>
          <p className="mt-4 whitespace-pre-line">
            Those who have been listening will feel it first.
            <br />
            Those who have been waiting will understand.
            <br />
            Those who arrive will never be the same.
          </p>
          <p className="mt-4 whitespace-pre-line">
            🔔 Stay close. The horizon is about to break.
          </p>
        </>
      }
    />
  );
}
