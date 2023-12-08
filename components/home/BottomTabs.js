import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useState } from "react";
import { colors } from "../../constants";

const BottomTabs = ({ icons }) => {
  const [activeTab, setAvtiveTab] = useState("Home");

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <TouchableOpacity key={index} onPress={() => setAvtiveTab(icon.name)}>
            <Image
              source={activeTab === icon.name ? icon.active : icon.inactive}
              style={[
                styles.icon,
                icon.name === "Profile" ? styles.profilePic() : null,
                activeTab === "Profile" && icon.name === activeTab
                  ? styles.profilePic(activeTab)
                  : null,
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    bottom: "0%",
    zIndex: 99,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 55,
    paddingTop: 5,
  },
  icon: {
    width: 32,
    height: 32,
  },

  profilePic: (activeTab = "") => ({
    borderRadius: 50,
    borderWidth: activeTab === "Profile" ? 2 : 0,
    borderColor: colors.primary,
  }),
});

export default BottomTabs;
