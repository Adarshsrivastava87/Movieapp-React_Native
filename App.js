import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Text, Image, StyleSheet, View } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home_Tab from "./Movieapp/tab";
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator >
        <Drawer.Screen
          name="profile"
          component={Home_Tab}
          options={{
            // headerShown: false,
            title: 'profile',
            drawerIcon: () => (
              <Image style={styles.image}
                source={require("../myapp/assets/Adarsh.jpg")}
              />
            )
          }}

        />
        <Drawer.Screen
          name="DashBoard"
          component={Home_Tab}
          options={{
            title: 'Home',
            drawerIcon: () => (
              <Image style={styles.icon}
                source={require("../myapp/assets/home.png")}
              />
            )
          }}

        />
        <Drawer.Screen
          name="Saved Videos"
          component={Saved_Videos}
          options={{
            title: 'Saved Videos',
            drawerIcon: () => (
              <Image style={styles.icon}
                source={require("../myapp/assets/SaveVideo.png")}
              />
            )
          }}

        />
        <Drawer.Screen name="Favourite Videos" component={Favourite_Videos} options={{
          title: 'Favourite Videos',
          drawerIcon: () => (
            <Image style={styles.icon}
              source={require("../myapp/assets/FaVideos.png")}
            />
          )
        }} />
        <Drawer.Screen name="Like Videos" component={Like_Videos} options={{
          title: 'Like Videos',
          drawerIcon: () => (
            <Image style={styles.icon}
              source={require("../myapp/assets/like.png")}
            />
          )
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function Saved_Videos() {
  return (<View style={styles.container}><Text >Saved Videos</Text></View>)
}
function Favourite_Videos() {
  return (<View style={styles.container}><Text >Favourite Videos</Text></View>)
}
function Like_Videos() {
  return (<View style={styles.container}><Text >Like Videos</Text></View>)
}
const styles = StyleSheet.create({
  icon: {
    height: 50,
    width: 50
  },
  image: {
    height: 160,
    width: 170,
    marginLeft: 20,
    borderRadius:100
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})

