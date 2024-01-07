import { TouchableOpacity, View, Text } from "react-native";
import { colors } from "../../constants";

const UiButton = (props) => {
  const { title, color } = props;
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
