import { View, Text, StyleSheet, Platform } from "react-native";

import Colors from "../../constants/color";

function Title({children}) {
  return (
    // <View>
      <Text style={styles.title}>{children}</Text>     
    // </View>
  );
}

export default Title;

const styles = StyleSheet.create({
    title:{
      fontFamily:'open-sans-bold',
        fontSize: 24,
        fontWeight:'bold',
        color: Colors.accent500,
        textAlign:'center',
        // borderWidth: Platform.OS === "android" ? 2 : 0, //one way
        borderWidth: Platform.select({ios:0 , android: 2}), // another way
        borderColor: Colors.accent500,
        padding: 12,
        maxWidth: '80%',
        width: 300,        
    }
  })
  
