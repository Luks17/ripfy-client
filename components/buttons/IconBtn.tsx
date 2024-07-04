import { type GestureResponderEvent, Pressable } from "react-native";
import RenderIcon, {
  type MaterialIcon,
  type AntDesignIcon,
  type EntypoIcon,
} from "../../lib/ui/icons";

interface Props {
  icon: AntDesignIcon | EntypoIcon | MaterialIcon;
  onPress?: (e?: GestureResponderEvent) => void;
  color?: string;
  size?: number;
}

function IconBtn({ icon, onPress, color = "white", size = 24 }: Props) {
  return (
    <Pressable onPress={onPress}>
      <RenderIcon icon={icon} color={color} size={size} />
    </Pressable>
  );
}

export default IconBtn;
