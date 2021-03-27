import * as React from 'react';
import {Text, View,StyleSheet, Image} from 'react-native';
//-------------------------------------------------------------------------------------
 /* Declaración De Nuestro función Home Screenjs */
 


export default function HomeScreen(){

    return(
        <>
     <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"}]}>

      <View style={{ flex: 1, backgroundColor: "red", justifyContent:"center",}}><Text>Slider</Text></View>      

      <Text>V2-Base De Datos</Text>
      <View style={{flex:1, backgroundColor:"darkorange", justifyContent:"center", flexDirection:"row", alignItems:"center"}}>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Text>POst-1</Text></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Text>POst-2</Text></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Text>POst-3</Text></View>
      </View>

      {/* Vista categoria 2 */}
      <Text>V3-Redes de comunicacion</Text>
      <View style={{flex:1, backgroundColor:"gray", justifyContent:"center", flexDirection:"row", alignItems:"center"}}>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Text>POST-4</Text></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Text>POST-5</Text></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Text>POST-6</Text></View>
      </View>
    </View>  
        </>
    )
}


 const styles = StyleSheet.create({
     container: {
     flex: 1,
     padding: 20,
     }
     });