import React, { useState, useEffect } from "react";
import { View, Text, Button, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import { SafeAreaView } from "react-native-safe-area-context";

const NewPostScreen = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedMedia, setSelectedMedia] = useState(null);

  useEffect(() => {
    (async () => {
      const { status: imageStatus } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (imageStatus !== "granted") {
        console.log("Permission to access media library for images was denied");
      }

      const { status: mediaStatus } =
        await MediaLibrary.requestPermissionsAsync();
      if (mediaStatus !== "granted") {
        console.log("Permission to access media library for media was denied");
      }
    })();
  }, []);

  const handleImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const selectedImageAsset = result.assets[0];
      const imageUri = selectedImageAsset.uri;

      setSelectedImage(imageUri);
      navigation.navigate("PreviewPost", { imageUri });
    }
  };

  const handleMediaPicker = async () => {
    console.log("Picking Media...");
    const result = await MediaLibrary.launchMediaLibraryAsync({
      mediaTypes: MediaLibrary.MediaType.video,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedMedia(result.uri);
    } else {
      console.log("Media picking cancelled");
    }
  };

  const createThreeButtonAlert = () =>
    Alert.alert(
      "Thông báo",
      "Xin lỗi chức năng này chúng tôi đang phát triển thêm !",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
      ]
    );
  return (
    <SafeAreaView style={{ marginHorizontal: 5, marginTop: 10 }}>
      <Text style={{ fontSize: 20, alignSelf: "center" }}>
        Select Photo and Media
      </Text>
      <View style={{ marginVertical: 10 }}>
        <Button
          color={"orange"}
          title="Pick an Image"
          onPress={handleImagePicker}
        />
        {selectedImage && (
          <Image
            source={{ uri: selectedImage }}
            style={{ width: "100%", height: 250, marginTop: 5 }}
          />
        )}
      </View>

      <View style={{ marginVertical: 10 }}>
        <Button
          title="Pick a Media"
          onPress={createThreeButtonAlert}
          color={"orange"}
        />
        {selectedMedia && (
          <View>
            <Text style={{ fontSize: 16 }}>Selected Media:</Text>
            <Text>{selectedMedia}</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default NewPostScreen;
