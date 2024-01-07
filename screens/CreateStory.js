import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CreateStory = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      } else {
        selectImage();
      }
    })();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: false,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        const selectedAsset = result.assets[0];
        setSelectedImage(selectedAsset.uri);
      }
    } catch (error) {
      console.log("Error picking image:", error);
    }
  };

  const handlePost = () => {
    alert("Post button pressed!");
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      {selectedImage && (
        <>
          <Image
            source={{ uri: selectedImage }}
            style={{ flex: 1, width: "100%", height: "100%" }}
          />

          {/* Nút Back */}
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <AntDesign name="arrowleft" size={26} color="white" />
          </TouchableOpacity>

          {/* Nút Post */}
          <TouchableOpacity style={styles.postButton} onPress={handlePost}>
            <Text style={{ color: "white" }}>Post</Text>
          </TouchableOpacity>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    position: "absolute",
    top: 30,
    left: 10,
    zIndex: 1,
    padding: 10,
  },

  postButton: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    backgroundColor: "orange",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    zIndex: 1,
  },
});

export default CreateStory;
