import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
} from "react-native";
import { addOpacity } from "../../lib/ui/utils";
import { colors } from "../../lib/constants/colors";

interface Props {
  label: string;
  value: string;
  onInputChange: (text: string) => void;
  placeholder?: string;
  secure?: boolean;
  error?: boolean;
}

function InputField({
  label,
  value,
  onInputChange,
  placeholder = label,
  secure = false,
  error = false,
}: Props) {
  let textInputStyles: StyleProp<TextStyle> = [styles.textInput];

  if (value) textInputStyles.push(styles.borderInputTertiary);
  if (error) textInputStyles.push(styles.borderInputError);

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={textInputStyles}
        placeholder={placeholder}
        placeholderTextColor={addOpacity(colors.baseContent)}
        secureTextEntry={secure}
        value={value}
        onChangeText={onInputChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: colors.baseContent,
  },
  textInput: {
    color: colors.baseContent,
    borderBottomWidth: 2,
    padding: 6,
    borderBottomColor: addOpacity(colors.baseContent),
  },
  borderInputTertiary: {
    borderBottomColor: colors.tertiary,
  },
  borderInputError: {
    borderBottomColor: colors.error,
  },
});

export default InputField;
