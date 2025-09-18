import ReactPlayer from "react-player/youtube";

const Hero = () => {
  return (
    <div className="relative bg-black h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background video container */}
      <div className="absolute inset-0 z-0">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=0ON0AlJkcHw"
          playing
          loop
          muted
          width="2496px"
          height="1404px"
          playbackRate={0.75}
          config={{
            playerVars: { start: 7 }, // empieza en 10 segundos
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-black/55"></div>

      {/* Background logo with optimizations */}
      <div className="absolute inset-0 flex items-center justify-center z-5">
        <img
          src="https://pub-858a9865baad48afa914044f2883a089.r2.dev/img/logosanctuary.webp"
          alt="Sanctuary Logo"
          width={700} // Definir dimensiones explícitas
          height={0}
          className="w-[500px] h-auto xl:w-[700px] xl:h-auto block"
          rel="preload"
          fetchPriority="high" // Prioriza su carga para mejorar LCP
          decoding="async" // Decodifica la imagen en un hilo de fondo
        />
      </div>

      {/* Content */}
      <div className="relative z-30 flex flex-col items-center text-center px-4">
        <h1 className="text-white text-7xl font-bold font-cinzel xl:text-9xl">
          PAN
        </h1>
        <p className="text-white font-quattrocento text-center xl:text-2xl">
          THE CELEBRATION OF COMMUNITY
        </p>
      </div>
    </div>
  );
};

export default Hero;