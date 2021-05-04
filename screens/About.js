import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {globalStyle} from "../styles/globalstyles";
import Card from "../CommonComponent/Card";
const About=()=>{
    return(
        <View style={globalStyle.container}>
            <TouchableOpacity>
                <Card>
                    <Text style={globalStyle.text}>About Screen</Text>
                </Card>
            </TouchableOpacity>
        </View>
    );
}
export default About;
