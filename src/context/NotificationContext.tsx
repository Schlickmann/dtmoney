import { createContext, useCallback, useContext, useState } from "react";

export type NotificationType = "success" | "error" | "info";

interface NotificationProps {
  message: string;
  messageType: NotificationType;
}

type NotificationContextType = {
  message: string | null;
  type: NotificationType | null;
  notify: (props: NotificationProps) => void;
};

const NotificationContext = createContext<NotificationContextType>(
  {} as NotificationContextType
);

export function NotificationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [message, setMessage] = useState<string | null>(null);
  const [type, setType] = useState<NotificationType | null>(null);

  const notify = useCallback(({ message, messageType }: NotificationProps) => {
    setMessage(message);
    setType(messageType);

    setTimeout(() => {
      setMessage(null);
      setType(null);
    }, 3000);
  }, []);

  return (
    <NotificationContext.Provider value={{ message, type, notify }}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  const context = useContext(NotificationContext);

  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }

  return context;
}
