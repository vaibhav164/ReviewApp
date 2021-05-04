import React from "react";
import {Text, View, TouchableOpacity} from "react-native";
import {globalStyle} from "../styles/globalstyles";
import Card from "../CommonComponent/Card";
const Modal=()=>{
    return(
        <View style={globalStyle.container}>
            <TouchableOpacity>
                <Card>
                    <Text style={globalStyle.text}>Modal</Text>
                </Card>
            </TouchableOpacity>
            
        </View>
    );
}
export default Modal;