import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { useEffect } from "react";

interface NotificationProps {
  type: "success" | "error";
  message: string;
  onClose: () => void;
  autoHide?: number;
}

export default function Notification({
  type,
  message,
  onClose,
  autoHide = 5000,
}: NotificationProps) {
  const styles = {
    success: {
      bg: "bg-green-100",
      border: "border-green-400",
      text: "text-green-700",
      icon: "text-green-600",
    },
    error: {
      bg: "bg-red-100",
      border: "border-red-400",
      text: "text-red-700",
      icon: "text-red-600",
    },
  };

  const currentStyle = styles[type];

  useEffect(() => {
    if (autoHide > 0) {
      const timer = setTimeout(onClose, autoHide);
      return () => clearTimeout(timer);
    }
  }, [autoHide, onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`mt-4 p-3 ${currentStyle.bg} border ${currentStyle.border} ${currentStyle.text} rounded-md relative`}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1 pr-6">
            <p className="text-sm font-medium">{message}</p>
          </div>
          <button
            onClick={onClose}
            className={`flex-shrink-0 p-1 rounded-full hover:bg-white/20 ${currentStyle.icon}`}
            aria-label="Cerrar notificación"
          >
            <XMarkIcon className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
