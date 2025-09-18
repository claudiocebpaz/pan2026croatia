// src/components/SanctuaryImage.tsx
export default function SanctuaryImage() {
  return (
    <div className="relative">
      {/* Este contenedor se "sale" del contenedor padre */}
      <div className="w-screen relative left-1/2 -ml-[50vw]">
        <img
          src="https://obonjan.hr/wp-content/uploads/2023/03/FAQ-1.jpg"
          alt="obonjan island"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}
