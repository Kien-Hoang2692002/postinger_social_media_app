import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30, marginHorizontal: 5 }}>
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter post={post} />
        <Caption post={post} />
        <Comments post={post} />
      </View>
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      margin: 5,
      alignItems: "center",
    }}
  >
    <Image source={{ uri: post.profile_picture }} style={styles.story} />
    <View style={{ marginLeft: 5 }}>
      <Text style={{ fontWeight: "700" }}>{post.user}</Text>
      <Text style={{ fontSize: 12, fontWeight: "200" }}>{post.job}</Text>
    </View>
    <View style={{ flex: 1 }} />
    <View
      style={{
        flexDirection: "row",
        marginRight: 5,
      }}
    >
      <Text style={{ fontWeight: "200", marginRight: 15 }}>{post.time}</Text>
      <Text style={{ fontWeight: "900", fontSize: 13 }}>...</Text>
    </View>
  </View>
);

const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 350 }}>
    <Image
      source={{ uri: post.imageUrl }}
      style={{ height: "100%", resizeMode: "cover", borderRadius: 10 }}
    />
  </View>
);

const PostFooter = ({ post }) => (
  <View style={{ flexDirection: "row" }}>
    <View style={styles.leftFooterIconsContainer}>
      <TouchableOpacity>
        <AntDesign name="hearto" size={26} color="black" />
        {/* <AntDesign name="heart" size={24} color="red" /> */}
      </TouchableOpacity>
      <TouchableOpacity>
        <AntDesign name="message1" size={26} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="paper-plane-outline" size={26} color="black" />
      </TouchableOpacity>
    </View>
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
      }}
    >
      <TouchableOpacity>
        <Text style={{ color: "gray", marginRight: 10 }}>
          {post.likes.toLocaleString("en")} {post.likes > 1 ? "likes" : "like"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
          {!!post.comments.length && (
            <Text style={{ color: "gray" }}>
              {post.comments.length}{" "}
              {post.comments.length > 1 ? "comments" : "comment"}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

const Caption = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    <Text>
      <Text style={{ fontWeight: "700" }}>{post.user}</Text>
      <Text>
        {"   "}
        {post.caption}
      </Text>
    </Text>
  </View>
);

const Comments = ({ post }) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index} style={{ flexDirection: "row", marginTop: 5 }}>
        <Text>
          <Text style={{ fontWeight: "600" }}>{comment.user}</Text>{" "}
          {comment.comment}
        </Text>
      </View>
    ))}
  </>
);

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: "#ff8501",
  },

  footerIcon: {
    width: 33,
    height: 33,
  },
  leftFooterIconsContainer: {
    flexDirection: "row",
    width: "30%",
    justifyContent: "space-between",
  },
});

export default Post;
