import { View, Text, StyleSheet } from "react-native";

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
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding: 12,
        maxWidth: '80%',
        width: 300,        
    }
  })
  
