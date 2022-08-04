import React from "react";
import {  StyleSheet,Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HollywoodMovies from "./HollWood";
import BollywoodMovies from "./Bollywood";
const Tab = createBottomTabNavigator();
export default function Home_Tab () {
    return (
      <Tab.Navigator  >
        <Tab.Screen name="Hollywood" component={HollywoodMovies} options={{
                        headerShown: false,
                        tabBarIcon: () => (
                            <Image source={require('../assets/cam.png')} style={styles.icon} />
                        )
                    }}/>
        <Tab.Screen name="Bollywood" component={BollywoodMovies} options={{
                        headerShown: false,
                        tabBarIcon: () => (
                            <Image source={require('../assets/p.png')} style={styles.icon} />
                        )
                    }}/>
      </Tab.Navigator>
    );
  }
  const styles=StyleSheet.create({
    icon:{
      height: 38, width: 40
    }
  }) 