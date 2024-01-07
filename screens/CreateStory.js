import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";

const CreateStory = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    (async () => {
      // Yêu cầu quyền truy cập vào thư viện ảnh khi mở ứng dụng
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      } else {
        // Chọn ảnh ngay sau khi có quyền truy cập
        selectImage();
      }
    })();
  }, []);

  const selectImage = async () => {
    try {
      // Open the image library to select an image
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: false,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        // Use the first asset from the assets array
        const selectedAsset = result.assets[0];
        // Save the URI of the selected image and update the state
        setSelectedImage(selectedAsset.uri);
      }
    } catch (error) {
      console.log("Error picking image:", error);
    }
  };

  const handlePost = () => {
    console.log("Post button pressed!");
  };

  return (
    <SafeAreaView>
      {selectedImage && (
        <>
          <Image
            source={{ uri: selectedImage }}
            style={{ width: "100%", height: "100%" }}
          />
          <TouchableOpacity
            style={{
              position: "absolute",
              bottom: 20,
              alignSelf: "center",
              backgroundColor: "orange",
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 5,
            }}
            onPress={handlePost}
          >
            <Text style={{ color: "white" }}>Post</Text>
          </TouchableOpacity>
        </>
      )}
    </SafeAreaView>
  );
};

export default CreateStory;
