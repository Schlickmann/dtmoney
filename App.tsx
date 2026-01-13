import { NavigationRoutes } from "./src/routes";
import { AuthProvider } from "./src/context/AuthContext";
import { NotificationProvider } from "@/context/NotificationContext";

import "./src/styles/global.css";

export default function App() {
  return (
    <NotificationProvider>
      <AuthProvider>
        <NavigationRoutes />
      </AuthProvider>
    </NotificationProvider>
  );
}
