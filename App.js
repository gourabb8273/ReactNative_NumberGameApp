import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/color";

export default function App() {
const [userNumber, setUserNumber] = useState();

function pickedNumberHandler(pickedNumber){
  setUserNumber(pickedNumber)
}

let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>

if(userNumber){
  screen = <GameScreen/>
}

  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImageStyle}
      >
        <SafeAreaView  style={styles.rootScreen}>
        {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    // backgroundColor: '#ddb52f',
  },
  backgroundImageStyle:{
    opacity:0.15
  }
});
