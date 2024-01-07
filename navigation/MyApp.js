import React, { Component, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Login,
  Register,
  Notifications,
  CommentViewScreen,
  NewPostScreen,
} from "../screens";
import MessageChat from "../components/messages/MessageChat";
import UiTab from "./UiTab";
import { useSelector } from "react-redux";
import { getLanguage } from "../redux/slices/Translation";
import { locales } from "../locales/Locales";
const Stack = createNativeStackNavigator();

const MyApp = (props) => {
  const selectedLanguage = useSelector(getLanguage);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen
          name="MessageChat"
          component={MessageChat}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CommentViewScreen"
          component={CommentViewScreen}
          options={{ headerShown: false }}
        />
        {/* Add new post */}
        <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
        <Stack.Screen name="UiTab" component={UiTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyApp;
