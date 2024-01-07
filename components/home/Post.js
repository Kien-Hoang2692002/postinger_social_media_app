import { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  Pressable,
} from "react-native";
import { AntDesign, Ionicons, FontAwesome } from "@expo/vector-icons";

const Post = ({ post }) => {
  const [isLikeVisible, setIsLikeVisible] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [lastPress, setLastPress] = useState(0);

  // Define the animated value for scaling the heart icon
  const scaleValue = useRef(new Animated.Value(1)).current;

  const activateAnimations = () => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 3,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
        delay: 200,
      }),
    ]).start(() => {
      setIsLikeVisible(false);
    });
  };

  const handleLikePost = (type) => {
    const isDoublePress = type === "image";

    const currentTime = new Date().getTime();
    const delay = 300;

    if (currentTime - lastPress < delay && !isLikeVisible && isDoublePress) {
      // double press happened
      setIsLikeVisible(true);

      setIsLiked(true);
      activateAnimations();
    } else if (!isDoublePress) {
      if (!isLiked) {
        setIsLikeVisible(true);
        activateAnimations();
      }
      setIsLiked(!isLiked);
    }

    setLastPress(currentTime);
  };
  return (
    <View style={{ marginBottom: 30, marginHorizontal: 5 }}>
      <PostHeader post={post} />
      <PostImage
        post={post}
        isLikeVisible={isLikeVisible}
        handleLikePost={handleLikePost.bind(this, "image")}
        scaleValue={scaleValue}
      />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter
          post={post}
          isLiked={isLiked}
          handleLikePost={handleLikePost.bind(this, "icon")}
        />
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

const PostImage = ({ post, isLikeVisible, handleLikePost, scaleValue }) => (
  <Pressable style={{ width: "100%", height: 350 }}>
    <Image
      source={{ uri: post.imageUrl }}
      style={{ height: "100%", resizeMode: "cover", borderRadius: 10 }}
    />
    {isLikeVisible && (
      <Animated.View
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          transform: [{ scale: scaleValue }],
        }}
      >
        <FontAwesome name="heart" size={30} color="red" />
      </Animated.View>
    )}
  </Pressable>
);

const PostFooter = ({ post, isLiked, handleLikePost }) => {
  const navigation = useNavigation();

  return (
    <View style={{ flexDirection: "row" }}>
      <View style={styles.leftFooterIconsContainer}>
        <TouchableOpacity onPress={handleLikePost}>
          {isLiked ? (
            <AntDesign name="heart" size={26} color="red" />
          ) : (
            <AntDesign name="hearto" size={26} color="black" />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("CommentViewScreen", {
              data: post,
            })
          }
        >
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
            {post.likes.toLocaleString("en")}{" "}
            {post.likes > 1 ? "likes" : "like"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("CommentViewScreen", {
              data: post,
            })
          }
        >
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
};

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

const Comments = ({ post }) => {
  const navigation = useNavigation();

  const handleCommentPress = (index) => {
    navigation.navigate("CommentViewScreen", {
      commentId: index,
      data: post,
    });
  };

  return (
    <>
      {post.comments.map((comment, index) => (
        <Pressable key={index} onPress={() => handleCommentPress(index)}>
          {index < 2 && (
            <View style={{ flexDirection: "row", marginTop: 5 }}>
              <Text>
                <Text style={{ fontWeight: "600" }}>{comment.user}</Text>{" "}
                {comment.comment}
              </Text>
            </View>
          )}
        </Pressable>
      ))}
    </>
  );
};
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
