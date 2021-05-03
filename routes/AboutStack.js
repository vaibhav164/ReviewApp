import React from "react";
import {createStackNavigator } from '@react-navigation/stack';
import Header from "../CommonComponent/Header";
import About from "../screens/About";
const Stack=createStackNavigator();
const AboutStack =({navigation})=>{
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="About"
                component={About}
                options={{
                    headerTitle:()=> <Header name={"About"} navigator={navigation}/>
                }} 
            />
        </Stack.Navigator>
    )
}
export default AboutStack;