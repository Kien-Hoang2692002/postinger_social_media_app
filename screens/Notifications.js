import { Text, View, ScrollView, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { NOTIFICATIONS } from "../data/notifications";

const Notifications = () => {
  return (
    <View
      style={{
        flex: 100,
        marginHorizontal: 10,
      }}
    >
      <View
        style={{
          flex: 10,
          justifyContent: "flex-start",
          alignItems: "flex-end",
          flexDirection: "row",
          marginBottom: 5,
        }}
      >
        <AntDesign name="arrowleft" size={30} color="black" />
        <Text
          style={{
            padding: 4,
            fontSize: 20,
            fontWeight: "bold",
            marginLeft: 94,
          }}
        >
          Notifications
        </Text>
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: "gray",
        }}
      />
      {/* Notifications */}
      <View style={{ flex: 90, marginTop: 10 }}>
        <ScrollView>
          {NOTIFICATIONS.map((notification, index) => {
            return (
              <View
                key={index}
                style={{
                  width: "100%",
                  height: 80,
                  flexDirection: "row",
                }}
              >
                <Image
                  source={
                    notification.type == "confirm"
                      ? require("../assets/icons/key.png")
                      : notification.type == "warning"
                      ? require("../assets/icons/warning.png")
                      : { uri: notification.userImage }
                  }
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    alignSelf: "center",
                  }}
                ></Image>
                <View
                  style={{
                    width: "60%",
                    alignSelf: "center",
                    marginLeft: 10,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "600",
                      fontSize: 14,
                    }}
                  >
                    {notification.user}
                  </Text>
                  <Text style={{ fontSize: 14 }}>{notification.action}</Text>
                  <Text style={{ color: "gray", marginTop: 5 }}>
                    {notification.postTime}
                  </Text>
                </View>
                <View style={{ flex: 1 }} />
                <Image
                  source={{ uri: notification.postUrl }}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 20,
                    alignSelf: "center",
                  }}
                ></Image>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Notifications;
