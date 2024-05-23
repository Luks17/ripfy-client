import { StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../../lib/ui/colors";
import { FontAwesome } from "@expo/vector-icons";

function PlaylistScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.base100,  }}>
    <View style={styles.rootContainer}>
      
      </View>
    </View>
    
    );
};

const styles = StyleSheet.create({
  rootContainer: {

    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.base100,
    borderRadius: 10,
  },
  
  foto: {
    width: "80%",
    height: "100%",
    padding: 40,
    margin: 40,
    alignItems: "center",
    backgroundColor: colors.success,
    borderRadius: 20,
  },

  music: {
    flex: 1,
    alignContent: 'center',
    width: 35000,
    height: 80,
    borderRadius: 5,
    margin: 1,
    marginBottom: 10,
    backgroundColor:colors.successContent,
    opacity: 10,
    
  },
  button: {
    paddingVertical: 15,
    backgroundColor: colors.secondary,
    borderRadius: 20,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },

});

export default PlaylistScreen;
