import { NavigationRoutes } from "./src/routes";
import { AuthProvider } from "./src/context/AuthContext";
import { NotificationProvider } from "@/context/NotificationContext";
import { SnackBar } from "@/components/SnackBar";
import { BottomSheetProvider } from "@/context/BottomSheetContext";

import "./src/styles/global.css";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { TransactionProvider } from "@/context/TransactionContex";

export default function App() {
  return (
    <GestureHandlerRootView className="flex-1">
      <NotificationProvider>
        <AuthProvider>
          <TransactionProvider>
            <BottomSheetProvider>
              <NavigationRoutes />
              <SnackBar />
            </BottomSheetProvider>
          </TransactionProvider>
        </AuthProvider>
      </NotificationProvider>
    </GestureHandlerRootView>
  );
}
