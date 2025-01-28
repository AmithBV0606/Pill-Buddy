import { View, Text, Button } from "react-native";
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "./../../config/FireBaseConfig";
import { removeLocalStorage } from "../../service/Storage";

export default function HomeScreen() {
  return (
    <View>
      <Text>HomeScreen!!!!</Text>
      <Button title='Logout' onPress={() => signOut(auth)} />
      {/* <Button title="Logout" onPress={async () => await removeLocalStorage()} /> */}
    </View>
  );
}