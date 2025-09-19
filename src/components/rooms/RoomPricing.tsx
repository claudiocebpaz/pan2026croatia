const plans = [
  {
    id: 1,
    name: "Hobby",
    memory: "4 GB RAM",
    cpu: "4 CPUs",
    storage: "128 GB SSD disk",
    price: "$40",
    isCurrent: false,
  },
  {
    id: 2,
    name: "Startup",
    memory: "8 GB RAM",
    cpu: "6 CPUs",
    storage: "256 GB SSD disk",
    price: "$80",
    isCurrent: true,
  },
  {
    id: 3,
    name: "Business",
    memory: "16 GB RAM",
    cpu: "8 CPUs",
    storage: "512 GB SSD disk",
    price: "$160",
    isCurrent: false,
  },
  {
    id: 4,
    name: "Enterprise",
    memory: "1024 GB RAM",
    cpu: "12 CPUs",
    storage: "128 GB SSD disk",
    price: "$240",
    isCurrent: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function RoomPricing() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-white">Plans</h1>
          <p className="mt-2 text-sm text-gray-300">
            Your team is on the{" "}
            <strong className="font-semibold text-white">Startup</strong> plan.
            The next payment of $80 will be due on August 4, 2022.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Update credit card
          </button>
        </div>
      </div>
      <div className="-mx-4 mt-10 ring-1 ring-white/15 sm:mx-0 sm:rounded-lg">
        <table className="relative min-w-full divide-y divide-white/15">
          <thead>
            <tr>
              <th
                scope="col"
                className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-white sm:pl-6"
              >
                Plan
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-white lg:table-cell"
              >
                Memory
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-white lg:table-cell"
              >
                CPU
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-white lg:table-cell"
              >
                Storage
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-white"
              >
                Price
              </th>
              <th scope="col" className="py-3.5 pr-4 pl-3 sm:pr-6">
                <span className="sr-only">Select</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan, planIdx) => (
              <tr key={plan.id}>
                <td
                  className={classNames(
                    planIdx === 0 ? "" : "border-t border-transparent",
                    "relative py-4 pr-3 pl-4 text-sm sm:pl-6"
                  )}
                >
                  <div className="font-medium text-white">
                    {plan.name}
                    {plan.isCurrent ? (
                      <span className="ml-1 text-indigo-400">
                        (Current Plan)
                      </span>
                    ) : null}
                  </div>
                  <div className="mt-1 flex flex-col text-gray-400 sm:block lg:hidden">
                    <span>
                      {plan.memory} / {plan.cpu}
                    </span>
                    <span className="hidden sm:inline">·</span>
                    <span>{plan.storage}</span>
                  </div>
                  {planIdx !== 0 ? (
                    <div className="absolute -top-px right-0 left-6 h-px bg-white/10" />
                  ) : null}
                </td>
                <td
                  className={classNames(
                    planIdx === 0 ? "" : "border-t border-white/10",
                    "hidden px-3 py-3.5 text-sm text-gray-400 lg:table-cell"
                  )}
                >
                  {plan.memory}
                </td>
                <td
                  className={classNames(
                    planIdx === 0 ? "" : "border-t border-white/10",
                    "hidden px-3 py-3.5 text-sm text-gray-400 lg:table-cell"
                  )}
                >
                  {plan.cpu}
                </td>
                <td
                  className={classNames(
                    planIdx === 0 ? "" : "border-t border-white/10",
                    "hidden px-3 py-3.5 text-sm text-gray-400 lg:table-cell"
                  )}
                >
                  {plan.storage}
                </td>
                <td
                  className={classNames(
                    planIdx === 0 ? "" : "border-t border-white/10",
                    "px-3 py-3.5 text-sm text-gray-400"
                  )}
                >
                  <div className="sm:hidden">{plan.price}/mo</div>
                  <div className="hidden sm:block">{plan.price}/month</div>
                </td>
                <td
                  className={classNames(
                    planIdx === 0 ? "" : "border-t border-transparent",
                    "relative py-3.5 pr-4 pl-3 text-right text-sm font-medium sm:pr-6"
                  )}
                >
                  <button
                    type="button"
                    disabled={plan.isCurrent}
                    className="inline-flex items-center rounded-md bg-white/10 px-2.5 py-1.5 text-sm font-semibold text-white shadow-xs inset-ring inset-ring-white/10 hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white/10"
                  >
                    Select<span className="sr-only">, {plan.name}</span>
                  </button>
                  {planIdx !== 0 ? (
                    <div className="absolute -top-px right-6 left-0 h-px bg-white/10" />
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
