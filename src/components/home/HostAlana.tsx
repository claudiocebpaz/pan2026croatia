export default function HostAlana() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-12">
      {/* Image for mobile: visible only on mobile */}
      <img
        src="https://pub-858a9865baad48afa914044f2883a089.r2.dev/img/hosts/alanawinter.jpeg"
        alt="Alana Winter"
        className="w-full md:hidden h-auto rounded shadow-lg object-cover"
      />

      <div className="md:w-2/3">
        <h3 className="font-cinzel text-2xl font-semibold">Alana Winter</h3>
        <p className="font-quattrocento italic mb-3">PS Founding Member</p>
        <p>
          <span className="font-semibold">Alana Winter</span> blends over two
          decades of entrepreneurial success with deep expertise in{" "}
          <span className="font-semibold">leadership psychology</span> to help
          founders, CEOs, and executive teams thrive.
        </p>
        <p className="mt-4">
          Specializing in{" "}
          <span className="font-semibold">
            team development, leadership offsites, and 1:1 coaching
          </span>
          , Alana guides leaders through periods of growth and transition with{" "}
          <span className="font-semibold">
            clarity, confidence, and purpose
          </span>
          . Her facilitation style fosters alignment on{" "}
          <span className="font-semibold">values, vision, and purpose</span>
          —turning these into{" "}
          <span className="font-semibold">competitive advantages</span> that
          drive results.
        </p>
        <p className="mt-4">
          With a warm, insightful approach and a proven track record working
          with <span className="font-semibold">global leaders</span>, Alana
          equips her clients to{" "}
          <span className="font-semibold">lead authentically</span> in even the
          most challenging times.
        </p>
      </div>

      {/* Image for desktop: visible only on medium screens and above */}
      <img
        src="https://pub-858a9865baad48afa914044f2883a089.r2.dev/img/hosts/alanawinter.jpeg"
        alt="Alana Winter"
        className="hidden md:block md:w-1/4 h-auto rounded shadow-lg object-cover"
      />
    </div>
  );
}
