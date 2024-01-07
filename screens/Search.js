import {
  FlatList,
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import { USERS } from "../data/users";
import { colors } from "../constants";

const Search = () => {
  const [hastags, setHastags] = useState([
    {
      name: "Explore",
      active: true,
    },
    {
      name: "#newmediasocial",
      active: true,
    },
    {
      name: "#Fyp",
      active: false,
    },
    {
      name: "#Springweat",
      active: true,
    },
    {
      name: "#Springweat2",
      active: false,
    },
    {
      name: "#Warm",
      active: false,
    },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 5, flexDirection: "row" }}>
        <AntDesign
          style={{
            position: "absolute",
            top: 8,
            left: 5,
          }}
          name="search1"
          size={22}
          color="black"
        />
        <TextInput
          placeholder="Search..."
          autoCorrect={false}
          style={{
            backgroundColor: "gray",
            borderRadius: 5,
            flex: 1,
            opacity: 0.4,
            paddingHorizontal: 40,
          }}
        />
      </View>
      <View
        style={{
          flex: 5,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FlatList
          horizontal={true}
          keyExtractor={(item) => item.name}
          data={hastags}
          style={{ flex: 1 }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => alert(`press category ${item.name}`)}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: "gray",
                  padding: 2,
                  marginHorizontal: 5,
                  backgroundColor:
                    item.active == true ? colors.primary : "gray",
                  borderRadius: 5,
                }}
              >
                <Text style={{ fontSize: 12 }}>{item.name}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={{ flex: 80 }}>
        <FlatList
          numColumns={2}
          data={USERS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Image
              style={{
                height: 200,
                width: "50%",
                borderRadius: 20,
                margin: 5,
              }}
              source={{ uri: item.image }}
            ></Image>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 100,
    marginTop: 20,
    marginHorizontal: 10,
  },
});

export default Search;
