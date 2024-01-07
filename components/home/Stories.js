import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { STORIES } from "../../data/stories";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

const Stories = ({ props }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [currentStory, setCurrentStory] = useState(null);
  const [comment, setComment] = useState("");

  useEffect(() => {
    let timer;
    if (isModalVisible) {
      timer = setTimeout(() => {
        setModalVisible(false);
      }, 5000); // Đặt thời gian hiển thị modal
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isModalVisible]);

  const openStory = (story) => {
    setCurrentStory(story);
    setModalVisible(true);
  };

  const handleComment = () => {
    // Xử lý bình luận ở đây, bạn có thể gửi bình luận lên server hoặc làm hành động khác
    console.log("Comment:", comment);
    // Đặt trạng thái comment về rỗng sau khi xử lý
    setComment("");
  };

  const navigateToCreateStory = () => {
    props.navigation.navigate("CreateStory");
  };

  return (
    <View style={{ flex: 30, flexDirection: "row", marginHorizontal: 8 }}>
      {/* Nút tạo story mới */}
      <View
        style={{
          backgroundColor: "gray",
          opacity: 0.4,
          height: "80%",
          borderRadius: 10,
          borderColor: "#ff8501",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={navigateToCreateStory}
          style={{
            width: 100,
            alignItems: "center",
            position: "relative",
          }}
        >
          <AntDesign name="pluscircle" size={26} color="black" />
          <Text style={{ color: "black", fontSize: 16, fontWeight: "bold" }}>
            Create Story
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {STORIES.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => openStory(item)}
            style={{
              width: 100,
              alignItems: "center",
              position: "relative",
              marginLeft: 10,
            }}
          >
            <Image
              source={{
                uri: item.user_image,
              }}
              style={styles.story}
            />
            <Image
              source={{
                uri: item.story_url,
              }}
              style={styles.cover_photo}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Modal hiển thị story */}
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <Image
            source={{ uri: currentStory?.story_url }}
            style={styles.modalStory}
          />
          <View style={styles.modalFooter}>
            <View style={styles.reactionsContainer}>
              {/* Các biểu tượng cảm xúc ở đây */}
              <Animatable.View animation="bounceIn" duration={500}>
                <TouchableOpacity>
                  <Text style={{ fontSize: 20, padding: 5 }}>😍</Text>
                </TouchableOpacity>
              </Animatable.View>
              <Animatable.View animation="bounceIn" duration={500} delay={200}>
                <TouchableOpacity>
                  <Text style={{ fontSize: 20, padding: 5 }}>❤️</Text>
                </TouchableOpacity>
              </Animatable.View>
              <Animatable.View animation="bounceIn" duration={500} delay={400}>
                <TouchableOpacity>
                  <Text style={{ fontSize: 20, padding: 5 }}>👍</Text>
                </TouchableOpacity>
              </Animatable.View>
              <Animatable.View animation="bounceIn" duration={500} delay={600}>
                <TouchableOpacity>
                  <Text style={{ fontSize: 20, padding: 5 }}>😂</Text>
                </TouchableOpacity>
              </Animatable.View>
            </View>
            {/* Ô nhập bình luận */}
            <TextInput
              placeholder="Add a comment..."
              style={styles.commentInput}
              value={comment}
              onChangeText={(text) => setComment(text)}
            />

            <Animatable.View
              animation="bounceIn"
              duration={500}
              delay={800}
              style={styles.commentButton}
            >
              <TouchableOpacity onPress={handleComment}>
                <Ionicons name="send" size={24} color="white" />
              </TouchableOpacity>
            </Animatable.View>
          </View>

          {/* Nút đóng modal */}
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={styles.closeButton}
          >
            <Text style={{ color: "orange", fontWeight: "bold" }}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    position: "absolute",
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#ff8501",
    zIndex: 100,
    bottom: 24,
  },
  cover_photo: {
    width: "100%",
    height: "80%",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#ff8501",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "black",
  },
  modalStory: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  modalFooter: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  commentInput: {
    flex: 1,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: "white",
    padding: 8,
  },
  reactionsContainer: {
    flexDirection: "row",
    marginRight: 10,
  },
  commentButton: {
    backgroundColor: "orange",
    padding: 10,
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 30,
    right: 20,
  },
});

export default Stories;
