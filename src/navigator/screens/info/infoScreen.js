import * as React from 'react';
import {Text, View,StyleSheet,Image} from 'react-native';

export default function infoScreen(){

    return(
        <>
     <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"}]}>
        <Text>Informacion</Text>
      
      <View style={{flex:1, backgroundColor:"darkorange", justifyContent:"center", flexDirection:"row", alignItems:"center"}}>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}>
            <Image style={styles.imageInfo} source={require('../../../assets/images/872px-Android_robot.svg.png')}/>
        </View>
      </View>
            <Text style={styles.Text}>Por favor comunicarte a TIC</Text>
            <Text style={styles.Text}>al221910354@gmail.com</Text>
            <Text style={styles.Text}>version 1.5</Text>
    </View>  
        </>
    )
}


const styles = StyleSheet.create({
    Text:{
        textAlign: 'center',
    },
    container: {
    flex: 1,
    padding: 80,
    },
    imageInfo: {
        width: 100,
        height: 100,
      },
    });