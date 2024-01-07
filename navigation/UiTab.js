import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { fontSizes, colors } from "../constants";
import { Home, Search, NewPostScreen, Message, Profile } from "../screens";

const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => ({
  headerShown: false,
  tabBarActiveTintColor: "white",
  tabBarInactiveTintColor: colors.inactive,
  tabBarActiveBackgroundColor: colors.primary,
  tabBarInactiveBackgroundColor: colors.primary,
  tabBarBackground: () => (
    <View style={{ backgroundColor: colors.primary, flex: 1 }}></View>
  ),
  tabBarIcon: ({ focused, color, size }) => {
    let screenName = route.name;
    let iconName = "";
    if (screenName == "Home") {
      iconName = "home";
    } else if (screenName == "Search") {
      iconName = "search";
    } else if (screenName == "NewPostScreen") {
      iconName = "plus-circle";
    } else if (screenName == "Message") {
      iconName = "envelope";
    } else if (screenName == "Profile") {
      iconName = "user";
    }
    return (
      <FontAwesome
        style={{
          paddingTop: 5,
        }}
        name={iconName}
        size={24}
        color={focused ? "white" : colors.inactive}
      />
    );
  },
});

const UiTab = (props) => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: {
            fontSize: fontSizes.h6,
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "Search",
          tabBarLabelStyle: {
            fontSize: fontSizes.h6,
          },
        }}
      />
      <Tab.Screen
        name="NewPostScreen"
        component={NewPostScreen}
        options={{
          tabBarLabel: "Post",
          tabBarLabelStyle: {
            fontSize: fontSizes.h6,
          },
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarLabel: "Message",
          tabBarLabelStyle: {
            fontSize: fontSizes.h6,
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarLabelStyle: {
            fontSize: fontSizes.h6,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default UiTab;
