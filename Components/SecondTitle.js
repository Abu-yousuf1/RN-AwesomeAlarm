import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function SecondTitle({title}) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}
const styles=StyleSheet.create({
    title:{
        color:'white',
        fontWeight:"500",
        fontSize:18,
        textAlign:'center',
        marginTop:20,
        marginBottom:50,
    },
})