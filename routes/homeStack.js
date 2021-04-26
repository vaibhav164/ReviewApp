import React from "react";
import {View, Text} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import Modal from "../screens/Modal";
 const Stack =createStackNavigator();

const HomeStack=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                        name="First Screen" 
                        component={Home} 
                        options={{title:"", 
                                  headerShown:false
                                 }}
                 />
                 <Stack.Screen 
                        name="ReviewDetails"
                        component={ReviewDetails}
                        options={{ title:"",
                                   headerShown:false
                                }}        
                />
                <Stack.Screen // here the name and component name needs to be same to navigate the component
                        name="Modal"
                        component={Modal}
                        options={{ title:"",
                                   headerShown:false
                                }}        
                />
            </Stack.Navigator>
        </NavigationContainer>
    );

}
export default HomeStack;