import { AntDesign } from "@expo/vector-icons";
import { GestureResponderEvent, Pressable } from "react-native";

interface Props {
  icon: keyof typeof AntDesign.glyphMap;
  onPress?: (e?: GestureResponderEvent) => void;
  color?: string;
  size?: number;
}

function IconBtn({ icon, onPress, color = "white", size = 24 }: Props) {
  return (
    <Pressable onPress={onPress}>
      <AntDesign name={icon} size={size} color={color} />
    </Pressable>
  );
}

export default IconBtn;
