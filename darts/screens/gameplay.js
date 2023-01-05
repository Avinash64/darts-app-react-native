import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text, Button, View, Pressable, TextInput, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from './header';
import Footer from './footer';

export default function Gameplay({route, navigation}) {
  const { players } = route.params;
  const [round, setRound] = React.useState(0)

  console.log(players, 1)
  return (
    <View style={styles.gameplay}>
      <Header />
      <View style={styles.container}>
      <Text>Profile</Text>
      {players.map((person, index) => {
        return (
          // <Player key={index} name={person.name} style={styles.playerItem}></Player>
          <View key={index} style={styles.player}>
      <View style={styles.pleft}>
        <Image source={require('../assets/player.png')}
          style={styles.plimages}
        /> 
        <Text style={{fontSize:20}}>{person.name ? person.name: "bruh" }</Text>
      
      </View>
      <TouchableOpacity >
          <Text>Score</Text>
      </TouchableOpacity>
      <View style={styles.pright}>
        <TouchableOpacity onPressOut={() => {players.splice(index, 1); setPl([players])}}>

        </TouchableOpacity>

      </View>
      
    </View>
        );
      })}
      <Text>{JSON.stringify(players)}</Text>
      </View>
      <Footer style={styles.footer}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "91%",
    display:"flex",
    flexDirection: 'column',
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  gameplay: {
    flex: 1,
    height:"100%",
    backgroundColor: '#fff',
    justifyContent: 'space-between', 

  },
  header:{
    
  },roster: {
    backgroundColor: "#f0ffff",
    height: "50%",   
    display:'flex',
    flexDirection:"column",
    justifyContent: 'space-evenly',
    borderStyle: "solid",
    borderTopWidth: 1
  },

  input: {
    borderWidth: 1,
    width: 150,
    textAlign: 'center'
  }, 
   input2: {
    borderWidth: 1,
    textAlign: 'center',
    height: 30,
    fontSize: 25
  },
  bottomContainer: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 30
  },
  button :{
    height:100,
    backgroundColor:"rgb(225, 226, 233)",
    width: 100,
    borderRadius: 20,
    display: "flex",
    alignItems: 'center',
    flexDirection:'column',
    justifyContent: 'center'
  },
  player : {
    backgroundColor: "#84dbdb",
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    maxHeight: "10%",
    marginHorizontal: "5%",
    alignItems: 'center'

  },
  pimages: {
    height: 40,
    width: 40
  },
  plimages: {
    height: 50,
    width: 50
  },
  pright: {
    display: 'flex',
    flexDirection: 'row'
  },
  pleft: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  playerItem: {
  },
  images:{
  height:50,
  width: 50
}});
