import  React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Dimensions,image} from 'react-native';
import { FlatList, SafeAreaView } from 'react-native-web';
import serviceData from './Data';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Home= ({navigation}) => {
  return (
    <SafeAreaView>
<FlatList
data={serviceData}
contentInset={{padding:12}}
renderItem={({item}) =>{
  return(
    <TouchableOpacity style={{margin:10, height:windowHeight*0.2,backgroundColor:item.bgColor,borderRadius:10}}>
      <View style={{backgroundColor:item.bgColor}}>
      <Text style={styles.category}>
        {item.category}
      </Text>
      <Text style={styles.name}>
        {item.name}
      </Text>
      <Text>
        {item.numberCompany}
      </Text>
      </View>
      
    </TouchableOpacity>
  )
}}
>
</FlatList>
<View style={styles.btnContainer}>
     <TouchableOpacity style={styles.userBtn} onPress ={() => navigation.navigate('Details')}>
        <Text style={styles.btnTxt}>
            See Details Page
        </Text>
     </TouchableOpacity >
     </View>
 </SafeAreaView>
  );
};

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
      width:"30%",
      margin:15,
     borderRadius:10
      
     },
     btnTxt: {
         fontSize: 15,
         textAlign:"center",
         fontWeight: "bold"
         },
    category:{
       fontSize:24,
       fontWeight:200,
       color:'white'
      },
      name:{
       fontSize:18,
       color:'white'
      },
});

export default Home;