import { useState, useEffect } from "react";
import Logo from "../../assets/logosanctuary.png";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Rooms", href: "/rooms" },
  { name: "Program", href: "/program" },
];

// Configuración de cuántos píxeles de scroll deben ocurrir antes de mostrar el menú
const SCROLL_OFFSET = 20;

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Detectar scroll y mostrar/ocultar el menú
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_OFFSET) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // 📌 Oculta el menú hasta que se haga scroll más allá de `SCROLL_OFFSET`
    <header
      className={`border-b border-b-gray-800 fixed top-0 w-full z-50 bg-gray-950 text-white font-cinzel shadow-lg transition-transform duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8 lg:p-3"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="Company Logo" src={Logo} className="h-8 w-auto" />
          </a>
        </div>

        {/* 🌐 Menú Desktop */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className=" font-semibold text-gray-50"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* 📌 Botón de "Book Now" en Desktop */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/rooms" className="text-sm/6 font-semibold text-gray-50">
            Book Now <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        {/* 📱 Botón para abrir menú Mobile */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-50"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
      </nav>

      {/* 📱 Menú Mobile */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />

        {/* 📌 Panel del Menú Mobile */}
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-950 text-gray-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            {/* Logo dentro del menú Mobile */}
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="Company Logo" src={Logo} className="h-8 w-auto" />
            </a>

            {/* Botón para cerrar menú Mobile */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          {/* 📌 Links del Menú Mobile */}
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              {/* Links principales */}
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-100"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* 📌 Botón de "Book Now" en Mobile */}
              <div className="py-6">
                <a
                  href="/rooms"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold hover:bg-gray-100"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
