import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    // flex:1,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4, //shadow for android
    shadowColor: "black", //shadow for iOS
    shadowOffset: { width: 0, height: 2 }, //shadow for iOS
    shadowRadius: 6, //shadow for iOS
    shadowOpacity: 0.25, //shadow for iOS
    padding: 16,
    backgroundColor: "#4e0329",
  },
  numberInput: {
    height: 50,
    width: 50,
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
  },
});
