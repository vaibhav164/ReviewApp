import {StyleSheet} from "react-native";
export const globalStyle=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        fontSize:25,
        // backgroundColor:"coral",
    },
    heading:{
        fontSize:25,
        fontWeight:"bold",
        letterSpacing:1.
    }
})

export const images={
    rating:{
        '1':require('../assets/images/rating-1.png'),
        '2':require('../assets/images/rating-2.png'),
        '3':require('../assets/images/rating-3.png'),
        '4':require('../assets/images/rating-4.png'),
        '5':require('../assets/images/rating-5.png'),
    }
    }