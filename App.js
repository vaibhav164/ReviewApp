import { StatusBar } from 'expo-status-bar';
import React from 'react';
import HomeStack from "./routes/homeStack";
import Home from "./screens/Home";
export default function App() {
  return (
    <HomeStack />
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

