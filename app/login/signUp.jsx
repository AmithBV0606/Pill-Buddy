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
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./../../config/FireBaseConfig";
import { setLocalStorage } from "../../service/Storage";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  // Account creation using Firebase :
  const onCreateAccount = () => {
    if (!email || !password || !username) {
      ToastAndroid.showWithGravity(
        "Please enter all the fields!",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM
      );
      Alert.alert("Please enter all the fields!"); // For ios
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed up
        const user = userCredential.user;
        // console.log(user);
        await updateProfile(user, {
          displayName: username,
        });
        await setLocalStorage("userDetails", user);
        router.replace("(tabs)");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode);

        if (errorCode === "auth/email-already-in-use") {
          ToastAndroid.show("Email already exists.", ToastAndroid.BOTTOM);
          Alert.alert("Email already exists.");
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
          onChangeText={(value) => setUsername(value)}
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

      {/* Sign Up button : */}
      <TouchableOpacity style={styles.button} onPress={onCreateAccount}>
        <Text style={{ fontSize: 17, textAlign: "center", color: "white" }}>Sign Up</Text>
      </TouchableOpacity>

      {/* Already have an account message : */}
      <TouchableOpacity
        onPress={() => router.push("/login/signIn")}
        style={{
          marginTop: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
        }}
      >
        <Text style={{ color: "#40434E", fontSize: 17 }}>
          Already have an account?
        </Text>
        <Text
          style={{
            fontSize: 17,
            color: Colors.SMOKE_WHITE,
            textDecorationLine: "underline",
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
    // color: Colors.SMOKE_WHITE,
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
    // backgroundColor: Colors.YELLOW,
    backgroundColor: "#8B5CC1",
    borderRadius: 15,
  },
});
