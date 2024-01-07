import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Switch,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
import { USERS } from "../../data/users";

const PreviewPost = ({ route, navigation }) => {
  const { imageUri } = route.params;
  const [description, setDescription] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [people, setPeople] = useState("");
  const [mentionUsers, setMentionUsers] = useState([]);
  const [location, setLocation] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);

  const handleTextChange = (text) => {
    if (text.includes("@")) {
      // Lọc danh sách người dùng dựa trên ký tự "@" và cập nhật state
      const filteredUsers = USERS.filter((user) =>
        user.users
          .toLowerCase()
          .includes(text.toLowerCase().substring(text.indexOf("@") + 1))
      );
      setMentionUsers(filteredUsers);
    } else {
      setMentionUsers([]);
    }
    setPeople(text);
  };

  const handleLocationSelection = () => {
    navigation.navigate("PreviewLocation", { location });
  };

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  const handlePost = () => {
    // Gửi dữ liệu bài đăng lên server hoặc thực hiện hành động mong muốn
    console.log("Post details:", {
      imageUri,
      description,
      hashtags,
      people,
      location,
    });
    // Đặt các trạng thái về trạng thái ban đầu
    setDescription("");
    setHashtags("");
    setPeople("");
    setLocation("");
  };

  return (
    <SafeAreaView style={{ marginHorizontal: 5 }}>
      <Text style={{ fontSize: 20 }}>Preview Post</Text>
      <Image
        source={{ uri: imageUri }}
        style={{ width: "100%", height: 250, alignSelf: "center" }}
      />

      <TextInput
        placeholder="Add description"
        value={description}
        onChangeText={(text) => setDescription(text)}
        style={{ borderBottomWidth: 1, marginBottom: 10, padding: 8 }}
      />

      {/* Thêm TextInput cho hashtags */}
      <TextInput
        placeholder="Add hashtags"
        value={hashtags}
        onChangeText={(text) => setHashtags(text)}
        style={{ borderBottomWidth: 1, marginBottom: 10, padding: 8 }}
      />

      {/* Thêm TextInput cho people */}
      <TextInput
        placeholder="Tag people"
        value={people}
        onChangeText={handleTextChange}
        style={{ borderBottomWidth: 1, marginBottom: 10, padding: 8 }}
      />

      {/* Hiển thị danh sách gợi ý người dùng */}
      {mentionUsers.length > 0 && (
        <View style={{ padding: 10, backgroundColor: "white" }}>
          {mentionUsers.map((user) => (
            <TouchableOpacity
              key={user.id}
              onPress={() => {
                // Chèn tên người dùng vào TextInput
                setPeople(`${user.users}`);
                // Ẩn danh sách người dùng
                setMentionUsers([]);
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={{ uri: user.image }}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                  }}
                />
                <View style={{ flexDirection: "column", marginHorizontal: 10 }}>
                  <Text style={{ fontSize: 15 }}>{user.users}</Text>
                  <Text style={{ fontSize: 10, color: "gray" }}>
                    {user.job}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Thêm nút để chọn vị trí */}
      <TouchableOpacity
        onPress={handleLocationSelection}
        style={{
          backgroundColor: "orange",
          padding: 14,
          borderRadius: 5,
          marginBottom: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }} />
          <Text
            style={{
              fontSize: 15,
              color: "white",
              textAlign: "center",
              fontWeight: 700,
            }}
          >
            Add Location
          </Text>
          <View style={{ flex: 1 }} />
          <FontAwesome5 name="map-marked-alt" size={22} color="white" />
        </View>
      </TouchableOpacity>

      {/* Show Interaction Post */}
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "orange",
          borderRadius: 5,
          marginBottom: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ flex: 1 }} />
        <Text
          style={{
            fontSize: 16,
            color: "white",
            textAlign: "center",
            fontWeight: 700,
          }}
        >
          Show Interaction Post
        </Text>
        <View style={{ flex: 1 }} />
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

      {/* Thêm nút để đăng bài */}
      <TouchableOpacity
        onPress={handlePost}
        style={{
          backgroundColor: "blue",
          padding: 10,
          borderRadius: 5,
          width: "50%",
          alignSelf: "center",
        }}
      >
        <Text
          style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
        >
          POST
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PreviewPost;
