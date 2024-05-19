import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../lib/ui/colors";

interface Props {
  msg: string;
}

function ErrorCard({ msg }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Erro</Text>
      <Text style={styles.message}>{msg}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: colors.error,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  message: {},
});

export default ErrorCard;
