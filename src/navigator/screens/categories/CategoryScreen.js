import * as React from 'react';

import {Text, StyleSheet,View, Image} from 'react-native';


export default function CategoryScreen(){
    return (
        <>
         <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"}]}>
      {/* VISTA CATEGORI 1 */}
      <View style={{flex:1, justifyContent:"center", flexDirection:"row", alignItems:"center"}}>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={require('../../../assets/images/C.png')}/><Text>Laravel</Text></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={require('../../../assets/images/bitbucket-logo.png')}/></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={require('../../../assets/images/872px-Android_robot.svg.png')}/></View>

      </View>
      <View style={{flex:1, justifyContent:"center", flexDirection:"row", alignItems:"center"}}>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={require('../../../assets/images/C8.png')}/><Text>POst-1</Text></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={require('../../../assets/images/C.png')}/><Text>POst-2</Text></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={require('../../../assets/images/php.png')}/><Text>POst-3</Text></View>
      </View>
      <View style={{flex:1, backgroundColor:"darkorange", justifyContent:"center", flexDirection:"row", alignItems:"center"}}>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={require('../../../assets/images/git.png')}/><Text>POst-1</Text></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={require('../../../assets/images/gitlab.png')}/><Text>POst-2</Text></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={require('../../../assets/images/gi.png')}/><Text>POst-3</Text></View>
      </View>

      {/* Vista categoria 2 */}
      <View style={{flex:1, backgroundColor:"gray", justifyContent:"center", flexDirection:"row", alignItems:"center"}}>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={require('../../../assets/images/react.png')}/><Text>POST-4</Text></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={require('../../../assets/images/ude.png')}/><Text>POST-5</Text></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={require('../../../assets/images/in.png')}/><Text>POST-6</Text></View>
      </View>
      <View style={{flex:1, backgroundColor:"gray", justifyContent:"center", flexDirection:"row", alignItems:"center"}}>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={require('../../../assets/images/in.png')}/><Text>POST-4</Text></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={require('../../../assets/images/php.png')}/><Text>POST-5</Text></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={require('../../../assets/images/react.png')}/><Text>POST-6</Text></View>
      </View>
      <View style={{flex:1, backgroundColor:"gray", justifyContent:"center", flexDirection:"row", alignItems:"center"}}>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={require('../../../assets/images/react.png')}/><Text>POST-4</Text></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={require('../../../assets/images/react.png')}/><Text>POST-5</Text></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={require('../../../assets/images/react.png')}/><Text>POST-6</Text></View>
      </View>
    </View>  
        </>
    )
}


const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 20,
    },
    imageCategory: {
        width: 68,
        height: 68,
      },

});