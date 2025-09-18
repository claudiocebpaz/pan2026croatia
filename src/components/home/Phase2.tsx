import DJTemplate from "./DJTemplate";

export default function Phase2() {
  return (
    <DJTemplate
      name="Phase 2 Announcements"
      subtitle={
        <>
          <strong>🚀 Exciting News Coming Soon!</strong>
        </>
      }
      imageUrl="https://pub-256cbac8c7ba4219be4d35b225b48d92.r2.dev/phase-pan.jpeg"
      content={
        <>
          <p className="whitespace-pre-line">
            <strong>🌟 Get Ready for Something Extraordinary! 🌟</strong>
            <br />
            <br />
            We're brewing something absolutely <strong>MAGICAL</strong> behind
            the scenes and we can't wait to share it with you!
          </p>
          <p className="mt-4 whitespace-pre-line">
            <strong>✨ Phase 2 is loading... ✨</strong>
            <br />
            <br />
            Prepare to be <em>blown away</em> by our upcoming announcements that
            will take your Obonjan Island experience to{" "}
            <strong>UNFORGETTABLE heights</strong>!
          </p>
          <p className="mt-4 whitespace-pre-line">
            <strong>🎉 What's coming?</strong>
            <br />
            • Surprise headliners that will make you dance all night
            <br />
            • Exclusive experiences you won't find anywhere else
            <br />
            • Magical collaborations that will ignite your soul
            <br />• And so much more...
          </p>
          <p className="mt-4 whitespace-pre-line">
            <strong>🔔 Stay tuned!</strong>
            <br />
            Follow us closely because you <em>WON'T</em> want to miss what's
            coming next. This is going to be{" "}
            <strong>EPIC beyond imagination</strong>!
            <br />
            <br />
            The best is yet to come... 💫
          </p>
        </>
      }
    />
  );
}
