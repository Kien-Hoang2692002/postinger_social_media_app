import React from "react";
import { View, StyleSheet } from "react-native";

const ProgressBar = ({ progress }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.bar, { width: `${progress}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 5,
    backgroundColor: "#fff",
  },
  bar: {
    height: 5,
    backgroundColor: "orange",
  },
});

export default ProgressBar;
