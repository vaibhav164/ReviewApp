import React, {useState} from "react";
import {Text, View, FlatList, TouchableOpacity, StyleSheet, Modal, Keyboard, TouchableWithoutFeedback} from "react-native";
import {globalStyle} from "../styles/globalstyles";
import { Ionicons } from '@expo/vector-icons';
import ReviewForm from "./reviewForm";
const Home =({navigation})=>{
  
    const [Plants, setPlants] = useState([
        {plant_Name:"Rose", category:"Flowers", rating:5,key:1},
        {plant_Name:"Marrygold", category:"Flowers",rating:4,key:2},
        {plant_Name:"Champa", category:"Flowers",rating:4,key:3},
        {plant_Name:"SunFlower", category:"Flowers",rating:5,key:4},
        {plant_Name:"Lily", category:"Flowers",rating:2,key:5},
    ]);
  
    const addPlants=(values)=>{
        values.key=Math.floor(Math.random())+6;
        setPlants((currenList)=>{
            return (
                [values,...currenList]
            )
        })
        setModalOpen(false);
    }
    
    const [ModalOpen, setModalOpen] =useState(false);
    
    return(
            <View style={globalStyle.container}>

                <Modal visible={ModalOpen} animationType='slide'>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.modalContent}>
                                <Ionicons 
                                name="close-outline"
                                size={40}
                                onPress={()=>{setModalOpen(false)}}
                                style={{...styles.modalClose, ...styles.modalOpen}}
                                />
                                <ReviewForm  addPlants={addPlants}/>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
                    <Ionicons 
                    name="add-outline"
                    size={40}
                    style={styles.modalOpen}
                    onPress={()=>{setModalOpen(true)}}
                    />
                <View style={styles.container}>
                    <FlatList
                        data={Plants}
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
    modalContent:{
        flex:1,
        alignItems:"center",
        marginHorizontal:20,
    },
    modalClose:{
        marginBottom:20,
        marginTop:40,
    },
    modalOpen:{
        marginTop:60
    }
})