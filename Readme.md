# Review App:-

1. **Global Styles** can be declared as general style format for all the js files of the project .
2. For this One have to first make a js file with appropriate name and then make it import StyleSheet in it and deleclare const style in a format as below

```export const globalStyle=StyleSheet.create({
    container:{
        flex:1,
    },
    text:{
        fontSize:25,
    }
})
```

and then we can use it in any file when required by importing it as
`import {globalStyle} from "../styles/globalstyles";`
and to use the container or text obj of globalstyle we can use as below
`<View style={globalStyles.container}>`

## 1. React Navigation:-

- React Navigation is a 3rd party Library.
- To use React navigation ve have to first install navigation packages and necessary dependencies of React navigation
- In React Navigation there are many types of navigation such as
  -StackNavigation
  -DrawerNavigation
  -TopNavigation
  -BottomNavigation

  **Stack Navigation**

  - To use Stack Navigation we have to install libbrary of stack naviagation that is `@react-navigation/stack`
    after that we can implement the the navigation stack and react navigation features to our project.
    For this we have to import first navigation container as `import { NavigationContainer } from '@react-navigation/native';`
    and to implement Stack navigation we need import the createStackNavigator in our file
    `import { createStackNavigator } from '@react-navigation/stack';`.

- Then follow thw below steps to use it:-

1. First create a const as of any name to call function createStackNavigator() as below
   `const Stack =createStackNavigator();`
2. Then in the default function create a Navigation Container and in Container create a navigatoras of above using stack as `<Stack.Navigator>` and close it.
3. Inside this call stack.Screen Tab as `<Stack.Screen>` and inside screen describe the page which you want to render as below

```<Stack.Screen
                        name="First Screen"
                        component={Home}
                        options={{title:"",
                                  headerShown:false
                                 }}
                 />
```

- In above the screen have name as First Screen and when its called it calls the component Home
  now the screen which is mestion first in stac.Navigator will default viewed first as in the above case Home and from home to navigate to other screen do this as below

```<Button title="Details"
                    color="#999"
                    onPress={() => navigation.navigate('ReviewDetails', {name,age})}
            />
```

and when we press the button we can navigate the ReviewDetails component

# Passing the data between Component Screens:-

1. To pass data along with navigation prop we use jsx ab below
   ` onPress={() => navigation.navigate('ReviewDetails', {name,age})`
   in above name and age is passe which were deleclared in the respective function
   now by this the data is passed from default function to **ReviewDetails** component now to recieve it in ReviewDetails

```const ReviewDetails=({route, navigation})=>{
    const {name, age}=route.params;

    return(
        <View style={globalStyle.container}>
            <Text style={globalStyle.text}>{JSON.stringify(name)}</Text>
            <Text style={globalStyle.text}>{JSON.stringify(age)}</Text>
```

in above 1st line we called rioute as prop along with navigation
now to use name and age passed in ReviewDetails Destructure them as in line 2 and to use them
we have to use {JSON.stringify(name)} method as an JSX obj.
