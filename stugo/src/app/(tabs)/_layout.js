import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import home from "./home";
import community from "./community";
import profile from "./profile";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: "#5D3D00" },
        tabBarIcon: ({ color, size }) => {
          let iconSource;

          if (route.name === "explore") {
            // Use MaterialCommunityIcons for 'explore'
            iconSource = require("./stugo-car.png");
          } else if (route.name === "community") {
            // Use your custom image for 'community'
            return (
              <MaterialCommunityIcons name="web" color={color} size={size} />
            );
          } else if (route.name === "profile") {
            // Use MaterialCommunityIcons for 'profile'
            return (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            );
          }

          return (
            <Image
              source={iconSource}
              style={{ tintColor: color, width: size, height: size }}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: "white",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="explore"
        component={home}
        options={{
          tabBarLabel: "Explore",
        }}
      />
      <Tab.Screen
        name="community"
        component={community}
        options={{
          tabBarLabel: "Community",
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="profile"
        component={profile}
        options={{
          tabBarLabel: "Profile",
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
