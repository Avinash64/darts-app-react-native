import { Text, View, TextInput } from 'react-native'
import React, { Component } from 'react'

export class Gameplay extends Component {
  render() {
    return (
      <View>
        <Text>Gameplay</Text>
        <TextInput
        style={{height: 500, width: 500, backgroundColor: "gray"}}
        onChangeText={(text) => console.log(this.value)}
        ></TextInput>
      
      </View>

    )
  }
}

export default Gameplay