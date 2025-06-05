// ParentComponent.tsx
import React from "react";
import { View, StyleSheet } from "react-native";
import AstrologyApp from "./components/Home";

export const ParentComponent = () => {
  return (
    <View style={styles.container}>
      {/* Other components */}
      <AstrologyApp />
      {/* Other components */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
