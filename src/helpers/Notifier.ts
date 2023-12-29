import { Theme, toast, ToastPosition } from "react-toastify";

export const Notifier = (message: string, type: "error" | "success" | "warning" | "info", duration: number = 5000) => {
  const options = {
    position: "bottom-right" as ToastPosition,
    autoClose: duration,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    progress: undefined,
    theme: "colored" as Theme, // Utilisez un thème valide ici
  };

  switch (type) {
    case "error":
      toast.error(message, options);
      break;
    case "success":
      toast.success(message, options);
      break;
    case "warning":
      toast.warn(message, options);
      break;
    case "info":
      toast.info(message, options);
      break;
    default:
      break;
  }
};
