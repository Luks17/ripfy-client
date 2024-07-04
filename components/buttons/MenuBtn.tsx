import {
  type GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { colors } from "../../lib/constants/colors";
import RenderIcon, {
  type MaterialIcon,
  type AntDesignIcon,
  type EntypoIcon,
} from "../../lib/ui/icons";

interface Props {
  text: string;
  icon: AntDesignIcon | EntypoIcon | MaterialIcon;
  onPress?: (e: GestureResponderEvent) => void;
}

function MenuBtn({ text, icon, onPress }: Props) {
  return (
    <View>
      <Pressable
        style={styles.innerContainer}
        android_ripple={{ color: colors.secondary }}
        onPress={onPress}
      >
        <RenderIcon icon={icon} color={colors.baseContent} size={24} />
        <Text style={styles.title}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
    padding: 20,
  },
  title: {
    color: colors.baseContent,
  },
});

export default MenuBtn;
