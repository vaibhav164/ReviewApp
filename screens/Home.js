import React from "react";
import {Text, View, Button} from "react-native";
import {globalStyle} from "../styles/globalstyles";
const Home =({navigation})=>{
    const name="Vaibhav Singh";
    const age=25;
    return(
        <View style={globalStyle.container}>
            <Text style={globalStyle.text}>Home Screen</Text>
            <Button title="Details" 
                    color="#999" 
                    onPress={() => navigation.navigate('ReviewDetails', {name,age})}
                    // onPress={() => navigation.openDrawer()}
            />
        </View>
    );
}
export default Home;