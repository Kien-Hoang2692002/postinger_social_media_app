import { StyleSheet, View, ScrollView, Image } from "react-native";
import { STORIES } from "../../data/stories";

const Stories = () => {
  return (
    <View style={{ flex: 30 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {STORIES.map((item, index) => (
          <View
            key={index}
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
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;

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
});
