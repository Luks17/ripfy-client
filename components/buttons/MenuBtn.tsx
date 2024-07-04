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
import LoadingIndicator from "../feedback/LoadingIndicator";

interface Props {
  text: string;
  icon: AntDesignIcon | EntypoIcon | MaterialIcon;
  isPending?: boolean;
  onPress?: (e: GestureResponderEvent) => void;
}

function MenuBtn({ text, icon, isPending = false, onPress }: Props) {
  return (
    <View>
      <Pressable
        style={styles.innerContainer}
        android_ripple={{ color: colors.secondary }}
        onPress={onPress}
        disabled={isPending}
      >
        {!isPending ? (
          <RenderIcon icon={icon} color={colors.baseContent} size={24} />
        ) : (
          <LoadingIndicator occupyAll={false} />
        )}
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
