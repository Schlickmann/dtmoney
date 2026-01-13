import { useNotification } from "@/context/NotificationContext";
import { useCallback } from "react";
import { AppError } from "../helpers/AppError";

export function useErrorHandler() {
  const { notify } = useNotification();

  const handleError = useCallback(
    (error: unknown, defaultMessage: string = "An unknown error occurred") => {
      const isAppError = error instanceof AppError;
      const message = isAppError ? error.message : defaultMessage;
      notify({
        message,
        messageType: "error",
      });
    },
    [notify]
  );

  return { handleError };
}
