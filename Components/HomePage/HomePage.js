import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View,Switch } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AlarmCard from '../AlarmCard';
import SecondTitle from '../SecondTitle';

export default function HomePage() {
    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
      <View>
          <View style={{flexDirection:'row',marginTop:10,justifyContent:'center'}}>
      <Icon name="alarm" color="white" size={30}/> 
      <Text style={styles.heading}>Quix</Text>
      </View>

    
    <View style={{width:'100%'}}>
       
    <SecondTitle title="Your Alarmss"/>
        <ScrollView >
            <View >
                <AlarmCard title="Meeting with Atul" time="2.00" abbreviation="PM"/>
                <AlarmCard title="Get ready for Work" time="7.30" abbreviation="AM"/>
            </View>
        </ScrollView>
    </View>
    <Icon name="alarm" color="white" style={{ backgroundColor:"yellow",borderRadius:50, padding:15, width:'20%',alignSelf:"center",alignItems:'flex-end',marginTop:50 }} size={40}/>
 
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
    cardContainer:{
        flexDirection:'row',
        borderTopLeftRadius:10 ,
        borderTopRightRadius:10,
        backgroundColor:'#212121',
        margin:10,
        padding:10,
       
    },
    cardContainer2:{
        marginTop:-5,
        padding:10,
        borderBottomLeftRadius:10 ,
        borderBottomRightRadius:10,
        backgroundColor:'#212121',
        margin:10,
    },
    alarmTitle:{ 
        color:'white',
        fontSize:17,
        marginLeft:5
    },
    timePicker:{
        fontSize:35,
        color:'white',
    },
    am:{
        color:'white',
        fontSize:17,
    },
   
    heading:{
        fontSize:25,
        fontWeight:'600',
        color:'white'
      }
})
