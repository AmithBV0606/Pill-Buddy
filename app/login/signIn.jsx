import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors from "../../constant/Colors";

export default function SignIn() {
  return (
    <View
      style={{
        padding: 25,
        backgroundColor: Colors.PRIMARY,
        height: "100%",
      }}
    >
      <Text style={styles.textHeader}>Let's Sign You In!!</Text>
      <Text style={styles.subText}>Welcome Back</Text>
      <Text style={styles.subText}>You've been missed!</Text>

      {/* Input :  */}

      {/* Email :  */}
      <View
        style={{
          marginTop: 25,
        }}
      >
        <Text style={{ color: Colors.SMOKE_WHITE }}>Email : </Text>
        <TextInput
          placeholder="jhondoe@gmail.com"
          placeholderTextColor={Colors.LIGHT_GRAY}
          style={styles.textInput}
        />
      </View>

      {/* Password :  */}
      <View
        style={{
          marginTop: 25,
        }}
      >
        <Text style={{ color: Colors.SMOKE_WHITE }}>Password : </Text>
        <TextInput
          placeholder="Password"
          placeholderTextColor={Colors.LIGHT_GRAY}
          style={styles.textInput}
          secureTextEntry={true}
        />
      </View>

      {/* Login button : */}
      <TouchableOpacity style={styles.button}>
        <Text style={{ fontSize: 17, textAlign: "center" }}>Login</Text>
      </TouchableOpacity>

      {/* Styled OR section */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 40,
        }}
      >
        <View style={styles.breakLine} />
        <Text style={{ color: "#40434E" }}> OR </Text>
        <View style={styles.breakLine} />
      </View>

      {/* Signup button : */}
      <TouchableOpacity style={styles.button}>
        <Text style={{ fontSize: 17, textAlign: "center" }}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.SMOKE_WHITE,
    marginTop: 15,
  },
  subText: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
    color: Colors.LIGHT_GRAY,
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    fontSize: 17,
    borderRadius: 10,
    marginTop: 5,
    borderColor: Colors.SMOKE_WHITE,
    color: "white",
  },
  button: {
    padding: 15,
    marginTop: 40,
    backgroundColor: Colors.YELLOW,
    borderRadius: 15,
  },
  breakLine: {
    height: 2,
    borderRadius: 30,
    width: "42%",
    backgroundColor: "#40434E",
  },
});
