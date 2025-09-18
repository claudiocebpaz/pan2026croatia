export default function DJSaraLandry() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-12">
      {/* Mobile Image */}
      <img
        src="https://pub-256cbac8c7ba4219be4d35b225b48d92.r2.dev/sara.jpeg"
        alt="Sara Landry"
        className="w-full md:hidden h-auto rounded shadow-lg object-cover"
      />

      <div className="md:w-2/3">
        <h3 className="font-cinzel text-2xl font-semibold">Sara Landry</h3>
        <p className="font-quattrocento italic mb-3">
          Industrial Techno DJ, Producer & Mastering Engineer
        </p>
        <p className="whitespace-pre-line">
          <strong>Sara Landry</strong> is an <strong>Austin-born</strong>,{" "}
          <strong>Berlin-based industrial techno DJ</strong>,{" "}
          <strong>producer</strong>, and <strong>mastering engineer</strong>{" "}
          known for her <em>dark</em>, <em>driving sound</em> and{" "}
          <em>high-energy sets</em>.<br />
          <br />
          She has quickly become one of the most <strong>
            exciting names
          </strong>{" "}
          in the global <strong>techno scene</strong>.
        </p>
        <p className="mt-4 whitespace-pre-line">
          <strong>Self-taught</strong> and <strong>fiercely independent</strong>
          , Sara has built her career through <strong>raw talent</strong>,{" "}
          <strong>determination</strong>, and a vision for{" "}
          <strong>hard-hitting</strong>, <em>emotional techno</em> that{" "}
          <em>pushes boundaries</em>.<br />
          <br />
          Her performances at <strong>Berghain</strong>,{" "}
          <strong>Possession</strong>, and <strong>Boiler Room</strong> have
          solidified her as a <strong>force on the decks</strong>.
        </p>
        <p className="mt-4 whitespace-pre-line">
          She’s the founder of <strong>HEKATE Records</strong>, a label devoted
          to <strong>industrial</strong> and{" "}
          <strong>experimental techno</strong>.<br />
          <br />
          With releases on labels like <strong>RAW</strong> and her own imprint,
          Sara is shaping the next wave of <strong>techno</strong> with{" "}
          <strong>authenticity</strong>, <strong>intensity</strong>, and{" "}
          <strong>heart</strong>.
        </p>
      </div>

      {/* Desktop Image */}
      <img
        src="https://pub-256cbac8c7ba4219be4d35b225b48d92.r2.dev/sara.jpeg"
        alt="Sara Landry"
        className="hidden md:block md:w-2/4 h-auto rounded shadow-lg object-cover"
      />
    </div>
  );
}
