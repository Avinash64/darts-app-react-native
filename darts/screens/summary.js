import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text, Button, View, Pressable, TextInput, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from './header';
import Footer from './footer';

export default function Summary({route, navigation}) {
  const { game } = route.params;
  const [round, setRound] = React.useState(0)

  const [pl, setPl] = React.useState(game.players)

  console.log(game.players, 1)
  return (
    <View style={styles.gameplay}>
      <Header />
      <View style={styles.container}>
      <TouchableOpacity style={styles.toggle}>
          <View style={{display:"flex", flexDirection:"column", alignItems:'center'}}>
          <Text>Toggle All</Text>
          <Image source={require('../assets/toggle.png')}
          style={styles.timages} 
        
        />
        </View> 
      </TouchableOpacity>
      
      {game.players.map((person, index) => {
        return (
          // <Player key={index} name={person.name} style={styles.playerItem}></Player>
          <View key={index} style={styles.player}>
      <View style={styles.pleft}>
        <Image source={require('../assets/player.png')}
          style={styles.plimages} 
        /> 
        <Text style={{fontSize:20}}>{person.name ? person.name: "bruh" }</Text>
      
      </View>
      <TouchableOpacity onPressOut={() => {game.players[index].total+=1;game.players[index].scores.push(1); setPl([game.players])}}>
            <Text style={styles.score}>{(person.total || person.total===0) ? person.total: "Score"}</Text>
      </TouchableOpacity>
      <View style={styles.pright}>
        <TouchableOpacity onPressOut={() => { setPl([game.players])}}>
        <Text style={styles.table}>{person.scores ? person.scores.join(', '): "No Throws Yet"}</Text>
        </TouchableOpacity>

      </View>
      
    </View>
        );
      })}
      {/* <Text>{JSON.stringify(game.players)}</Text> */}
      <View style={styles.buttons}>
      <TouchableOpacity  style={styles.button} onPress={() => {
        var p2 = []
        game.players.forEach(element => {
          p2.push({name:element.name, total: 0, scores: []})
        }); 
        game.players=p2
        navigation.navigate("Setup", { game:game})
      }}>
          <Text >End Game</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate("Gameplay", { game:game })}>
          <Text >Continue</Text>
      </TouchableOpacity>
      </View>
      </View>
      <Footer style={styles.footer}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  toggle: {
    display: "flex",
    flexDirection: 'row-reverse',
    width: "90%",
    paddingTop: 20,
    marginBottom: -75
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: "100%"
  },
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
  table: {
    backgroundColor: "white",
    padding: 10,
    paddingHorizontal: 50
  },  
  score: {
    backgroundColor: "white",
    padding: 10,
    paddingHorizontal: 10
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
    backgroundColor:"rgb(225, 226, 233)",
    width: 150,
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    display: "flex",
    alignItems: 'center',
    flexDirection:'column',
    justifyContent: 'center',
    marginBottom: "10%"
  },
  player : {
    backgroundColor: "#84dbdb",
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    maxHeight: "10%",
    marginHorizontal: "5%",
    alignItems: 'center',
    width: "100%"

  },
  pimages: {
    height: 40,
    width: 40
  },  
  timages: {
    height: 40,
    width: 40
  },
  plimages: {
    height: 40,
    width: 40,
    marginBottom: "-10%"
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
