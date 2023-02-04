import { StyleSheet, View } from "react-native";

import Colors from "../../constants/color";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4, //shadow for android
    shadowColor: "black", //shadow for iOS
    shadowOffset: { width: 0, height: 2 }, //shadow for iOS
    shadowRadius: 6, //shadow for iOS
    shadowOpacity: 0.25, //shadow for iOS
    padding: 16,
    backgroundColor: Colors.primary800,
  },
});
