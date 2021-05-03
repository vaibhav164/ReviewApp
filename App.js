import { StatusBar } from 'expo-status-bar';
import React from 'react';
import HomeStack from "./routes/homeStack";
import DrawerStack from "./routes/DrawerNavigation"
import Home from "./screens/Home";
export default function App() {
  return (
    <DrawerStack />
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

