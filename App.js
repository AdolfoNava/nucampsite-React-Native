import Main from "./screens/MainComponent";
import { NavigationContainer } from "@react-navigation/native";
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app! Lets get it</Text>
    //   <StatusBar style="auto" />
    // </View>
export default function App() {
  return (
  <NavigationContainer>
    <Main/>
  </NavigationContainer>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
