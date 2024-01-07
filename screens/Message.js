import { useContext, useLayoutEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { USERS } from "../data/users";

import { ThemeContext } from "../context/ThemeContext";
import { getThemeColors } from "../utils/theme";
import MessageList from "../components/messages/MessageList";
import { SafeAreaView } from "react-native-safe-area-context";

export const loggedInUser = USERS[0]?.users;

const Messages = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  const { textColor, backgroundColor } = getThemeColors(theme);

  useLayoutEffect(() => {
    navigation.setOptions({ title: loggedInUser });
  }, []);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: backgroundColor }]}
    >
      <FlatList ListFooterComponent={MessageList} />
    </SafeAreaView>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
