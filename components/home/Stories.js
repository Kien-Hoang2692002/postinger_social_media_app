import { StyleSheet, View, ScrollView, Image } from "react-native";

const Stories = () => {
  return (
    <View style={{ flex: 30 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={{
            width: 100,
            alignItems: "center",
            position: "relative",
            marginLeft: 10,
          }}
        >
          <Image
            source={{
              uri: "https://chungcuhatecolaroma.net.vn/wp-content/uploads/2022/10/anh-avatar-dep-cho-con-gai-2.jpg",
            }}
            style={styles.story}
          />
          <Image
            source={{
              uri: "https://1.bp.blogspot.com/-yPtDug12hyk/XqZl2ok52II/AAAAAAAAjO0/w2XS77KIT7sPrSGthsYwgdKT4UrWZ6c3gCLcBGAsYHQ/s1600/Anh-avatar-dep-cho-con-trai%2B%252824%2529.jpg",
            }}
            style={styles.cover_photo}
          />
        </View>

        <View
          style={{
            width: 100,
            alignItems: "center",
            position: "relative",
            marginLeft: 10,
          }}
        >
          <Image
            source={{
              uri: "https://chungcuhatecolaroma.net.vn/wp-content/uploads/2022/10/anh-avatar-dep-cho-con-gai-2.jpg",
            }}
            style={styles.story}
          />
          <Image
            source={{
              uri: "https://1.bp.blogspot.com/-yPtDug12hyk/XqZl2ok52II/AAAAAAAAjO0/w2XS77KIT7sPrSGthsYwgdKT4UrWZ6c3gCLcBGAsYHQ/s1600/Anh-avatar-dep-cho-con-trai%2B%252824%2529.jpg",
            }}
            style={styles.cover_photo}
          />
        </View>
        <View
          style={{
            width: 100,
            alignItems: "center",
            position: "relative",
            marginLeft: 10,
          }}
        >
          <Image
            source={{
              uri: "https://chungcuhatecolaroma.net.vn/wp-content/uploads/2022/10/anh-avatar-dep-cho-con-gai-2.jpg",
            }}
            style={styles.story}
          />
          <Image
            source={{
              uri: "https://1.bp.blogspot.com/-yPtDug12hyk/XqZl2ok52II/AAAAAAAAjO0/w2XS77KIT7sPrSGthsYwgdKT4UrWZ6c3gCLcBGAsYHQ/s1600/Anh-avatar-dep-cho-con-trai%2B%252824%2529.jpg",
            }}
            style={styles.cover_photo}
          />
        </View>
        <View
          style={{
            width: 100,
            alignItems: "center",
            position: "relative",
            marginLeft: 10,
          }}
        >
          <Image
            source={{
              uri: "https://chungcuhatecolaroma.net.vn/wp-content/uploads/2022/10/anh-avatar-dep-cho-con-gai-2.jpg",
            }}
            style={styles.story}
          />
          <Image
            source={{
              uri: "https://1.bp.blogspot.com/-yPtDug12hyk/XqZl2ok52II/AAAAAAAAjO0/w2XS77KIT7sPrSGthsYwgdKT4UrWZ6c3gCLcBGAsYHQ/s1600/Anh-avatar-dep-cho-con-trai%2B%252824%2529.jpg",
            }}
            style={styles.cover_photo}
          />
        </View>
        <View
          style={{
            width: 100,
            alignItems: "center",
            position: "relative",
            marginLeft: 10,
          }}
        >
          <Image
            source={{
              uri: "https://chungcuhatecolaroma.net.vn/wp-content/uploads/2022/10/anh-avatar-dep-cho-con-gai-2.jpg",
            }}
            style={styles.story}
          />
          <Image
            source={{
              uri: "https://1.bp.blogspot.com/-yPtDug12hyk/XqZl2ok52II/AAAAAAAAjO0/w2XS77KIT7sPrSGthsYwgdKT4UrWZ6c3gCLcBGAsYHQ/s1600/Anh-avatar-dep-cho-con-trai%2B%252824%2529.jpg",
            }}
            style={styles.cover_photo}
          />
        </View>
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
