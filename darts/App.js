import Setup from "./screens/setup";
import Profile from "./screens/profile";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen 
        name="Home"
        component={Setup}
        options={{title: "Game Setup"}}
      />
      <Stack.Screen 
        name="Second"
        component={Profile}
      />

    </Stack.Navigator>
  </NavigationContainer>
  );
}

