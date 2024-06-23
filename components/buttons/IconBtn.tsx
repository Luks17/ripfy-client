import { AntDesign, Entypo } from "@expo/vector-icons";
import { type GestureResponderEvent, Pressable } from "react-native";

type AntDesignIcon = keyof typeof AntDesign.glyphMap;
type EntypoIcon = keyof typeof Entypo.glyphMap;

interface Props {
  icon: AntDesignIcon | EntypoIcon;
  onPress?: (e?: GestureResponderEvent) => void;
  color?: string;
  size?: number;
}

function IconBtn({ icon, onPress, color = "white", size = 24 }: Props) {
  function renderIcon() {
    if (icon in AntDesign.glyphMap) {
      return (
        <AntDesign name={icon as AntDesignIcon} size={size} color={color} />
      );
    } else {
      return <Entypo name={icon as EntypoIcon} size={size} color={color} />;
    }
  }

  return <Pressable onPress={onPress}>{renderIcon()}</Pressable>;
}

export default IconBtn;
