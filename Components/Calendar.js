import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Calendar() {
  return (
    <View style={{marginVertical:20,flexDirection:'row',justifyContent:"space-between",alignItems:"center"}}>
    <Text style={{color:'white',marginRight:20}}>Repeat</Text>
    <View style={{flexDirection:"row"}}>
                    
    <Text style={styles.day}>M</Text>
    <Text style={styles.day}>T</Text>
    <Text style={styles.day}>W</Text>
    <Text style={styles.day}>T</Text>
    <Text style={styles.day}>F</Text>
    <Text style={styles.day}>S</Text>
    <Text style={styles.day}>S</Text>
    </View>
</View>
  )
}
const styles=StyleSheet.create({
    day:{
        borderColor: "#767577",
        borderRadius:50,
        paddingHorizontal:8,
        paddingVertical:3,
        marginHorizontal:5,
        borderWidth:1,
        color:"#767577",
        fontSize:15
    },
})