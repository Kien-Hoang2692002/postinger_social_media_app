import { TouchableOpacity, View, Text } from "react-native";
import { colors } from "../../constants";

const UiButton = (props) => {
  const { title, color, onPress } = props;

  return (
    <TouchableOpacity
      style={{
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        borderColor: "white",
        marginHorizontal: 15,
        width: "40%",
        marginVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color ? color : colors.inactive,
        opacity: 0.8,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          fontWeight: "bold",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default UiButton;
