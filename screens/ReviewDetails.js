import React from 'react';
import { View, Text, Button} from "react-native";
import {globalStyle} from "../styles/globalstyles";
import Modal from "./Modal";
const ReviewDetails=({route, navigation})=>{
    const {name, age}=route.params;
    
    return(
        <View style={globalStyle.container}>
            <Text style={globalStyle.text}>{JSON.stringify(name)}</Text>
            <Text style={globalStyle.text}>{JSON.stringify(age)}</Text>
            <Button title="Details" 
                    color="#999" 
                    onPress={() => navigation.navigate(Modal)}
            />
        </View>
    );
}
export default ReviewDetails;
