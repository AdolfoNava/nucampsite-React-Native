import Main from "./screens/MainComponent";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Loading from './components/LoadingComponent';
// <View style={styles.container}>
//   <Text>Open up App.js to start working on your app! Lets get it</Text>
//   <StatusBar style="auto" />
// </View>
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      </PersistGate>
    </Provider>
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
