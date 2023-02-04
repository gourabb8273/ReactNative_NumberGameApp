import { View, Text, StyleSheet } from "react-native";

import Title from "../components/title";

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {/* Guess */}
      <View>
        <Text>Higher or Lower</Text>
        {/* + - */}
      </View>
      <View>{/* Logs */}</View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  }
});
