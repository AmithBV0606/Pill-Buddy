import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Colors from "../../constant/Colors";
import { useRouter } from "expo-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../config/FireBaseConfig";
import { setLocalStorage } from "../../service/Storage";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  // To SignIn an existing user :
  const OnSignInClick = () => {
    if (!email || !password) {
      ToastAndroid.showWithGravity(
        "Please enter both email and password fields!",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM
      );
      Alert.alert("Please enter both email and password!"); // For ios
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        await setLocalStorage("userDetails", user);
        router.replace("(tabs)");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode === "auth/invalid-credential") {
          ToastAndroid.show("Invalid email or password!!", ToastAndroid.BOTTOM);
          Alert.alert("Invalid email or password!!");
        }
      });
  };

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
          onChangeText={(value) => setEmail(value)}
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
          onChangeText={(value) => setPassword(value)}
        />
      </View>

      {/* Login button : */}
      <TouchableOpacity style={styles.button} onPress={OnSignInClick}>
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
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/login/signUp")}
      >
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
