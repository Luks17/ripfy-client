import {
  type StyleProp,
  StyleSheet,
  Text,
  TextInput,
  type TextStyle,
  View,
  type ViewStyle,
} from "react-native";
import { addOpacity } from "../../lib/ui/utils";
import { colors } from "../../lib/constants/colors";

interface Props {
  label?: string;
  value: string;
  onInputChange: (text: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
  inputFieldColor?: string;
  placeholder?: string;
  secure?: boolean;
  error?: boolean;
}

function InputField({
  label,
  value,
  onInputChange,
  containerStyle,
  inputFieldColor = colors.tertiary,
  placeholder = label,
  secure = false,
  error = false,
}: Props) {
  const textInputStyles: StyleProp<TextStyle> = [styles.textInput];

  if (value) textInputStyles.push({ borderBottomColor: inputFieldColor });
  if (error) textInputStyles.push({ borderBottomColor: colors.error });

  return (
    <View style={containerStyle}>
      {label !== undefined && <Text style={styles.label}>{label}</Text>}
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
});

export default InputField;
