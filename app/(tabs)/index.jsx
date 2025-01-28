import { View, Text, Button } from "react-native";
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "./../../config/FireBaseConfig";
import { removeLocalStorage } from "../../service/Storage";
import Colors from "../../constant/Colors";
import Header from "../../components/Header";
import EmptyState from "../../components/EmptyState";

export default function HomeScreen() {
  return (
    <View style={{
      padding: 25,
      height: "100%",
      width: "100%",
      // backgroundColor: "#B0D7FF",
      // backgroundColor: Colors.YELLOW,
      backgroundColor: "#fff",
      position: "relative"
    }}>
      {/* <Text>HomeScreen!!!!</Text> */}
      {/* <Button title='Logout' onPress={() => signOut(auth)} /> */}
      {/* <Button title="Logout" onPress={async () => await removeLocalStorage()} /> */}

      <Header />

      <EmptyState />
    </View>
  );
}