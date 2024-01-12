import { Switch, View, Text, ScrollView, TouchableOpacity } from "react-native";
import {
  FontAwesome,
  AntDesign,
  Foundation,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import UiHeader from "../components/UiHeader";
import { colors, fontSizes } from "../constants";
import { useState } from "react";
import {
  auth,
  firebaseDatabaseRef,
  firebaseSet,
  firebaseDatabase,
} from "../firebase/firebase";
import { StackActions } from "@react-navigation/native";

const Settings = (props) => {
  const [isEnabledLockApp, setEnabledLockApp] = useState(true);
  const [isUseFingerprint, setUseFingerprint] = useState(false);
  const [isEnabledChangePassword, setEnabledChangePassword] = useState(true);

  //navigation
  const { navigation, route } = props;
  //functions of navigate to/back
  const { navigate, goBack } = navigation;

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <UiHeader title={"Settings UI"} />
      <ScrollView>
        {/* Common */}
        <View
          style={{
            height: 40,
            backgroundColor: "rgba(0,0,0,0.2)",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              paddingStart: 10,
              fontSize: fontSizes.h6,
              color: "red",
            }}
          >
            Common
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome
            style={{ marginStart: 10 }}
            name="language"
            size={22}
            color="black"
          />
          <Text
            style={{
              paddingStart: 10,
              fontSize: fontSizes.h6,
            }}
          >
            Language
          </Text>
          <View style={{ flex: 1 }} />
          <Text
            style={{
              paddingStart: 10,
              fontSize: fontSizes.h6,
              paddingEnd: 10,
              color: "gray",
            }}
          >
            English
          </Text>
          <AntDesign
            style={{ paddingEnd: 10 }}
            name="right"
            size={20}
            color="gray"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign
            style={{ marginStart: 10 }}
            name="cloudo"
            size={22}
            color="black"
          />
          <Text
            style={{
              paddingStart: 10,
              fontSize: fontSizes.h6,
            }}
          >
            Environment
          </Text>
          <View style={{ flex: 1 }} />
          <Text
            style={{
              paddingStart: 10,
              fontSize: fontSizes.h6,
              paddingEnd: 10,
              color: "gray",
            }}
          >
            Production
          </Text>
          <AntDesign
            style={{ paddingEnd: 10 }}
            name="right"
            size={20}
            color="gray"
          />
        </View>
        {/* Account */}
        <View
          style={{
            height: 40,
            backgroundColor: "rgba(0,0,0,0.2)",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              paddingStart: 10,
              fontSize: fontSizes.h6,
              color: "red",
            }}
          >
            Account
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Foundation
            style={{ marginStart: 10 }}
            name="telephone"
            size={20}
            color="black"
          />
          <Text
            style={{
              paddingStart: 10,
              fontSize: fontSizes.h6,
            }}
          >
            Phone number
          </Text>
          <View style={{ flex: 1 }} />
          <AntDesign
            style={{ paddingEnd: 10 }}
            name="right"
            size={20}
            color="gray"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialIcons
            style={{ marginStart: 10 }}
            name="email"
            size={20}
            color="black"
          />
          <Text
            style={{
              paddingStart: 10,
              fontSize: fontSizes.h6,
            }}
          >
            Email
          </Text>
          <View style={{ flex: 1 }} />
          <AntDesign
            style={{ paddingEnd: 10 }}
            name="right"
            size={20}
            color="gray"
          />
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            paddingVertical: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            auth.signOut();
            navigation.dispatch(StackActions.popToTop());
          }}
        >
          <Entypo
            style={{ marginStart: 10 }}
            name="log-out"
            size={20}
            color="black"
          />
          <Text
            style={{
              paddingStart: 10,
              fontSize: fontSizes.h6,
            }}
          >
            Sign out
          </Text>
          <View style={{ flex: 1 }} />
          <AntDesign
            style={{ paddingEnd: 10 }}
            name="right"
            size={20}
            color="gray"
          />
        </TouchableOpacity>
        {/* Secutiry */}
        <View
          style={{
            height: 40,
            backgroundColor: "rgba(0,0,0,0.2)",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              paddingStart: 10,
              fontSize: fontSizes.h6,
              color: "red",
            }}
          >
            Secutiry
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialIcons
            style={{ marginStart: 10 }}
            name="phonelink-lock"
            size={20}
            color="black"
          />
          <Text
            style={{
              paddingStart: 10,
              fontSize: fontSizes.h6,
            }}
          >
            Lock app in background
          </Text>
          <View style={{ flex: 1 }} />
          <Switch
            style={{
              marginEnd: 10,
            }}
            trackColor={{ false: "#767577", true: colors.primary }}
            thumbColor={isEnabledLockApp ? colors.primary : colors.inactive}
            //ios_backgroundColor="#3e3e3e"
            onValueChange={() => {
              setEnabledLockApp(!isEnabledLockApp);
            }}
            value={isEnabledLockApp}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Entypo
            style={{ marginStart: 10 }}
            name="fingerprint"
            size={20}
            color="black"
          />
          <Text
            style={{
              paddingStart: 10,
              fontSize: fontSizes.h6,
            }}
          >
            Use fingerprint
          </Text>
          <View style={{ flex: 1 }} />
          <Switch
            style={{
              marginEnd: 10,
            }}
            trackColor={{ false: "#767577", true: colors.primary }}
            thumbColor={isUseFingerprint ? colors.primary : colors.inactive}
            onValueChange={() => {
              setUseFingerprint(!isUseFingerprint);
            }}
            value={isUseFingerprint}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome
            style={{ marginStart: 10 }}
            name="lock"
            size={20}
            color="black"
          />
          <Text
            style={{
              paddingStart: 10,
              fontSize: fontSizes.h6,
            }}
          >
            Change password
          </Text>
          <View style={{ flex: 1 }} />
          <Switch
            style={{
              marginEnd: 10,
            }}
            trackColor={{ false: "#767577", true: colors.primary }}
            thumbColor={
              isEnabledChangePassword ? colors.primary : colors.inactive
            }
            //ios_backgroundColor="#3e3e3e"
            onValueChange={() => {
              setEnabledChangePassword(!isEnabledChangePassword);
            }}
            value={isEnabledChangePassword}
          />
        </View>
        {/* MISC */}
        <View
          style={{
            height: 40,
            backgroundColor: "rgba(0,0,0,0.2)",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              paddingStart: 10,
              fontSize: fontSizes.h6,
              color: "red",
            }}
          >
            MISC
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign
            style={{ marginStart: 10 }}
            name="filetext1"
            size={20}
            color="black"
          />
          <Text
            style={{
              paddingStart: 10,
              fontSize: fontSizes.h6,
            }}
          >
            Terms of Service
          </Text>
          <View style={{ flex: 1 }} />
          <AntDesign
            style={{ paddingEnd: 10 }}
            name="right"
            size={20}
            color="gray"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome
            style={{ marginStart: 10 }}
            name="copy"
            size={20}
            color="black"
          />
          <Text
            style={{
              paddingStart: 10,
              fontSize: fontSizes.h6,
            }}
          >
            Open Source License
          </Text>
          <View style={{ flex: 1 }} />
          <AntDesign
            style={{ paddingEnd: 10 }}
            name="right"
            size={20}
            color="gray"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Settings;
