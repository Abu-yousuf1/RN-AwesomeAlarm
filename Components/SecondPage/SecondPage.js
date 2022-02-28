import { View, Text,StyleSheet,TextInput,Button } from 'react-native'
import React,{ useMemo,useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import SecondTitle from '../SecondTitle';
import Calendar from '../Calendar';
import DatePicker from 'react-native-date-picker'




export default function SecondPage() {
  const [date, setDate] = useState(new Date())
  return (
    <View>
          <View style={{flexDirection:'row',marginTop:10,justifyContent:'center'}}>
      <Icon name="alarm" color="white" size={30}/> 
      <Text style={styles.heading}>Quix</Text>
      </View>

    
    <View style={{width:'100%',padding:10}}> 
    <SecondTitle title="Choose a time to wake up"/>

    <DatePicker
    mode="time"
     date={date}
     onDateChange={setDate} />

    <Calendar/>
    <View style={styles.textAreaContainer} >
      <TextInput
          style={styles.textArea}
          underlineColorAndroid="transparent"
          placeholder="Type something"
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline={true}
        />
  </View>

  {/* <Button title="All Set"/> */}

    </View>
    </View>
  )
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical:50
  },
  timeValue: {
    marginVertical: 20,
    fontSize:30,
  },
    heading:{
        fontSize:25,
        fontWeight:'600',
        color:'white'
      },
      textAreaContainer: {
        borderColor: "#767577",
        borderWidth: 1,
        borderRadius:20,
        padding: 5
      },
      textArea: {
        height: 150,
        color:'white',
        justifyContent: "flex-start",
        textAlignVertical: 'top',
       
      }
})