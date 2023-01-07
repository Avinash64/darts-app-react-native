import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text, Button, View, Pressable, TextInput, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from './header';
import Footer from './footer';

export default function Gameplay({route, navigation}) {
  const { game } = route.params;
  const [turn, setTurn] = React.useState(game.turn);
  const [round, setRound] = React.useState(game.round);
  const [vals, setVals] = React.useState({});
  const [reset, setReset] = React.useState(false);
  const [sum, setsum] = React.useState([]);
  console.log(game.players.length)
  console.log(game.dartsPerPlayer)


  function nextTurn(){
    if (game.players.length-1 === turn){
      setRound(round+1);
      setTurn(0);
    }
    else {
      setTurn(turn + 1)
    }
  }

  let darts = []
  for (let i = 0; i < game.dartsPerPlayer; i++) {
    darts.push(
      <View style={styles.dart} key={i}>
        <Text style={styles.text}>Dart {i+1}:</Text>
        <TextInput
        placeholder='#'
        clearTextOnFocus={true}
        style={styles.input}
        keyboardType = 'numeric'
        maxLength={2}
        value={vals[i]}
        onChangeText={(text) => {

          var a = vals
          vals[i] = text;
          console.log(vals[i] ? vals[i] : '', "bruh")
          console.log(vals)
          setVals(vals);
          if(reset){
            setVals({reset: Math.random()})
            setReset(false)
          }
        }}
        
        // editable={false}
        >
        </TextInput>
        <TouchableOpacity style={styles.multiplierSelected}><Text style={styles.text}>x1</Text></TouchableOpacity>
        <TouchableOpacity style={styles.multiplier}><Text style={styles.text}>x2</Text></TouchableOpacity>
        <TouchableOpacity style={styles.multiplier}><Text style={styles.text}>x3</Text></TouchableOpacity>
      </View>
    )
    
  }

  return (
    <View style={styles.screen}>
      <Header/>
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.text}>Round {round}</Text>
          <Text style={styles.text}>{game.players[turn].name}</Text>
        </View>
        
        <View style={styles.middle}>
          
          {darts}
        </View>

        <View style={styles.bottom}>
          <TouchableOpacity onPressOut={() => {
                if (game.players.length-1 === turn){
                  setRound(round+1);
                  setTurn(0);
                }
                else {
                  setTurn(turn + 1)
                }
                // darts.forEach(element => {
                //   console.log(element)
                // });
                console.log(vals,3838)
                let tot = 0
                Object.keys(vals).forEach(element =>{
                  if(element!='reset'){
                    console.log(vals[element])
                  tot += parseInt(vals[element])
                  }
                })
                console.log(tot)
                setVals({"0": "0", "1": "", "2": "","3": ""})
                console.log(vals)
                setReset(true)
          }}>
            <Text style={styles.text}>{(game.players.length-1 === turn) ? "Next Round":"Next"}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: "space-between",
    height: "91%",
    alignItems: 'center',
    width: "100%"
  },
  screen: {
    flex: 1,
    display: "flex",
    flexDirection: 'column',
    justifyContent: "space-between",
    width: "100%"
  },
  dart: {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    width: "80%"
  },
  middle: {
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'space-between',
    width: "100%",
    height: "60%"
  },
  text: {
    fontSize: 35,
    textAlign: 'center'
  },
  input: {
    fontSize: 30,
    backgroundColor: "#ebebeb",
    width: "15%",
    height: "100%",
    borderColor: "green",
    borderWidth: 3,
    borderRadius: 5
  },
  multiplier: {
    borderColor: "green",
    borderWidth: 3,
    borderRadius: 5
  },
  multiplierSelected: {
    borderColor: "green",
    borderWidth: 3,
    borderRadius: 5,
    backgroundColor: "#dce4d9",
  }
});
