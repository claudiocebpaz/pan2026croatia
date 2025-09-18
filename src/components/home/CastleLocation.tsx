// import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import { MapPinIcon } from "@heroicons/react/20/solid";

export default function CastleLocation() {
  return (
    <div className="rounded-md bg-yellow-50 p-4">
      <div className="flex">
        <div className="shrink-0">
          <MapPinIcon aria-hidden="true" className="size-5 text-yellow-400" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800">
            Location Disclaimer
          </h3>
          <div className="mt-2 text-sm text-yellow-700">
            <p>The Castle is in Benest, a 90-min tgv ride from Paris</p>
          </div>
        </div>
      </div>
    </div>
  );
}
