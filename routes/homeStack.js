import React from "react";
import {createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import Modal from "../screens/Modal";
import Header from "../CommonComponent/Header";
import About from "../screens/About";
 const Stack =createStackNavigator();

const HomeStack=({navigation})=>{
    return(
            <Stack.Navigator>
                <Stack.Screen 
                        name="Home" 
                        component={Home}
                        options={{
                           headerTitle:()=> (<Header name={"Home"} navigator={navigation} />)
                        }} 
                       
                 />
                 <Stack.Screen 
                        name="ReviewDetails"
                        component={ReviewDetails}
                        options={{ 
                                    title:"Review Screen"
                                }}        
                />
                <Stack.Screen // here the name and component name needs to be same to navigate the component
                        name="Modal"
                        component={Modal}
                        options={{ 
                                    title:"Modal Screen"
                                }}        
                />
                <Stack.Screen // here the name and component name needs to be same to navigate the component
                        name="About"
                        component={About}
                        options={{
                                     headerTitle:()=> <Header />
                                }}        
                />
            </Stack.Navigator>
    );

}
export default HomeStack;