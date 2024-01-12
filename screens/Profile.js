import { useState } from "react";
import { FlatList, View, Text, Image, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import UiButton from "../components/profile/UiButton";
import { colors, fontSizes } from "../constants";
import { PROFILES } from "../data/profiles";

const Profile = (props) => {
  const [profile, setProfile] = useState(PROFILES[0]);
  const isUserLoggedIn = true;

  if (!profile) {
    return <Text>Loading...</Text>;
  }

  //navigation
  const { navigation, route } = props;
  //functions of navigate to/back
  const { navigate, goBack } = navigation;

  const handleEditProfile = () => {
    // Xử lý khi nút được bấm
    navigation.navigate("Settings");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ImageBackground
          resizeMode="cover"
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            height: "50%",
          }}
          source={{ uri: profile.cover_photo_url }}
        >
          <View
            style={{
              height: "30%",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: profile.avatar_photo_url }}
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
                top: 80,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                }}
              >
                {profile.name}
              </Text>
              <Text
                style={{
                  fontSize: fontSizes.h6,
                  color: colors.inactive,
                }}
              >
                {profile.job}
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
                    {profile.posting}
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
                    {profile.followers}
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
                    {profile.following}
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
                {isUserLoggedIn ? (
                  <>
                    <UiButton
                      title={"Edit Profile"}
                      onPress={handleEditProfile}
                    />
                    <UiButton title={"Share Profile"} />
                  </>
                ) : (
                  <>
                    <UiButton title={"Follow"} color="yellow" />
                    <UiButton title={"Send Message"} />
                  </>
                )}
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>

      <View
        style={{
          flex: 1,
          marginTop: 10,
          marginRight: 5,
        }}
      >
        <FlatList
          numColumns={2}
          data={profile.posts}
          keyExtractor={(item) => item.post_id}
          renderItem={({ item }) => (
            <Image
              key={item.post_id}
              style={{
                height: 200,
                width: "48%",
                borderRadius: 20,
                margin: 5,
              }}
              source={{ uri: item.post_image }}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
