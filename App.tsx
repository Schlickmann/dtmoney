import { NavigationRoutes } from "./src/routes";
import { AuthProvider } from "./src/context/AuthContext";
import { NotificationProvider } from "@/context/NotificationContext";
import { SnackBar } from "@/components/SnackBar";
import { BottomSheetProvider } from "@/context/BottomSheetContext";

import "./src/styles/global.css";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView className="flex-1">
      <NotificationProvider>
        <AuthProvider>
          <BottomSheetProvider>
            <NavigationRoutes />
            <SnackBar />
          </BottomSheetProvider>
        </AuthProvider>
      </NotificationProvider>
    </GestureHandlerRootView>
  );
}
