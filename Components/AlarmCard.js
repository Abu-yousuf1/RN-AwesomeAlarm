import { View, Text,StyleSheet,Switch } from 'react-native'
import React,{useState} from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Calendar from './Calendar';

export default function AlarmCard({title, time,abbreviation}) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
      <View>
    <View style={styles.cardContainer}>
    <Icon name="alarm" color="white" size={20}/>
        <Text style={styles.alarmTitle} >{title}</Text>
    </View>
        <View style={styles.cardContainer2}>
            <View style={{ flexDirection:'row', justifyContent:'space-between',}}>
            <Text style={styles.timePicker} >{time} <Text style={styles.am} >{abbreviation}</Text></Text>
            <Switch
            trackColor={{ false: "#767577", true: "#FF6A00" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
         /> 
            </View>
       <Calendar/>
    </View>
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
