import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Notifications from "./screens/Notifications";
// import NewPostScreen from "./screens/NewPostScreen";
// import LogInScreen from "./screens/LogInScreen";

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShow: false,
};

const SignedInStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        {/* <Stack.Screen name="LogInScreen" component={LogInScreen} /> */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Notifications" component={Notifications} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SignedInStack;
