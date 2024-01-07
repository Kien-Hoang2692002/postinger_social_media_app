import { useState } from "react";
import { FlatList, View, Text, Image, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import UiButton from "../components/profile/UiButton";
import { colors, fontSizes } from "../constants";
import { USERS } from "../data/users";
const Profile = () => {
  const [profile, setProfile] = useState([
    {
      user_id: USERS[0].id,
      cover_photo_url:
        "https://www.autotrader.com/wp-content/uploads/2022/02/2021-Ferrari-SF90-Stradale.jpg",
      avatar_photo_url: USERS[0].image,
      name: "Benny Mozzaik",
      job: "Rapper",
      posting: 213,
      followers: 241,
      following: 123,
      posts: [
        {
          post_id: 1,
          post_image: USERS[0].image,
        },
        {
          post_id: 2,
          post_image: USERS[5].image,
        },
        {
          post_id: 3,
          post_image: USERS[4].image,
        },
        {
          post_id: 4,
          post_image: USERS[5].image,
        },
        {
          post_id: 5,
          post_image: USERS[6].image,
        },
      ],
    },
  ]);
  return (
    <SafeAreaView>
      <View
        style={{
          height: 300,
          alignItems: "center",
        }}
      >
        <ImageBackground
          resizeMode="cover"
          style={{
            height: "60%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          source={{ uri: profile[0].cover_photo_url }}
        >
          <Image
            source={{ uri: profile[0].avatar_photo_url }}
            style={{
              borderWidth: 4,
              borderColor: "white",
              position: "absolute",
              bottom: 40,
              height: 60,
              width: 60,
              borderRadius: 30,
            }}
          />
          <View
            style={{
              flex: 1,
            }}
          />
          <View
            style={{
              position: "absolute",
              justifyContent: "center",
              alignItems: "center",
              top: 150,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              {profile[0].name}
            </Text>
            <Text
              style={{
                fontSize: fontSizes.h6,
                color: colors.inactive,
              }}
            >
              {profile[0].job}
            </Text>
            <Text
              style={{
                fontSize: fontSizes.h6,
                color: colors.inactive,
              }}
            >
              Hello, how are you?
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "space-between",
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {profile[0].posting}
                </Text>
                <Text>Posting</Text>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  paddingVertical: 10,
                  paddingHorizontal: 40,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {profile[0].followers}
                </Text>
                <Text>Followers</Text>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {profile[0].following}
                </Text>
                <Text>Following</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <UiButton title={"Edit Profile"} />
              <UiButton title={"Share Profile"} />
            </View>
          </View>
        </ImageBackground>
      </View>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <FlatList
          numColumns={2}
          data={profile[0].posts}
          keyExtractor={(item) => item.post_id}
          renderItem={({ item }) => (
            <Image
              key={item.post_id}
              style={{
                height: 200,
                width: "50%",
                borderRadius: 20,
                margin: 5,
              }}
              source={{ uri: item.post_image }}
            ></Image>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
