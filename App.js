import { StyleSheet, View } from "react-native";
//import { Home, Login, Register, Notifications, Search } from "./screens";
import MyApp from "./navigation/MyApp";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import ThemeContextProvider, { ThemeContext } from "./context/ThemeContext";
export default function App() {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <MyApp />
      </ThemeContextProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
