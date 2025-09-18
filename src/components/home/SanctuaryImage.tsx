// src/components/SanctuaryImage.tsx
export default function SanctuaryImage() {
  return (
    <div className="relative">
      {/* Este contenedor se "sale" del contenedor padre */}
      <div className="w-screen relative left-1/2 -ml-[50vw]">
        <img
          src="https://pub-256cbac8c7ba4219be4d35b225b48d92.r2.dev/img/01.webp"
          alt="Chateau Detail"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}
