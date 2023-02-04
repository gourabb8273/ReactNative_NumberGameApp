import {View, Text, StyleSheet } from 'react-native';

import Colors from '../../constants/color';

function GuessLogItem({roundNumber, guess}){
    return (
        <View style={styles.listItem}>
            <Text  style={styles.testItem}>#{roundNumber}</Text>
            <Text  style={styles.testItem}>Opponent's Guess: {guess}</Text>
        </View>
    )
}

export default GuessLogItem;

const styles = StyleSheet.create({
    listItem:{
        borderColor: Colors.primary800,
        borderWidth: 1,
        padding: 12,
        borderRadius: 40,
        marginVertical: 8,
        backgroundColor: Colors.accent500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width:0 ,height:0},
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },
    testItem:{
        fontFamily:'open-sans'
    }
})