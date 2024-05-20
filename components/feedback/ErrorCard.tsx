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
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: colors.error,
    borderRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  message: {},
});

export default ErrorCard;
