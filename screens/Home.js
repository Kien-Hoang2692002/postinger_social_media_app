import { SafeAreaView, StyleSheet, ScrollView, View } from "react-native";

import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";
import BottomTabs from "../components/home/BottomTabs";
import { bottomTabsIcon } from "../constants";
import { POSTS } from "../data/posts";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
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
      <BottomTabs icons={bottomTabsIcon} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 100,
    marginTop: 40,
  },
});

export default Home;
