import  React from 'react'
import { StyleSheet, Text, View, TextInput,TouchableOpacity,Dimensions } from 'react-native';
import maid from '../src/maid.jpg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <div>
        <img src={maid} alt=""/>
        </div>
     <Text style={styles.welcome}> SignUp View</Text>
     <TextInput
     style = {styles.input}
     placeholder=" Enter First Name"
     />
     <TextInput
     style = {styles.input}
     placeholder="Enter Last Name"
     />
     <TextInput
     style = {styles.input}
     placeholder="Enter Email"
     />
     <TextInput
     style = {styles.input}
     underlineColorAndroid='rgba(0,0,0,0)'
     placeholder="Enter Password"
     secureTextEntry={true}
     />
      <TextInput
      underlineColorAndroid='rgba(0,0,0,0)'
     style = {styles.input}
     placeholder="Confirm Password"
     secureTextEntry={true}
     />
     <View style={styles.btnContainer}>
     <TouchableOpacity style={styles.userBtn} onPress ={() => navigation.navigate('Home')}>
        <Text style={styles.btnTxt}>
            SignUp
        </Text>
     </TouchableOpacity >
     <TouchableOpacity style={styles.userBtn} onPress ={() => navigation.navigate('Login')}>
     <Text style={styles.btnTxt}>
     If you have an account? Login Here
     </Text>
     </TouchableOpacity>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 30,
    backgroundColor: '#1e90ff',
    color: "#fff",
    margin:10,
    textAlign: 'center',
    fontFamily:"DancingScript-Bold",
  },
  input: {
   width: "90%",
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
  },
  btnContainer: {
   flexDirection: "row",
   justifyContent:"space-between",
   width:"90%"
   },
   userBtn: {
    backgroundColor:"green",
     padding:15,
     width:"45%",
     margin:5,
     borderRadius:10
    },
    btnTxt: {
        fontSize: 15,
        textAlign:"center",
        fontWeight: "bold"
        },
});

export default SignUp;
