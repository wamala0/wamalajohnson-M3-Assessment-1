import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import maid from '../src/maid.jpg';
 class Details extends Component {
  render(){
    return(
      
      <View style={styles.container}>
        <div>
        <img src={maid} alt=""/>
        </div>
          <Text style={{ fontSize: 20, color: "green" }}>
            You are on details page
          </Text>
          <Button
            title="Back to home" onPress={() => this.props.navigation.navigate('Home')} />

        </View>
    )
  }
 }


const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: 'skyblue',
   justifyContent: 'center',
   alignItems: 'center',
  }
});
export default Details;