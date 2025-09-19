// React import not needed with automatic JSX runtime

type Tier = {
  name: string;
  unitNight: number;
  person6Nights: number;
  personNight: number;
  unit6Nights: number;
  link?: string;
  active?: boolean;
};

type BookingOption = {
  label: string;
  link: string;
  soldout: boolean;
};

type RoomPricingProps = {
  bookingOptions?: BookingOption[];
};

const tiers: Tier[] = [
  {
    name: "Early Bird",
    unitNight: 992,
    person6Nights: 2975,
    personNight: 496,
    unit6Nights: 5950,
    link: "https://buy.stripe.com/fZeeVd0zq1eX1agfZ0",
    active: true,
  },
  {
    name: "Tier 2",
    unitNight: 1167,
    person6Nights: 3500,
    personNight: 583,
    unit6Nights: 7000,
    link: "https://buy.stripe.com/fZeeVd0zq1eX1agfZ0",
    active: false,
  },
  {
    name: "Final Tier",
    unitNight: 1400,
    person6Nights: 4200,
    personNight: 700,
    unit6Nights: 8400,
    link: "https://buy.stripe.com/fZeeVd0zq1eX1agfZ0",
    active: false,
  },
];

const fmt = (n: number) =>
  new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);

export default function RoomPricing({ bookingOptions }: RoomPricingProps) {
  // Encontrar el primer link activo (no soldout)
  const activeBookingOption = bookingOptions?.find((option) => !option.soldout);

  // Encontrar el primer tier activo
  const activeTier = tiers.find((tier) => tier.active);

  // Calcular el precio más caro (Final Tier)
  const highestPrice = Math.max(...tiers.map((t) => t.unit6Nights));

  // Función para calcular porcentaje de descuento
  const calculateDiscount = (price: number) => {
    const discount = ((highestPrice - price) / highestPrice) * 100;
    return Math.round(discount);
  };

  return (
    <div className="w-full font-inter mt-8">
      <div className="mx-auto max-w-10xl px-6 lg:px-8">
        {/* Title */}
        <div className="mb-4 flex items-end justify-between">
          <h2 className="text-lg font-medium text-gray-900">
            Pricing Breakdown
          </h2>
          <p className="text-sm text-gray-500">All prices in EUR (€)</p>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto rounded-xl border border-gray-300 bg-white shadow-xs">
          <table className="min-w-full text-sm text-gray-700">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="px-4 py-3 font-medium">Tier</th>
                <th className="px-4 py-3 font-medium text-right">
                  Unit / night
                </th>
                <th className="px-4 py-3 font-medium text-right">
                  Person / 6 nights
                </th>
                <th className="px-4 py-3 font-medium text-right">
                  Person / night
                </th>
                <th className="px-4 py-3 font-medium text-right">
                  <span className="inline-flex items-center rounded bg-yellow-50 px-2 py-0.5 text-yellow-800 ring-1 ring-inset ring-yellow-200">
                    Unit / 6 nights
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {tiers.map((t) => (
                <tr key={t.name}>
                  <td className="px-4 py-1 font-medium text-gray-900">
                    {t.name}
                  </td>
                  <td className="px-4 py-1 tabular-nums text-right">
                    {fmt(t.unitNight)}
                  </td>
                  <td className="px-4 py-1 tabular-nums text-right">
                    {fmt(t.person6Nights)}
                  </td>
                  <td className="px-4 py-1 tabular-nums text-right">
                    {fmt(t.personNight)}
                  </td>
                  <td className="px-4 py-1 text-right">
                    <span className="inline-flex items-center rounded bg-yellow-100 px-2 py-1 font-semibold text-gray-900 ring-1 ring-inset ring-yellow-300 tabular-nums">
                      {fmt(t.unit6Nights)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden grid gap-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className="rounded-lg border border-gray-300 p-4 shadow-xs bg-white"
            >
              <div className="mb-0.1 flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">{t.name}</h3>
                <span className="text-xs rounded-full border border-yellow-300 px-2 py-0.5 bg-yellow-100 text-yellow-700">
                  {t.unit6Nights < highestPrice
                    ? `${calculateDiscount(t.unit6Nights)}% discount`
                    : "6 nights"}
                </span>
              </div>
              <dl className="grid grid-cols-2 gap-x-3 gap-y-1 text-sm text-gray-700">
                <dt className="text-gray-500 px-2 py-0.5">Room / Night</dt>
                <dd className="text-right font-medium tabular-nums text-gray-900 px-2 py-2">
                  {fmt(t.unitNight)}
                </dd>

                <dt className="text-gray-500 px-2 py-0.5">6-Nights / Person</dt>
                <dd className="text-right font-medium tabular-nums text-gray-900 px-2 py-2">
                  {fmt(t.person6Nights)}
                </dd>

                <dt className="text-gray-500 px-2 py-0.5">
                  Per Night / Person
                </dt>
                <dd className="text-right font-medium tabular-nums text-gray-900 px-2 py-2">
                  {fmt(t.personNight)}
                </dd>

                <div className="col-span-2 rounded-md bg-yellow-50 ring-1 ring-inset ring-yellow-200 px-2 py-0.5 ">
                  <div className="grid grid-cols-2 items-center">
                    <dt className="text-yellow-900 font-bold">Room 6-Nights</dt>
                    <dd className="text-right font-bold tabular-nums text-gray-900">
                      {fmt(t.unit6Nights)}
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          ))}
        </div>

        {/* Botón fuera de la tabla para desktop y mobile */}
        {(activeTier || activeBookingOption) && (
          <div className="mt-6 text-center">
            <a
              href={activeTier?.link || activeBookingOption?.link}
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 w-full md:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              {activeTier
                ? `Book ${activeTier.name}`
                : activeBookingOption?.label}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
