import { useState, useEffect, useCallback, useRef } from "react";
import Logo from "../../assets/logosanctuary.png";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Rooms", href: "/rooms" },
  { name: "Program", href: "/program" },
  { name: "Manifesto", href: "/manifiesto" },
  { name: "FAQs", href: "/faqs" },
];

// Configuración de cuántos píxeles de scroll deben ocurrir antes de mostrar el menú
const SCROLL_OFFSET = 20;

// Throttle function para optimizar scroll events
const throttle = (func: (...args: any[]) => void, limit: number) => {
  let inThrottle: boolean;
  return function (...args: any[]) {
    if (!inThrottle) {
      func.apply(null, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Hook personalizado para manejar la ruta activa
const useActivePath = () => {
  const [activePath, setActivePath] = useState("/");

  useEffect(() => {
    const updateActivePath = () => {
      setActivePath(window.location.pathname);
    };

    updateActivePath();
    window.addEventListener("popstate", updateActivePath);

    return () => window.removeEventListener("popstate", updateActivePath);
  }, []);

  return activePath;
};

// Hook personalizado para manejar la visibilidad del navbar
const useNavbarVisibility = () => {
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(
    throttle(() => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY.current) > 5) {
        setIsVisible(currentScrollY > SCROLL_OFFSET);
        lastScrollY.current = currentScrollY;
      }
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return isVisible;
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isVisible = useNavbarVisibility();
  const activePath = useActivePath();

  // Función para determinar si un link está activo
  const isActiveLink = (href: string) => {
    if (href === "/") {
      return activePath === "/";
    }
    return activePath.startsWith(href);
  };

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
              className={`font-semibold transition-colors duration-200 ${
                isActiveLink(item.href)
                  ? "text-white border-b-2 border-white"
                  : "text-gray-300 hover:text-white"
              }`}
              aria-current={isActiveLink(item.href) ? "page" : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* 📌 Botón de "Book Now" en Desktop */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
            onClick={() => (window.location.href = "/rooms")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
          >
            Book Now
          </button>
        </div>

        {/* 📱 Botón para abrir menú Mobile */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-50"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-haspopup="true"
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
        <DialogPanel
          id="mobile-menu"
          className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-950 text-gray-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
          aria-label="Mobile navigation menu"
        >
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
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold transition-colors duration-200 ${
                      isActiveLink(item.href)
                        ? "bg-white/10 text-white border-l-4 border-white"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }`}
                    aria-current={isActiveLink(item.href) ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* 📌 Botón de "Book Now" en Mobile */}
              <div className="py-6">
                <button
                  onClick={() => (window.location.href = "/rooms")}
                  className="-mx-3 block w-full text-left rounded-lg px-3 py-2.5 text-base/7 font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors duration-200"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
