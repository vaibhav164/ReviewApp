import React from "react";
import {StyleSheet, Button, TextInput, Text, View, TouchableOpacity} from "react-native";
import {globalStyle} from "../styles/globalstyles";
import {Formik} from "formik";
import * as yup from "yup";

const ReviewSchema=yup.object({
    plant_Name:yup.string()
                  .required()
                  .min(4),
    category: yup.string()
                 .required()
                 .min(4),
    rating: yup.string()
               .required()
               .test('is-num-1-5', "Rating must be a number between 1 and 5" , (value)=>{
                    return parseInt(value)<6 && parseInt(value)>0;
               })
})
const ReviewForm=({addPlants})=>{
    return (
        <View style={styles.container}>
            <Formik
            initialValues={{plant_Name:'', category:'',rating:0}}
            validationSchema={ReviewSchema}
            onSubmit={(values, actions)=>{
                actions.resetForm();
                addPlants(values);
            }}
            >
                {(formikValues)=>(
                    <View>
                        <TextInput placeholder="Enter Plant Name"
                        onChangeText={formikValues.handleChange('plant_Name')}
                        value={formikValues.values.plant_Name}
                        style={globalStyle.textInput}/>
                        <Text style={globalStyle.errorMsg}>{formikValues.touched.title && formikValues.errors.plant_Name}</Text>

                        <TextInput placeholder="Enter Category"
                        onChangeText={formikValues.handleChange('category')}
                        value={formikValues.values.category}
                        style={globalStyle.textInput}/>
                        <Text style={globalStyle.errorMsg}>{formikValues.touched.title && formikValues.errors.category}</Text>
                        <TextInput placeholder="Rating"
                        onChangeText={formikValues.handleChange('rating')}
                        value={formikValues.values.rating}
                        style={globalStyle.textInput}
                        keyboardType='number-pad'/>
                        <Text style={globalStyle.errorMsg}>{formikValues.touched.titel && formikValues.errors.rating}</Text>
                        <TouchableOpacity
                         onPress={formikValues.handleSubmit}>
                        <View style={styles.OpacityContainer}>
                            <Text style={{color:"#fff",fontSize:20}}>Submit</Text>
                        </View>
                        </TouchableOpacity>
                        
                        
                    </View>
                )}
            </Formik>
        </View>
    )
}
export default ReviewForm;
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
    },
    formikBox:{
        flex:1,
    },
    OpacityContainer:{
        backgroundColor:"#000",
        justifyContent:"center",
        alignItems:"center",
        height:40,
        width:100,
        alignSelf:"center"
    }
})