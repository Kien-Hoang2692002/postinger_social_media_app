import { StyleSheet } from "react-native";
import { Home, Notifications, Search } from "./screens";

export default function App() {
  return (
    // <View style={styles.container}>
    //<Notifications />
    <Search />
    //<Home />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ccc",
  },
});
