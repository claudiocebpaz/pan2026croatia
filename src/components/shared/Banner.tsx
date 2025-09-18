import { useState } from "react";
import { useLocation } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/20/solid";

export default function Banner() {
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  // No mostrar el banner en la página de rooms
  if (!visible || location.pathname === "/rooms") return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
      <div className="pointer-events-auto flex items-center justify-between bg-yellow-400 px-6 py-2.5 sm:rounded-xl sm:py-3 sm:px-4 shadow-lg w-full max-w-2xl">
        <p className="w-full text-center text-sm/6 text-black font-medium justify-center flex">
          <a href="/rooms">
            <strong className="font-bold">View Remaining Accommodations</strong>
          </a>
        </p>
        <button
          onClick={() => setVisible(false)}
          className="-m-1.5 flex-none p-1.5"
        >
          <span className="sr-only">Dismiss</span>
          <XMarkIcon aria-hidden="true" className="size-5 text-black" />
        </button>
      </div>
    </div>
  );
}
