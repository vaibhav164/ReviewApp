import React, {useState} from "react";
import {Text, View, FlatList, TouchableOpacity, StyleSheet} from "react-native";
import {globalStyle} from "../styles/globalstyles";
const Home =({navigation})=>{
    const [plants, setplants] = useState([
        {plant_Name:"Rose", category:"Flowers", rating:5,key:1},
        {plant_Name:"Marrygold", category:"Flowers",rating:4,key:2},
        {plant_Name:"Champa", category:"Flowers",rating:4,key:3},
        {plant_Name:"SunFlower", category:"Flowers",rating:5,key:4},
        {plant_Name:"Lily", category:"Flowers",rating:2,key:5},
    ]);
    return(
        <View style={globalStyle.container}>
            <View style={styles.container}>
                <FlatList
                    data={plants}
                    renderItem={({item})=>(
                    <TouchableOpacity onPress={()=>{navigation.navigate('ReviewDetails', {item})}}>    
                        <View style={styles.TextView}>  
                            <Text style={globalStyle.heading}>{item.plant_Name}</Text>
                        </View>
                    </TouchableOpacity>  
                    )}
                />
            </View>  
        </View>
    );
}
export default Home;
const styles=StyleSheet.create({
    container:{
        marginTop:30,
    },
    TextView:{
        borderRadius:5,
        borderWidth:1,
        marginVertical:5,
        width:"100%",
        padding:3,
    },
})