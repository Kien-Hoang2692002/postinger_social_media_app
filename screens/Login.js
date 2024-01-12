import { useState, useEffect } from "react";
import { TouchableOpacity, Text, View, Image, TextInput } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { isValidPassword, isValidEmail } from "../utils/Validations";
import { colors, fontSizes } from "../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  onAuthStateChanged,
  firebaseDatabaseRef,
  firebaseSet,
  firebaseDatabase,
  auth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "../firebase/firebase";

const Login = (props) => {
  //state for validating
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  //state to store email/password
  const [email, setEmail] = useState("hoatruongquay@gmail.com");
  const [password, setPassword] = useState("123456");

  const isValidationOK = () =>
    email.length > 0 &&
    password.length > 0 &&
    isValidEmail(email) == true &&
    isValidPassword(password) == true;

  //navigation
  const { navigation, route } = props;
  //functions of navigate to/back
  const { navigate } = navigation;

  useEffect(() => {
    onAuthStateChanged(auth, (responseUser) => {
      //debugger;
      if (responseUser) {
        //save data to Firebase
        let user = {
          userId: responseUser.uid,
          email: responseUser.email,
          emailVerified: responseUser.emailVerified,
          accessToken: responseUser.accessToken,
        };
        console.log("user:", user);
        firebaseSet(
          firebaseDatabaseRef(firebaseDatabase, `users/${responseUser.uid}`),
          user
        );
        //save user to local storage
        AsyncStorage.setItem("user", JSON.stringify(user));
        navigate("UiTab");
      }
    });
  });

  return (
    <View
      style={{
        flex: 100,
      }}
    >
      {/* Header */}
      <View
        style={{
          flex: 30,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: fontSizes.h1,
            fontWeight: "bold",
            width: "50%",
          }}
        >
          Already have an Account?
        </Text>
        <Image
          source={require("../assets/icon.png")}
          style={{
            width: 120,
            height: 120,
          }}
        />
      </View>

      {/* Email-password */}
      <View
        style={{
          flex: 20,
        }}
      >
        <View
          style={{
            marginHorizontal: 15,
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: fontSizes.h5,
            }}
          >
            Email:
          </Text>
          <TextInput
            onChangeText={(text) => {
              setErrorEmail(
                isValidEmail(text) == true ? "" : "Email not in correct format"
              );
              setEmail(text);
            }}
            value={email}
            placeholder="Enter your email address"
            placeholderTextColor={colors.placeholder}
          />
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: colors.primary,
              marginBottom: 5,
            }}
          />
          <Text
            style={{
              color: "red",
              fontSize: fontSizes.h6,
              marginBottom: 15,
            }}
          >
            {errorEmail}
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 15,
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: fontSizes.h5,
            }}
          >
            Password:
          </Text>
          <TextInput
            onChangeText={(text) => {
              setErrorPassword(
                isValidPassword(text) == true
                  ? ""
                  : "Password must be at least 3 characters"
              );
              setPassword(text);
            }}
            secureTextEntry={true}
            value={password}
            placeholder="Enter your password"
            placeholderTextColor={colors.placeholder}
          />
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: colors.primary,
              marginBottom: 5,
            }}
          />
          <Text
            style={{
              color: "red",
              fontSize: fontSizes.h6,
              marginBottom: 15,
            }}
          >
            {errorPassword}
          </Text>
        </View>
      </View>

      {/* Button login */}
      <View
        style={{
          flex: 15,
        }}
      >
        <TouchableOpacity
          disabled={isValidationOK() == false}
          onPress={() => {
            //alert(`Email = ${email}, password = ${password}`)
            signInWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                const user = userCredential.user;
                navigate("UiTab");
              })
              .catch((error) => {
                alert(`Cannot signin, error: ${error.message}`);
              });
          }}
          style={{
            backgroundColor:
              isValidationOK() == true ? colors.primary : colors.inactive,
            justifyContent: "center",
            alignItems: "center",
            width: "60%",
            alignSelf: "center",
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              padding: 10,
              fontSize: fontSizes.h5,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigate("Register")}
          style={{
            padding: 5,
          }}
        >
          <Text
            style={{
              padding: 10,
              fontSize: fontSizes.h6,
              alignSelf: "center",
            }}
          >
            New user? Register now
          </Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View
        style={{
          flex: 25,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            height: 40,
            alignItems: "center",
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              height: 1,
              flex: 1,
              backgroundColor: "black",
            }}
          ></View>
          <Text
            style={{
              padding: 10,
              fontSize: fontSizes.h6,
              color: "black",
              alignSelf: "center",
              marginHorizontal: 5,
            }}
          >
            User other methods ?
          </Text>
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: "black",
              flex: 1,
            }}
          ></View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <FontAwesome5 name="facebook" size={30} color={colors.facebook} />
          <View style={{ width: 15 }}></View>
          <FontAwesome5 name="google-plus" size={30} color={colors.google} />
        </View>
      </View>
    </View>
  );
};

export default Login;
