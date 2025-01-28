import React, { useEffect, useState } from "react";
import { Tabs, useRouter } from "expo-router";

// Tab Icons :
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { getLocalStorage } from "../../service/Storage";

export default function TabLayout() {
  const router = useRouter();

  const getUser = async () => {
    const userInfo = await getLocalStorage("userDetails");

    if (!userInfo) {
      router.replace("/login");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="AddNew"
        options={{
          tabBarLabel: "Add New",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="plus" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
