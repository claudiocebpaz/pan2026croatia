import DJTemplate from "./DJTemplate";

export default function SimaGandhi() {
  return (
    <div className="w-full px-4">
      <DJTemplate
        name="Sima Gandhi"
        subtitle="Fire Goddess & Tantra/Hatha Yoga"
        imageUrl="https://pub-256cbac8c7ba4219be4d35b225b48d92.r2.dev/sima.jpeg"
        imageClassName="w-full max-w-full md:w-4/5 h-auto rounded shadow-lg object-cover"
        content={
          <p className="whitespace-pre-line">
            <strong>Sima Gandhi</strong> is a{" "}
            <strong>dynamic performing artist</strong> and{" "}
            <strong>yoga teacher</strong> whose work bridges <em>movement</em>,{" "}
            <em>magic</em>, and <em>mindfulness</em>.<br />
            <br />
            Born in <strong>Chicago</strong> and having performed across the
            globe, she is a <strong>multi-prop flow artist</strong> specializing
            in <strong>fire and LED</strong>.<br />
            <br />
            As the founder of <strong>The Moon Witches</strong>, a mystical
            performance troupe, she weaves her deep love of{" "}
            <strong>costume design</strong> into every visual story.
            <br />
            <br />
            Sima is also a devoted <strong>Tantric</strong> and{" "}
            <strong>Laughter Yoga teacher</strong>, guiding others in the art of{" "}
            <strong>embodied joy</strong> and{" "}
            <strong>energetic awakening</strong>.<br />
            <br />
            Whether on stage or on the mat, she invites others into{" "}
            <em>transformative experiences</em> that{" "}
            <strong>ignite the senses</strong> and{" "}
            <strong>awaken the soul</strong>.
          </p>
        }
      />
    </div>
  );
}
