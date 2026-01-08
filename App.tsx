import { NavigationRoutes } from "./src/routes";
import { AuthProvider } from "./src/context/AuthContext";

import "./src/styles/global.css";

export default function App() {
  return (
    <AuthProvider>
      <NavigationRoutes />
    </AuthProvider>
  );
}
