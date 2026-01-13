import { NavigationRoutes } from "./src/routes";
import { AuthProvider } from "./src/context/AuthContext";
import { NotificationProvider } from "@/context/NotificationContext";
import { SnackBar } from "@/components/SnackBar";

import "./src/styles/global.css";

export default function App() {
  return (
    <NotificationProvider>
      <AuthProvider>
        <NavigationRoutes />
        <SnackBar />
      </AuthProvider>
    </NotificationProvider>
  );
}
