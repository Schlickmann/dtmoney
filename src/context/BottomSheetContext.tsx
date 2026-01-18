import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { TouchableWithoutFeedback, View } from "react-native";
import { colors } from "@/shared/colors";

type BottomSheetContextType = {
  openBottomSheet: (content: ReactNode, index: number) => void;
  closeBottomSheet: () => void;
};

const BottomSheetContext = createContext<BottomSheetContextType>(
  {} as BottomSheetContextType
);

export function BottomSheetProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<ReactNode | null>(null);
  const [index, setIndex] = useState(-1);
  const [visible, setVisible] = useState(false);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = ["70%", "90%"];

  const openBottomSheet = useCallback(
    (newContent: ReactNode, index: number) => {
      setContent(newContent);
      setIndex(index);
      setVisible(true);
      requestAnimationFrame(() => {
        bottomSheetRef.current?.snapToIndex(index);
      });
    },
    []
  );

  const closeBottomSheet = useCallback(() => {
    setContent(null);
    setIndex(-1);
    setVisible(false);
    bottomSheetRef.current?.close();
  }, []);

  const handleSheetChange = useCallback((index: number) => {
    if (index === -1) {
      setVisible(false);
    }
  }, []);

  return (
    <BottomSheetContext.Provider value={{ openBottomSheet, closeBottomSheet }}>
      {children}
      {visible && (
        <TouchableWithoutFeedback onPress={closeBottomSheet}>
          <View className="z-1 absolute inset-0 bg-black/70" />
        </TouchableWithoutFeedback>
      )}
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        style={{ zIndex: 2 }}
        index={index}
        enablePanDownToClose
        backgroundStyle={{
          backgroundColor: colors["background-secondary"],
          borderTopRightRadius: 32,
          borderTopLeftRadius: 32,
          elevation: 9,
        }}
        onChange={handleSheetChange}
      >
        <BottomSheetScrollView>{content}</BottomSheetScrollView>
      </BottomSheet>
    </BottomSheetContext.Provider>
  );
}

export function useBottomSheet() {
  const context = useContext(BottomSheetContext);
  if (!context) {
    throw new Error("useBottomSheet must be used within a BottomSheetProvider");
  }
  return context;
}
