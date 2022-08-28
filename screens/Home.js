import  React from 'react'
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import maid from '../src/maid.jpg';

const Home= ({navigation}) => {
  return (
    <View style={styles.container}>
      <div>
        <img src={maid} alt=""/>
        </div>
     <Text style={{fontSize: 30, color:"blue"}}> Blogs</Text>
    <Text style={{fontSize: 30, color:"blue"}}> Join Us</Text>
    <Text style={{fontSize: 30, color:"blue"}}> Find Maids</Text>
    <Text style={{fontSize: 30, color:"blue"}}> Contact us</Text>
    <Text style={{fontSize: 30, color:"blue"}}> About us</Text>
    
     <View style={styles.btnContainer}>
     <TouchableOpacity style={styles.userBtn} onPress ={() => navigation.navigate('Details')}>
        <Text style={styles.btnTxt}>
            See Details Page
        </Text>
     </TouchableOpacity >
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    justifyContent: 'center',
    
    },
    userBtn: {
     backgroundColor:"green",
     underlineColorAndroid:'rgba(0,0,0,0)',
      padding:10,
      width:"100%"
      
     },
     btnTxt: {
         fontSize: 15,
         textAlign:"center",
         fontWeight: "bold"
         },
});

export default Home;