import React, { Component } from 'react'
import { View, Text, StyleSheet, } from 'react-native'

  const Details = () =>{
  
    return(
      
      <View style={styles.container}>
        
          <Text style={{ fontSize: 20, color: "green" }}>
            You are on details page
          </Text>
          
        </View>
    )
  
 }


const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: 's#fff',
   justifyContent: 'center',
   alignItems: 'center',
  }
});
export default Details;