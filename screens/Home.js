import { StyleSheet, ScrollView, View } from "react-native";

import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";
import { POSTS } from "../data/posts";

import { SafeAreaView } from "react-native-safe-area-context";

const Home = (props) => {
  //navigation
  const { navigation, route } = props;
  //functions of navigate to/back
  const { navigate, goBack } = navigation;
  return (
    <SafeAreaView style={styles.container}>
      <Header navigate={navigate} goBack={goBack} />
      <Stories />
      <View style={{ flex: 80 }}>
        <ScrollView>
          <View style={{ flex: 60 }}>
            {POSTS.map((post, index) => (
              <Post post={post} key={index} />
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 100,
  },
});

export default Home;
