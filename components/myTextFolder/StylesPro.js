import React from "react";

import {View,Text,SafeAreaView,StyleSheet} from  "react-native";




const StylePro = () =>{
    return(
        <SafeAreaView>
            <View style = {Style.container}>
       <Text style = {Style.redd}>Hello I am Red</Text>
       <Text style = {Style.Blue}>Hello I am Blue</Text>
       <Text style = {[ Style.redd, Style.Blue ]}>Hello I am Green</Text>
            </View>
        </SafeAreaView>
    )
}

export default StylePro ;

const  Style = StyleSheet.create({
    container:{
          marginTop:90,
          alignItems:'center'
    },
    redd: {
         color: 'red',
         fontSize:20,
         backgroundColor:'blue',
    },
    Blue:{
        color:'blue',
        fontSize:17,
        backgroundColor:'red',
        height:'29%',

    }


})
