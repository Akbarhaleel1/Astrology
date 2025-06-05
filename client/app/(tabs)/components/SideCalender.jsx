import React from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  ImageBackground, 
  Dimensions, 
  ScrollView, 
  TouchableOpacity 
} from "react-native";

const SideCalender = () => {
  const handleDatePress = (date) => {
    console.log("Date pressed:", date);
  
  };

  return (
    <ImageBackground
      source={{ uri: "https://i.postimg.cc/gcLgQHQy/BG-1.jpg" }}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay} />
      <View style={styles.datesColumn}>
        {/* Fixed Top TODAY */}
        <View style={styles.yearBox}>
          <Text style={styles.yearText}>TODAY</Text>
        </View>

        {/* Scrollable Dates */}
        <ScrollView
          contentContainerStyle={styles.datesColumnContent}
          showsVerticalScrollIndicator={false}
        >
          {[26, 27, 28, 29, 30, 31, 1, 2, 3, 4].map((date, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.dateBox}
              onPress={() => handleDatePress(date)}
            >
              <Text style={styles.dateText}>{date}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Fixed Bottom TODAY */}
        <View style={styles.todayBox}>
          <Text style={styles.todayText}>TODAY</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SideCalender;

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
    left: 0,
    top: height * 0,
    backgroundColor: 'black',
    borderRadius: 12,
    width: 110,
    height: height * 1,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  datesColumnContent: {
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 10,
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
    alignSelf: 'center',
    marginBottom: 22,
  },
  yearBox: {
    backgroundColor: '#800080',
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    alignSelf: 'center',
    marginBottom: 18,
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