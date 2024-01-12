import React, { Component, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Login,
  Register,
  Notifications,
  CommentViewScreen,
  NewPostScreen,
  PreviewPost,
  PreviewLocation,
  CreateStory,
  Settings,
  Profile,
} from "../screens";
import MessageChat from "../components/messages/MessageChat";
import UiTab from "./UiTab";
import { useSelector } from "react-redux";
import { getLanguage } from "../redux/slices/Translation";
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
        <Stack.Screen name="PreviewPost" component={PreviewPost} />
        <Stack.Screen name="PreviewLocation" component={PreviewLocation} />
        {/* Add story */}
        <Stack.Screen name="CreateStory" component={CreateStory} />

        <Stack.Screen name="UiTab" component={UiTab} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyApp;
