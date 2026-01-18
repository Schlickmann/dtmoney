import { useTransaction } from "@/context/TransactionContex";
import { TouchableWithoutFeedback } from "@gorhom/bottom-sheet";
import clsx from "clsx";
import { useMemo, useState } from "react";
import { FlatList, Modal, Text, TouchableOpacity, View } from "react-native";
import { Checkbox } from 'expo-checkbox'

interface SelectCategoryModalProps {
  selectedCategory: number;
  onSelectCategory: (categoryId: number) => void;
}

export function SelectCategoryModal({
  selectedCategory,
  onSelectCategory,
}: SelectCategoryModalProps) {
  const [showModal, setShowModal] = useState(false);

  const { categories } = useTransaction();

  function handleModal() {
    setShowModal((prev) => !prev);
  }

  function handleSelectCategory(categoryId: number) {
    onSelectCategory(categoryId);
    setShowModal(false);
  }

  const selected = useMemo(() => categories.find(category => category.id === selectedCategory), [selectedCategory, categories]);

  return (
    <>
      <TouchableOpacity
        className="my-2 h-[50] justify-center rounded-[6] bg-background-primary pl-4"
        onPress={handleModal}
      >
        <Text className={clsx("text-lg text-gray-700", {
          "text-white": !!selected,
        })}>{selected?.name || "Category"}</Text>
      </TouchableOpacity>

      <Modal visible={showModal} animationType="slide" transparent={true}>
        <TouchableWithoutFeedback onPress={handleModal}>
          <View className="flex-1 items-center justify-center bg-black/50">
            <View className="w-[90%] rounded-xl bg-background-secondary p-4">
              <Text className="mb-4 text-xl font-bold text-white">
                Select Category
              </Text>
              <FlatList
                data={categories}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => handleSelectCategory(item.id)} className="flex-row items-center bg-gray-800 rounded-lg mb-2 p-4">
                    <Checkbox value={selected?.id === item.id} onValueChange={() =>
                      handleSelectCategory(item.id)
                    } className="mr-2" />
                    <Text className="text-white text-lg text-center">{item.name}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
}
