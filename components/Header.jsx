import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { getLocalStorage } from "../service/Storage";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../constant/Colors";
import { useRouter } from "expo-router";

export default function Header() {
  const [user, setUser] = useState();

  const router = useRouter();

  const getUserDetails = async () => {
    const userInfo = await getLocalStorage("userDetails");
    console.log(userInfo);
    setUser(userInfo);
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <View style={{ marginTop: 20 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          borderBottomWidth: 1,
          borderBottomColor: "#CED7DE",
          paddingBottom: 5,
        }}
      >
        {/* Image, Name and Emoji : */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Image
            source={require("../assets/images/smiley.png")}
            style={{
              height: 45,
              width: 45,
            }}
          />

          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            Hello {user?.displayName} 👋
          </Text>
        </View>

        {/* Settings Icon : */}
        <TouchableOpacity onPress={() => router.push("/add-new-medication")}>
          <Ionicons name="medkit-outline" size={34} color="#8475BD" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
