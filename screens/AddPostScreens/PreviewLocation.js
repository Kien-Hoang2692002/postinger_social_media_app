// PreviewLocation.js
import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const INITIAL_REGION = {
  latitude: 21.00734395540087,
  longitude: 105.84274015506898,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const PreviewLocation = ({ route }) => {
  const { location } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={StyleSheet.absoluteFill}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_REGION}
        showsUserLocation
        showsMyLocationButton
      />
    </View>
  );
};

export default PreviewLocation;
