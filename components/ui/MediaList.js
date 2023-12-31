import { useContext } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";

import VideoPlayer from "./VideoPlayer";
import { ThemeContext } from "../../context/ThemeContext";
import { getThemeColors } from "../../utils/theme";

import { COLORS } from "../../constants/Colors1";
import { locales } from "../../locales/Locales";

import { useSelector } from "react-redux";
import { getLanguage } from "../../redux/slices/Translation";

const MediaList = ({ onScroll, pickedMediaList, focusedIndex }) => {
  const { theme, isDarkLogo } = useContext(ThemeContext);
  const { textColor, backgroundColor } = getThemeColors(theme);

  const selectedLanguage = useSelector(getLanguage);

  const isFocused = useIsFocused();
  const navigation = useNavigation();

  const { width, height } = Dimensions.get("window");

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      onScroll={onScroll}
    >
      {pickedMediaList?.length > 0 ? (
        pickedMediaList?.map((pickedMedia, index) => {
          return (
            <View style={styles.mediaContainer} key={index}>
              <Text style={styles.pagination}>
                {index + 1}/{pickedMediaList?.length}
              </Text>
              {pickedMedia?.type === "video" ? (
                <VideoPlayer
                  isPlaying={focusedIndex === index}
                  sourceUri={pickedMedia?.uri}
                  isLooping={true}
                  showControls={false}
                />
              ) : (
                <Image
                  source={{ uri: pickedMedia?.uri }}
                  style={{ width: width, height: 450 }}
                />
              )}
            </View>
          );
        })
      ) : (
        <View style={[styles.notificationContainer, { width: width }]}>
          <Text style={[styles.notificationText, { color: textColor }]}>
            {locales[selectedLanguage]?.noContent}
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

export default MediaList;

const styles = StyleSheet.create({
  conainer: {
    flex: 1,
  },
  mediaListContainer: {
    backgroundColor: COLORS.global.lightGrey300Opacity,
    width: "100%",
    height: 450,
  },
  mediaContainer: {
    position: "relative",
  },
  pagination: {
    position: "absolute",
    right: 14,
    top: 8,
    zIndex: 2,
    backgroundColor: COLORS.global.lightGrey300Opacity,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 30,
    color: COLORS.global.white,
    fontSize: 12,
    fontWeight: 600,
  },

  notificationContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  notificationText: {
    fontSize: 20,
  },
});
