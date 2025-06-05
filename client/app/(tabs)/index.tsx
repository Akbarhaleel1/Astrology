import React from "react";
import { View, Text, StyleSheet, ImageBackground, Dimensions } from "react-native";
import SideCalender from './components/SideCalender'
import MainSection from './components/MainSection'

export default function HomeScreen() {
  return (
    <View>
      <SideCalender />
      <MainSection />
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  datesColumn: {
    position: "absolute",
    left: 0, // Align to right side
    top: height * 0.0, // Adjust vertical positioning
    backgroundColor: 'black',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    gap: 4
  },
  dateBox: {
    width: 90,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "white",
    borderRadius: 8,
  },
  dateText: {
    fontSize: 60,
    color: 'black',
    fontWeight: '900',
  },
  todayBox: {
    backgroundColor: '#800080',
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 18,
  },
  yearBox: {
    backgroundColor: '#800080',
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 12,
    marginBottom:18
  },
  todayText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  yearText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
