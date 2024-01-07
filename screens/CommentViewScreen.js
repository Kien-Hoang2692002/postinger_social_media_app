import { useContext, useState, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StoryFrame from "../components/ui/StoryFrame";
import { COLORS } from "../constants/Colors1";

import { ThemeContext } from "../context/ThemeContext";
import { getThemeColors } from "../utils/theme";
import { useSelector } from "react-redux";
import { getLanguage } from "../redux/slices/Translation";
import IconButton from "../components/ui/IconButton";
import { locales } from "../locales/Locales";

const CommentViewScreen = ({ route }) => {
  const { theme, isDarkLogo } = useContext(ThemeContext);
  const { textColor, backgroundColor } = getThemeColors(theme);
  const selectedLanguage = useSelector(getLanguage);
  const commentInputRef = useRef(null);

  const { data } = route.params;
  const isInputInFocus = route?.params?.focus || false;

  const [comment, setComment] = useState({
    value: "",
    error: "",
  });
  const [comments, setComments] = useState(data.comments);

  // Maintain an object to track liked state for each comment
  const [likedComments, setLikedComments] = useState({});

  const handleChange = (enteredText) => {
    setComment({ value: enteredText, error: "" });
  };

  const handleLikeComment = (commentIndex) => {
    // Toggle liked state for the specific comment
    setLikedComments((prevLikedComments) => ({
      ...prevLikedComments,
      [commentIndex]: !prevLikedComments[commentIndex],
    }));
  };

  const handleSubmit = () => {
    if (!comment.value.trim()) {
      setComment({
        ...comment,
        error: "Comment cannot be empty.",
      });
      return;
    }

    // Tạo một comment mới từ dữ liệu nhập
    const newComment = {
      user: data?.user, // Thay bằng dữ liệu của người dùng hiện tại
      comment: comment.value,
      image: data?.profile_picture,
    };

    // Cập nhật state với comment mới
    setComments((prevComments) => [...prevComments, newComment]);

    // Đặt lại trạng thái đầu vào và lỗi của bình luận
    setComment({
      value: "",
      error: "",
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={comments}
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.container,
              true && {
                borderBottomColor: COLORS.global.lightGrey200Opacity,
                borderBottomWidth: 0.5,
              },
            ]}
          >
            <StoryFrame>
              <Image
                style={[styles.image, { borderColor: backgroundColor }]}
                source={{ uri: item.image }}
              />
            </StoryFrame>
            <View style={{ flex: 1 }}>
              <Text>
                <Text style={{ fontWeight: "600" }}>{item.user}</Text>{" "}
                {item.comment}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => handleLikeComment(index)}>
                  <Text
                    style={{
                      color: likedComments[index]
                        ? "red"
                        : COLORS.global.grey400,
                      fontSize: 12,
                    }}
                  >
                    Like
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ marginLeft: 10 }}
                  onPress={() => {
                    commentInputRef.current.focus();
                  }}
                >
                  <Text
                    style={{
                      color: COLORS.global.grey400,
                      fontSize: 12,
                    }}
                  >
                    Reply
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <View>
                <IconButton
                  icon={likedComments[index] ? "heart" : "heart-o"}
                  color={
                    likedComments[index]
                      ? COLORS.global.red500
                      : COLORS.global.grey500
                  }
                  size={15}
                  onPress={() => handleLikeComment(index)}
                />
                <Text style={[{ color: COLORS.global.grey500 }]}>12</Text>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={() => (
          <>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text style={[styles.text, { color: textColor }]}>
                {data?.user || "No data"}
              </Text>
              <Text
                style={[
                  { color: textColor, fontSize: 15, marginHorizontal: 8 },
                ]}
              >
                {data?.caption || "No caption"}
              </Text>
              <Image
                style={styles.image_post}
                source={{ uri: data?.imageUrl }}
              />
              <View style={{ flexDirection: "row" }}>
                <Text style={[{ color: textColor, fontSize: 15 }]}>
                  {data?.likes > 0
                    ? `${data?.likes} likes`
                    : "Chưa có lượt thính"}
                </Text>
              </View>
            </View>
          </>
        )}
      />
      {/* Add comment */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container1}
      >
        <StoryFrame>
          <Image
            style={[styles.image, { borderColor: backgroundColor }]}
            source={{ uri: data?.profile_picture }}
          />
        </StoryFrame>
        <TextInput
          ref={commentInputRef}
          value={comment.value}
          placeholder={locales[selectedLanguage]?.addNewComent + " USER's POST"}
          placeholderTextColor={COLORS.global.grey400}
          onChangeText={handleChange}
          style={[styles.input, { color: textColor }]}
          multiline={true}
          autoFocus={isInputInFocus}
        />
        <Button
          color={COLORS.global.lightYellow600}
          isDisabled={!comment.value || comment.error ? true : false}
          onPress={handleSubmit}
          title="Gửi"
        >
          {locales[selectedLanguage]?.post}
        </Button>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CommentViewScreen;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    margin: 5,
  },
  container1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    padding: 10,
    paddingLeft: 15,
    borderTopColor: COLORS.global.lightGrey200Opacity,
    borderTopWidth: 0.5,
  },
  input: {
    flex: 1,
    marginLeft: 5,
    fontSize: 15,
  },
  image_post: {
    height: 150,
    width: 300,
  },
  image: {
    height: 45,
    width: 45,
    borderRadius: 100,
    borderWidth: 2,
  },
  textWrapper: {
    height: 40,
  },
  text: { fontWeight: 700, fontSize: 16 },
});
