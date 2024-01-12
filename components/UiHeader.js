import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { colors, fontSizes } from "../constants";

function UiHeader(props) {
  const {
    title,
    leftIconName,
    rightIconName = "",
    onPressLeftIcon,
    onPressRightIcon,
  } = props;
  return (
    <View
      style={{
        height: 90,
        backgroundColor: colors.primary,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {leftIconName != "" ? (
        <AntDesign
          onPress={onPressLeftIcon}
          style={{
            padding: 10,
            marginTop: 28,
          }}
          name={leftIconName}
          size={26}
          color="white"
        />
      ) : (
        <View
          style={{
            width: 50,
            height: 50,
          }}
        ></View>
      )}

      <Text
        style={{
          color: "white",
          fontSize: fontSizes.h3,
          alignSelf: "center",
          lineHeight: 120,
        }}
      >
        {title}
      </Text>
      {rightIconName != "" ? (
        <AntDesign
          onPress={onPressRightIcon}
          style={{
            padding: 10,
            marginTop: 28,
          }}
          name={rightIconName}
          size={26}
          color="white"
        />
      ) : (
        <View
          style={{
            width: 50,
            height: 50,
          }}
        ></View>
      )}
    </View>
  );
}

export default UiHeader;
