import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import icons
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
//importar screens
import Homes from "./screens/Home";
import Login from "./screens/Login";
import Principal from "./screens/Principal";
import Formulario from "./screens/Formulario";
import RecuperarCuenta from "./screens/RecuperarCuenta";
//seccion de usuario 
import HomeClient from "./screens/HomeClient";
import PerfilUsuario from "./screens/PerfilUsuario";
import Settings from "./screens/Settings";
//sectiion de privacidad
import Privacidad from "./screens/privacidad";
//const
const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
//functiones
function MyStack()
{
    return(
<HomeStack.Navigator>
           <HomeStack.Screen 
           options={{headerShown:false}}
           name="Homes"
           component={Homes}/> 
<HomeStack.Screen 
           name="Login"
           component={Login}/> 
<HomeStack.Screen 
           name="Principal"
           component={Principal}/> 
<HomeStack.Screen 
           name="Formulario"
           component={Formulario}/> 
<HomeStack.Screen 
           name="RecuperarCuenta"
           component={RecuperarCuenta}/> 
<HomeStack.Screen 
           name="Privacidad"
           component={Privacidad}   /> 
<HomeStack.Screen 
           name="HomeClient"
           component={MyTab}
           options={{headerShown:false}}
           /> 
        </HomeStack.Navigator>
    );
}
function MyTab()
{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeClient}   
            options={{
                headerShown:false,
                tabBarIcon:({color,size})=>(
                    <Ionicons name="md-home" size={24} color="black" />
                ),}} />
<Tab.Screen name="PerfilUsuario" component={PerfilUsuario}   
            options={{
                headerShown:false,
                tabBarIcon:({color,size})=>(
                    <AntDesign name="profile" size={24} color="black" />
                ),}} />
<Tab.Screen name="Settings" component={Settings}   
            options={{
                headerShown:false,
                tabBarIcon:({color,size})=>(
                    <Ionicons name="settings" size={24} color="black" />
                ), }} />                      
        </Tab.Navigator> 
    );
}

export default function Navigattion()
{
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    );
};