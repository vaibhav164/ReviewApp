import React from "react";
import {Text, View} from "react-native";
import {globalStyle} from "../styles/globalstyles";
const Modal=()=>{
    return(
        <View style={globalStyle.container}>
            <Text style={globalStyle.text}>Modal</Text>
        </View>
    );
}
export default Modal;