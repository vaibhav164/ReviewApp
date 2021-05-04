import React from "react";
import {StyleSheet, View} from "react-native";
const Card=(props)=>{
    return(
        <View style={styles.card}>
            <View style={styles.cardContainer}>
                {props.children}
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    card:{
        backgroundColor:"#fff",
        borderRadius:10,
        elevation:10,
        shadowColor:"#333",
        shadowOpacity:1,
        shadowRadius:5,

    },
    cardContainer:{
        justifyContent:"center",
        alignItems:"center",
        marginHorizontal:4,
        marginVertical:6
    }}
);
export default Card;