// src/lib/analytics.ts
import ReactGA from "react-ga4";

/**
 * Inicializa Google Analytics solo en producción
 */
export const initGA = (): void => {
  const trackingId = import.meta.env.VITE_GA_TRACKING_ID;

  if (import.meta.env.PROD && trackingId) {
    ReactGA.initialize(trackingId);
    console.log("Google Analytics inicializado en producción");
  } else if (!trackingId) {
    console.warn("VITE_GA_TRACKING_ID no está configurado");
  } else {
    console.log("Google Analytics no se inicializa en desarrollo");
  }
};

/**
 * Envía un pageview a Google Analytics solo en producción
 */
export const trackPageView = (path: string): void => {
  if (import.meta.env.PROD && import.meta.env.VITE_GA_TRACKING_ID) {
    ReactGA.send({ hitType: "pageview", page: path });
  }
};

/**
 * Envía un evento personalizado a Google Analytics solo en producción
 */
export const trackEvent = (
  category: string,
  action: string,
  label?: string,
  value?: number
): void => {
  if (import.meta.env.PROD && import.meta.env.VITE_GA_TRACKING_ID) {
    ReactGA.event({
      category,
      action,
      label,
      value,
    });
  }
};
