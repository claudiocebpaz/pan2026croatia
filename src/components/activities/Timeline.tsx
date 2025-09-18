type TimelineEvent = {
  date: string;
  title: string;
  items: string[];
  image?: string;
};

type TimelineProps = {
  events: TimelineEvent[];
};

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="-my-6">
      {events.map((event, index) => (
        <div key={index} className="relative pl-4 xl:pl-20 py-6 group">
          {/* Línea vertical y marcador */}
          <div
            className="
                  flex flex-col xl:flex-row items-start mb-1 group-last:before:hidden
                  before:absolute
                  before:left-2 xl:before:left-20
                  before:h-full before:px-px before:bg-slate-300
                  before:self-start before:-translate-x-1/2 before:translate-y-3
                  after:absolute
                  after:left-2 xl:after:left-20
                  after:w-2 after:h-2
                  after:bg-yellow-400 after:border-4 after:box-content
                  after:border-slate-50 after:rounded-full
                  after:-translate-x-1/2 after:translate-y-1.5
                "
          />

          {/* Tarjeta con imagen y lista */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden mt-4 xl:ml-16 w-full">
            {/* 
                  xl:flex => distribuye imagen y texto en una fila solo en pantallas ≥1280px
                  xl:items-center => alinea verticalmente la imagen y el bloque de texto en pantallas grandes
                */}
            <div className="xl:flex xl:items-center">
              {event.image && (
                <div className="relative w-full xl:w-2/3">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-auto max-h-[500px] object-contain"
                  />
                  <div className="font-quattrocento absolute top-4 left-4 backdrop-blur-md bg-white/50 text-gray-900 px-4 py-2 rounded-md text-lg font-bold">
                    {event.title}
                  </div>
                </div>
              )}
              <div className="p-4 w-full xl:w-1/3  flex flex-col justify-center">
                <ul className="font-lora list-none pl-5 text-slate-600 xl:text-2xl">
                  {event.items.map((item, i) => (
                    <li key={i} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
