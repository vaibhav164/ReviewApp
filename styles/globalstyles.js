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
    },
    textInput:{
        padding:5,
        borderWidth:1,
        borderColor:"#111",
        borderRadius:5,
        margin:5,
        width:350
    },
    errorMsg:{
        color:"crimson",
        fontWeight:"bold",
        marginBottom:10,
        marginTop:6,
        textAlign:"center",
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