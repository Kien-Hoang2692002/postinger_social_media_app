import { useState } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { isValidPassword, isValidEmail } from "../utils/Validations";
import { colors, icons, fontSizes } from "../constants";

const Register = () => {
  //state for validating
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  //state to store email/password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValidationOK = () =>
    email.length > 0 &&
    password.length > 0 &&
    isValidEmail(email) == true &&
    isValidPassword(password) == true;

  return (
    <KeyboardAvoidingView
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
            width: 100,
            height: 100,
          }}
        />
      </View>

      {/* Email-password-register */}
      <View
        style={{
          flex: 45,
          backgroundColor: colors.primary,
          justifyContent: "center",
          padding: 10,
          margin: 10,
          borderRadius: 20,
        }}
      >
        {/* Email */}
        <View
          style={{
            marginHorizontal: 15,
          }}
        >
          <Text
            style={{
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
            placeholder="Enter your email address"
            placeholderTextColor={colors.placeholder}
          />
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: "black",
              marginBottom: 5,
            }}
          />
          <Text
            style={{
              color: "red",
              fontSize: fontSizes.h6,
              marginBottom: 10,
            }}
          >
            {errorEmail}
          </Text>
        </View>
        {/* Password */}
        <View
          style={{
            marginHorizontal: 15,
          }}
        >
          <Text
            style={{
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
            placeholder="Enter your password"
            placeholderTextColor={colors.placeholder}
          />
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: "black",
              marginBottom: 5,
            }}
          />
          <Text
            style={{
              color: "red",
              fontSize: fontSizes.h6,
              marginBottom: 10,
            }}
          >
            {errorPassword}
          </Text>
        </View>
        {/* Retype password */}
        <View
          style={{
            marginHorizontal: 15,
          }}
        >
          <Text
            style={{
              fontSize: fontSizes.h5,
            }}
          >
            Retype password:
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
            placeholder="Re-Enter your password"
            placeholderTextColor={colors.placeholder}
          />
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: "black",
              marginBottom: 5,
            }}
          />
          <Text
            style={{
              color: "red",
              fontSize: fontSizes.h6,
              marginBottom: 10,
            }}
          >
            {errorPassword}
          </Text>
        </View>
        {/* Button register */}

        <TouchableOpacity
          disabled={isValidationOK() == false}
          onPress={() => alert(`Email = ${email}, password = ${password}`)}
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
              color: "white",
            }}
          >
            Register
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
    </KeyboardAvoidingView>
  );
};

export default Register;
