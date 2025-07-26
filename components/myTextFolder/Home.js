import React from "react";

import { View, Text, ScrollView, SafeAreaView, StyleSheet, Image,  } from "react-native";

const Home = () =>{
    return(
        <ScrollView>
            <SafeAreaView >
                <View>
                    <Text style = {styles.headerText}>Flat Cards</Text>
                </View>
                <View style = {styles.container}>
                   <View style = {[styles.redCard, styles.cardOne]}>
                        <Text>Red</Text>
                   </View>
                    <View style = {[styles.redCard, styles.blueOne]}>
                        <Text>Blue</Text>
                   </View>
                    <View style = {[styles.redCard, styles.greenOne]}>
                        <Text>Green</Text>
                   </View>
                </View>
                  <View style = {styles.container}>
                   <View style = {[styles.redCard, styles.cardOne]}>
                        <Text>Red</Text>
                   </View>
                    <View style = {[styles.redCard, styles.blueOne]}>
                        <Text>Blue</Text>
                   </View>
                    <View style = {[styles.redCard, styles.greenOne]}>
                        <Text>Green</Text>
                   </View>
                </View> 
                    <View> 
                        <Text style = {styles.headerText}> Local</Text>
                 <Image source={{uri: 'https://images.unsplash.com/photo-1682686581663-179efad3cd2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8'}}
                  
           style={styles.image} /> 
           <Text style = {styles.seaText}> Sea Water Bodies</Text>
           <Text style = {styles.seaDescription}>to show the individual deprecation warnings and determine if they come from your own scripts or plugins.</Text>

        </View>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create(
    {
   headerText:{
    flex:1,
    fontSize:20,
    fontWeight:34,
    paddingHorizontal:155,
    marginTop:72,
   
   },
   container:{
    flex:1,
    alignContent:'center',
    justifyContent:'center',
    flexDirection:'row'
   },

   redCard:{
  flex:1,
  height:100,
  width: 100,
  margin:10,
  color:'#ffff',
  alignItems:'center',
  justifyContent:'center'
   },
   cardOne:{
    backgroundColor:'#FF0000',
   },
     blueOne:{
    backgroundColor:'#16a4e6ff',
   },
     greenOne:{
    backgroundColor:'#00ff2aff',
   },
   image:{
    width:600,
    height:200,
    
   },
   seaText: {
     fontSize:20,
    
   },
   seaDescription:{
    marginHorizontal: 8,
    fontSize: 15

   }


    }
)

export default Home;