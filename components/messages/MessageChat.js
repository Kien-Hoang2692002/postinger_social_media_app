import {
  View,
  Text,
  FlatList,
  scrollToEnd,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { MESSAGES } from "../../data/messages";
import MessageBox from "./MessageBox";
import MessageForm from "./MessageForm";
import { Image } from "react-native";
import { ThemeContext } from "../../context/ThemeContext";
import { getThemeColors } from "../../utils/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/Colors1";

const MessageChat = ({ route, navigation }) => {
  const listRef = useRef();

  const chatId = route?.params?.chatId;
  const user = route?.params?.user;
  const data = user
    ? MESSAGES.find((item, index) => item.user === user)
    : MESSAGES.find((_, index) => index === chatId);

  const [updatedMessageList, setUpdatedMessageList] = useState(
    data?.messageContent || []
  );
  const [actionType, setActionType] = useState(null);

  const { theme } = useContext(ThemeContext);
  const { textColor, backgroundColor } = getThemeColors(theme);

  const handleActionType = (value) => {
    setActionType(value);
  };

  const handleAddNewMessage = (newMessage, type) => {
    setActionType("ADD_NEW_MESSAGE");
    if (type === "text") {
      setUpdatedMessageList([...updatedMessageList, newMessage]);
    } else {
      setUpdatedMessageList([...updatedMessageList, ...newMessage]);
    }
  };

  const handleDeleteMessage = (id) => {
    const messageList = updatedMessageList?.filter(
      (message, index) => id !== index
    );
    setUpdatedMessageList(messageList);
  };

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: () => (
        <View style={styles.headerContainer}>
          <Image
            style={[styles.image]}
            source={require("../../assets/userImage.jpeg")}
          />
          <Text style={{ ...styles.headerText, color: textColor }}>
            {data?.user}
          </Text>
        </View>
      ),
    });
  }, [navigation, textColor]);

  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 10,
        flex: 1,
        position: "relative",
        backgroundColor: backgroundColor,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign
            name="left"
            size={26}
            color={COLORS.global.lightYellow600}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 10,
          }}
        >
          <Image
            style={{
              height: 50,
              width: 50,
              borderRadius: 100,
            }}
            source={require("../../assets/userImage.jpeg")}
          />
          <View style={{ marginHorizontal: 10 }}>
            <Text style={{ fontWeight: 500 }}>{data?.user}</Text>
            <Text style={{ color: "gray", fontSize: 12 }}>30m ago</Text>
          </View>
        </View>

        <View style={{ flex: 1 }} />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity onPress={() => alert("You pressed phone")}>
            <Entypo
              name="phone"
              size={24}
              color={COLORS.global.lightYellow600}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert("You pressed camera")}>
            <Ionicons
              style={{
                marginHorizontal: 30,
              }}
              name="videocam"
              size={29}
              color={COLORS.global.lightYellow600}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert("You pressed chú ý")}>
            <AntDesign
              name="exclamationcircle"
              size={22}
              color={COLORS.global.lightYellow600}
            />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        ref={listRef}
        data={updatedMessageList}
        renderItem={({ item, index }) => (
          <MessageBox
            {...item}
            messageList={updatedMessageList}
            index={index}
            setActionType={handleActionType}
            onDeleteMessage={handleDeleteMessage}
          />
        )}
        keyExtractor={(_, index) => index}
        showsVerticalScrollIndicator={false}
        onContentSizeChange={() => {
          if (actionType === "ADD_NEW_MESSAGE") {
            listRef?.current?.scrollToEnd();
          }
        }}
      />
      <MessageForm
        messageList={updatedMessageList}
        onAddNewMessage={handleAddNewMessage}
      />
    </SafeAreaView>
  );
};

export default MessageChat;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 500,
  },
  image: {
    height: 25,
    width: 25,
    borderRadius: 100,
  },
});
