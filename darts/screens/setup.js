import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text, Button, View, Pressable, TextInput, Image, TouchableOpacity} from 'react-native';
import Footer from './footer';
import Header from './header';
import { SelectList } from 'react-native-dropdown-select-list';
import React from 'react';

// let players = [
//   // {name: "vas"},
//   // {name: "av"},
//   // {name: "aq"},
// ]

let game = {
  players: [],
  dartsPerPlayer: 3,
  round: 0,
  turn: 0
}

 function Player({name}) {
  return (
    <View style={styles.player}>
      <View style={styles.pleft}>
        <Image source={require('../assets/player.png')}
          style={styles.plimages}
        /> 
        <Text style={{fontSize:30}}>{name ? name: "bruh" }</Text>
        <Image source={require('../assets/pencil.png')}
          style={styles.pimages}
        /> 
      
      </View>
      <View style={styles.pright}>
        <Image source={require('../assets/x.png')}
        style={styles.pimages}
        />  
        <Image source={require('../assets/menu.png')}
        style={styles.pimages}
        />  
      </View>
      
    </View>

    
  )
}

export default function HomeScreen({route, navigation}) {
    const [selected, setSelected] = React.useState("")
    const [dpp, setDpp] = React.useState("")
    const [pl, setPl] = React.useState([])
    const [newPlayer, setNewPlayer] = React.useState("new player")
    const [update, setUpdate] = React.useState("")

    // setPl(game.players)
    console.log(game.players)
    const data = [
        {key:'1',value:'bruh1'},
        {key:'2',value:'bruh2'},
  
    ]


  return (
    <View style={styles.container}>
        <Header />

    <View style={styles.header}>
      <Pressable onPress={() => navigation.navigate("Second", { language: "french" })}>
        <Text>Profile</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Second", { language: "french" })}>
        <Text>Settings</Text>
      </Pressable>
    </View>

    <View style={styles.header}>
      <Pressable onPress={() => navigation.navigate("Second", { language: "french" })}>
        <Text>Game Mode:</Text>
      </Pressable>
      <SelectList data={data} setSelected={setSelected} />
    </View>

    <View style={styles.header}>
      <Pressable onPress={() => navigation.navigate("Second", { language: "french" })}>
        <Text>Darts per player</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Second", { language: "french" })}>
        <TextInput style={styles.input}
        onChangeText = {(text)=>{game.dartsPerPlayer = parseInt(text)}}
        keyboardType = 'numeric'
        placeholder='darts'
        ></TextInput>
      </Pressable>
    </View>

    <View style={styles.roster}>
      {/* <Text>Roster</Text>
    <Player name={"player"}></Player> */}
    
      {game.players.map((person, index) => {
        return (
          // <Player key={index} name={person.name} style={styles.playerItem}></Player>
          <View key={index} style={styles.player}>
      <View style={styles.pleft}>
        <Image source={require('../assets/player.png')}
          style={styles.plimages}
        /> 
        <Text style={{fontSize:20}}>{person.name ? person.name: "bruh" }</Text>
        <Image source={require('../assets/pencil.png')}
          style={styles.pimages}
        /> 
      
      </View>
      <View style={styles.pright}>
        <TouchableOpacity onPressOut={() => {game.players.splice(index, 1); setPl([game.players])}}>
        <Image source={require('../assets/x.png')}
        style={styles.pimages}
        />  
        </TouchableOpacity>
        <Image source={require('../assets/menu.png')}
        style={styles.pimages}
        />  
      </View>
      
    </View>
        );
      })}
    </View>
    <View style={styles.bottomContainer1}>
    <TextInput style={styles.input2} onChangeText = {(text)=>{setNewPlayer(text);}} placeholder="player name"></TextInput>
    <View style={styles.bottomContainer}>
    <TouchableOpacity style={styles.button} onPress={() => {game.players.push({name:newPlayer, total: 0, scores: []}); console.log(game.players); setPl([game.players])}}>
    <Image source={require('../assets/add.png')}
        style={styles.images}
        />  
    <Text> Add player</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Summary", { game:game })}>
    <Image source={require('../assets/play.png')}
        style={styles.images}
        />   
      <Text>Start Game</Text>
    </TouchableOpacity> 
    </View>
    </View>
      <StatusBar hidden={true} />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:"100%",
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingLeft: "5%",
    paddingRight: "5%"
    
    
  },
  roster: {
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  playerItem: {
  },
  images:{
  height:50,
  width: 50
}
});