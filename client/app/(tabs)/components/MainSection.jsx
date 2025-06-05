import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const MainSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.horoscopeSection}>
        <MaterialCommunityIcons
          name="zodiac-virgo"
          size={28}
          color="white"
          style={styles.iconStyle}
        />
        <Text style={styles.horoscopeButton}>
          Your horoscope {"\n"}
          {"      "}for today
        </Text>
      </View>


      <View style={styles.contactSection}>
        <MaterialCommunityIcons
          name="account-box-outline" 
          size={28}
          color="white"
          style={styles.iconStyle}
        />
        <Text style={styles.contactButton}>
          Contact Us
        </Text>
          </View>
          <View style={styles.zodiacSign}>
              
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 25,
  },
  horoscopeSection: {
    backgroundColor: "orange",
    width: 250,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    paddingHorizontal: 15,
    left: 120
  },
  contactSection: {
    backgroundColor: "violet",
    width: 180,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
      paddingHorizontal: 15,
    left: 390
  },
  horoscopeButton: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginLeft: 10,
  },
  contactButton: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginLeft: 1,
  },
  iconStyle: {
    marginRight: 5,
  },
  zodiacSign: {
    width: 100,
    height: 1000,
    backgroundColor: 'black',
      left: 20,
    marginBottom: 100
  },
});

export default MainSection;