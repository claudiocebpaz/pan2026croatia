// src/components/shared/GoogleAnalyticsTracker.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "../../lib/analytics";

/**
 * Componente que trackea automáticamente los cambios de ruta
 * y envía pageviews a Google Analytics
 */
export default function GoogleAnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    // Trackear pageview cuando cambia la ruta
    trackPageView(location.pathname + location.search);
  }, [location.pathname, location.search]);

  return null; // Este componente no renderiza nada
}
