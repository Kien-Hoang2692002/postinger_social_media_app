import React, { useState, useEffect } from "react";
import { View, Text, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
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

    if (!result.cancelled) {
      setSelectedImage(result.uri);
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
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 20 }}>Select Photo and Media</Text>
      <Button title="Pick an Image" onPress={handleImagePicker} />
      {selectedImage && (
        <Image
          source={{ uri: selectedImage }}
          style={{ width: 200, height: 200 }}
        />
      )}

      <Button title="Pick a Media" onPress={handleMediaPicker} />
      {selectedMedia && (
        <View>
          <Text style={{ fontSize: 16 }}>Selected Media:</Text>
          <Text>{selectedMedia}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default App;
