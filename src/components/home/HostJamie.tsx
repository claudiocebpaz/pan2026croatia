// src/components/HostJamie.tsx

export default function HostJamie() {
  return (
    <div className="mb-12 flex flex-col md:flex-row items-center gap-6 md:gap-12">
      <img
        src="https://pub-858a9865baad48afa914044f2883a089.r2.dev/img/hosts/jamiejanko.jpeg"
        alt="Jamie Janko"
        className="w-full md:w-1/4 h-auto rounded shadow-lg object-cover"
      />
      <div className="md:w-2/3">
        <h3 className="font-cinzel text-2xl font-semibold">Jamie Janko</h3>
        <p className="font-quattrocento italic mb-3">
          PS Founding Member / Founder ReWild Breathwork
        </p>
        <p>
          Jamie Janko is an international breathwork expert and visionary
          founder of{" "}
          <span className="font-semibold">
            ReWild Breathwork & Somatic Healing
          </span>
          .
        </p>
        <p className="mt-4">
          ReWild specializes in professional practitioner trainings, with
          certified breathwork practitioners in over 16 countries worldwide.
          Combining{" "}
          <span className="font-semibold">the science and the sacred</span>,
          ReWild uses breathwork not only as a powerful tool for deep healing
          but also as a transformative method for biohacking, particularly for
          entrepreneurs.{" "}
        </p>
        <p className="mt-4">
          By facilitating healing at its core, ReWild empowers individuals to
          optimize their lives and reach peak performance, demonstrating that
          true optimization begins with profound self-healing.
        </p>
      </div>
    </div>
  );
}
