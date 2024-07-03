import { AntDesign } from "@expo/vector-icons";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { colors } from "../../lib/constants/colors";
import { useEffect, useRef, useState } from "react";
import { useIsKeyboardVisible } from "../../lib/hooks/useIsKeyboardVisible";

interface Props {
  initialSearch: string;
  onChange: (value: string) => void;
}

function SearchBar({ initialSearch, onChange }: Props) {
  const [value, setValue] = useState(initialSearch);
  const inputContainer = useRef<TextInput | null>(null);
  const isKeyboardVisible = useIsKeyboardVisible();

  const updateText = (text: string) => setValue(text);

  function focusInput() {
    inputContainer.current!.focus();
  }

  useEffect(() => {
    if (!isKeyboardVisible) {
      onChange(value);
    }
  }, [isKeyboardVisible]);

  return (
    <View style={styles.container}>
      <Pressable onPress={focusInput}>
        <AntDesign
          style={styles.iconContainer}
          name="search1"
          color={colors.accent}
          size={20}
        />
      </Pressable>
      <TextInput
        value={value}
        onChangeText={updateText}
        style={styles.input}
        ref={inputContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.base100,
    overflow: "hidden",
    borderRadius: 5,
    elevation: 5,
    padding: 2,
    marginVertical: 5,
  },
  iconContainer: {
    padding: 5,
  },
  input: {
    width: 300,
    fontSize: 16,
    color: colors.baseContent,
  },
});

export default SearchBar;
