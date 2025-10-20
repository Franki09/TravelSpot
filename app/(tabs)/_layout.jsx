import { Tabs } from "expo-router";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#10B981",
        },
        headerTintColor: "#121212",

        tabBarStyle: {
          backgroundColor: "#10B981",
        },
        tabBarActiveTintColor: "#F97316",
        tabBarInactiveTintColor: "#121212",
        tabBarShowLabel: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favoritos",
          tabBarIcon: ({ color, size }) => <Ionicons name="heart" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "Sobre la App",
          tabBarIcon: ({ color, size }) => <Feather name="info" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
