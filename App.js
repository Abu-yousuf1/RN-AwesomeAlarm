import React from 'react';

import {StyleSheet, View, Button, Text, SafeAreaView} from 'react-native';
import HomePage from './Components/HomePage/HomePage';
import SecondPage from './Components/SecondPage/SecondPage';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
     
<SecondPage/>
    {/* <HomePage/> */}
    
   
    </SafeAreaView>
  );
 
};
const styles=StyleSheet.create({
container:{
 flex:1,
 alignItems:'center',
 backgroundColor:'#000000',
 paddingHorizontal:0,
 marginHorizontal:0,

},

})
export default App;