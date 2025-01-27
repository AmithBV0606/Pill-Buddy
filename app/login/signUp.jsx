import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors from "../../constant/Colors";
import { useRouter } from "expo-router";

export default function SignUp() {
  const router = useRouter();

  return (
    <View
      style={{
        padding: 25,
        backgroundColor: Colors.PRIMARY,
        height: "100%",
      }}
    >
      <Text style={styles.textHeader}>Create New Account</Text>

      {/* Input :  */}

      {/* Full Name :  */}
      <View
        style={{
          marginTop: 25,
        }}
      >
        <Text style={{ color: Colors.SMOKE_WHITE }}>Full Name : </Text>
        <TextInput
          placeholder="Enter your fullname"
          placeholderTextColor={Colors.LIGHT_GRAY}
          style={styles.textInput}
        />
      </View>

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

      {/* Sign Up button : */}
      <TouchableOpacity style={styles.button}>
        <Text style={{ fontSize: 17, textAlign: "center" }}>Sign Up</Text>
      </TouchableOpacity>

      {/* Already have an account message : */}
      <TouchableOpacity
        onPress={() => router.push("/login/signIn")}
        style={{
          marginTop: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 5
        }}
      >
        <Text style={{ color: "#40434E", fontSize: 17 }}>
          Already have an account? 
        </Text>
        <Text
          style={{
            fontSize: 17,
            color: Colors.SMOKE_WHITE,
            textDecorationLine: "underline"
          }}
        >
          Sign In
        </Text>
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
});
