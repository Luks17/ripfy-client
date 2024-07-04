import { ActivityIndicator, StyleSheet, View } from "react-native";
import { colors } from "../../lib/constants/colors";

interface Props {
  occupyAll?: boolean;
}

function LoadingIndicator({ occupyAll = true }: Props) {
  return occupyAll ? (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  ) : (
    <ActivityIndicator size="small" color={colors.primary} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    padding: 24,
    backgroundColor: colors.base100,
  },
});

export default LoadingIndicator;
