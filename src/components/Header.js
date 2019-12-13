import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Flag from './Flag'

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.flagContainer}>
                <TouchableOpacity onPress={props.onFlagPress}
                style={styles.flagButton}>
                    <Flag bigger/>
                    <Text style={styles.flagsLeft}>  = {props.flagsLeft}</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} 
            onPress={props.onNewGame} >
                <Text style={styles.buttonLabel}>Novo Jogo</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#6e6edb',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 20,
        paddingHorizontal: 20,
        borderBottomWidth: 3,
        borderBottomColor: '#5e5edb'
    },
    flagContainer: {
        flexDirection: 'row'
    },
    flagButton: {
        justifyContent: 'center',
        minWidth: 30
    },
    flagsLeft: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 5,
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center'

    },
    button: {
       backgroundColor: '#999',
       padding: 5,
       justifyContent: 'center',
    },
    buttonLabel: {
        fontSize: 20,
        color: '#ddd',
        fontWeight: 'bold'
    }

})