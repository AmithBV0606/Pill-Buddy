import { View, Text, Image, TouchableOpacity, TouchableHighlight } from "react-native";
import React from "react";
import Colors from "../constant/Colors";
import { useRouter } from "expo-router";

export default function EmptyState() {
    const router = useRouter();
  return (
    <View
      style={{
        marginTop: 30,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../assets/images/medicine.png")}
        style={{
          height: 120,
          width: 120,
        }}
      />

      <Text style={{ fontSize: 35, fontWeight: "bold", marginTop: 30 }}>
        No Medication!!
      </Text>

      <Text
        style={{
          fontSize: 16,
          color: Colors.DARK_GRAY,
          textAlign: "center",
          marginTop: 20,
        }}
      >
        You have 0 medication setup, Kindly set a new one
      </Text>

      <TouchableOpacity
        style={{
            backgroundColor: "#8475BD",
            padding: 15,
            borderRadius: 10,
            width: "100%", 
            marginTop: 30
        }}
        onPress={() => router.push('/add-new-medication')}
      >
        <Text
            style={{
                textAlign: "center",
                fontSize: 17,
                color: "#fff"
            }}
        >+ Add New Medication</Text>
      </TouchableOpacity>
    </View>
  );
}
