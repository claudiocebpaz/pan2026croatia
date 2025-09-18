const COHORT_DATE_RANGE = "Tuesday, May 19th — Monday, May 25th 2026";

export default function CohortDates() {
  return (
    <div className="bg-yellow-300 py-4" id="cohort-dates">
      <div className="mx-auto px-6 lg:px-8">
        <div className="max-w-[700px] mx-auto">
          {/* Mobile layout: columna única con divisor horizontal */}
          <div className="block sm:hidden">
            <div className="text-center">
              <h2 className="font-cinzel text-xl font-semibold tracking-tight text-gray-950 whitespace-nowrap">
                {COHORT_DATE_RANGE}
              </h2>
            </div>
          </div>

          {/* Desktop/Tablet layout: grid de tres columnas */}
          <div className="hidden sm:flex sm:justify-center">
            <div className="text-center">
              <h2 className="font-cinzel text-2xl font-semibold tracking-tight text-gray-950 whitespace-nowrap">
                {COHORT_DATE_RANGE}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
