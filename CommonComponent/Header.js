import React from "react";
import {View, StyleSheet, Text} from "react-native"
import { Ionicons } from '@expo/vector-icons';

const Header=(props)=>{
    const pressHandler=()=>{
        return(
           props.navigator.openDrawer()
        )
    }
    return(
        <View style={styles.header}>
            <Ionicons 
                name="menu-outline" 
                size={30} 
                color='#777777'
                onPress={pressHandler}    
            />
            <View>
                <Text style={styles.headerText}>{props.name}</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    header:{
        height:"100%",
        width:"100%",
        alignItems:"center",
        justifyContent:"flex-start",
        flexDirection:"row"
    },
    headerText:{
        fontSize:30,
        color:"#333",
        letterSpacing:1,
        fontWeight:"bold",
        paddingHorizontal:20,
    }
})
export default Header;