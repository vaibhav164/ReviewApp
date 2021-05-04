import React from "react";
import {View, StyleSheet, Text, Image, ImageBackground} from "react-native"
import { Ionicons } from '@expo/vector-icons';

const Header=(props)=>{
    const pressHandler=()=>{
        return(
           props.navigator.openDrawer()
        )
    }
    return(
            <ImageBackground style={styles.header} source={require('../assets/images/game_bg.png')}>
                <Ionicons 
                    name="menu-outline" 
                    size={30} 
                    color='#777777'
                    onPress={pressHandler}    
                />
                <View style={styles.headerTitle}>
                    <Image source={require('../assets/images/heart_logo.png')} style={styles.headerImg}/>
                    <Text style={styles.headerText}>{props.name}</Text>
                </View>
            </ImageBackground>
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
    headerTitle:{
        flexDirection:"row",
        marginHorizontal:75,
    },
    headerImg:{
        height:30,
        width:30,
        marginTop:10,
    },
    headerText:{
        fontSize:30,
        color:"#333",
        letterSpacing:1,
        fontWeight:"bold",
        paddingHorizontal:10,
    }
})
export default Header;