import { AppHeader } from "@/components/AppHeader";
import { ScrollView, Text, View } from "react-native";

export function ListHeader() {
  return (
    <>
      <AppHeader />
      <View className="h-[150px] w-full">
        <View className="h-[50px] bg-background-primary" />
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          className="absolute h-[141] pl-6"
        ></ScrollView>
      </View>
    </>
  );
}
