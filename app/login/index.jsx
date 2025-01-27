import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../constant/Colors";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={{ backgroundColor: Colors.YELLOW }}>
      {/* Image part :  */}
      <View
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <Image
          source={require("./../../assets/images/login.png")}
          style={styles.image}
        />
      </View>

        {/* Text and button : */}
      <View
        style={{
          padding: 25,
          backgroundColor: Colors.PRIMARY,
          height: "100%",
          borderRadius: 25,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: Colors.SMOKE_WHITE,
            textAlign: "center",
          }}
        >
          Stay on Track, Stay Healthy!
        </Text>

        <Text
          style={{
            color: Colors.SMOKE_WHITE,
            textAlign: "center",
            fontSize: 17,
            marginTop: 20
          }}
        >
          Track your meds, take control of your health. Stay consistant, Stay
          confident!
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => router.push("/login/signIn")}>
          <Text style={{ textAlign: "center", fontSize: 17 }}>Continue</Text>
        </TouchableOpacity>

        <Text
          style={{
            color: Colors.SMOKE_WHITE,
            marginTop: 17,
            textAlign: "center",
            fontSize: 9
          }}
        >Note : By clicking Continue button, you are argreeing to our Terms & Condition</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 450,
    width: 255,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.YELLOW,
    borderRadius: 99,
    marginTop: 17
  }
});
