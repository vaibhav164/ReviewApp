import React from "react";
import {View, Text} from "react-native";
import {globalStyle} from "../styles/globalstyles";
const About=()=>{
    return(
        <View style={globalStyle.container}>
            <Text style={globalStyle.text}>About Screen</Text>
        </View>
    );
}
export default About;
