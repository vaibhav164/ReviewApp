import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Image} from "react-native";
import {globalStyle, images} from "../styles/globalstyles";
import Modal from "./Modal";
import Card from "../CommonComponent/Card";
const ReviewDetails=({ route, navigation })=>{
    const { item } = route.params;
    const rate =JSON.stringify(item.rating);
    return(
       
        <View style={globalStyle.container}>
            <View style={styles.cardBox}></View>
            
                <Card>
                    <TouchableOpacity  onPress={() => navigation.navigate(Modal)}>
                        <Text style={globalStyle.text}>{JSON.stringify(item.category)}</Text>
                        <Text style={globalStyle.text}>{JSON.stringify(item.rating)}</Text> 
                        <View style={styles.imgContainer}>
                            <Text style={globalStyle.text}>Review:</Text> 
                            <Image source={images.rating[rate]}
                                style={styles.img}
                            />  
                        </View>    
                    </TouchableOpacity>           
                </Card>
           
        </View>
    );
}
export default ReviewDetails;
const styles=StyleSheet.create({
    img:{
        marginTop:10,
    },
    imgContainer:{
        flexDirection:"row",
    },
});