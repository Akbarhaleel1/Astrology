
// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ImageBackground,
//   ScrollView,
//   Dimensions,
//   Platform,
// } from 'react-native';
// import { Sun, Moon } from 'lucide-react-native';

// const { width, height } = Dimensions.get('window');

// // Responsive scaling
// const BASE_WIDTH = 1280;
// const scale = (size) => (width / BASE_WIDTH) * size;
// const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

// const HomeScreen = () => {
//   const [currentTime, setCurrentTime] = useState('');
//   const [currentDate, setCurrentDate] = useState('');
//   const [currentMonthYear, setCurrentMonthYear] = useState('');
//   const [panchangData] = useState({
//     sunrise: '6:52 AM',
//     sunset: '6:04 PM',
//     tithi: [
//       { name: 'Krishna Paksha Thrayodasi', end: '08:35 PM' },
//       { name: 'Chathurdasi', end: '' }
//     ],
//     nakshatra: [
//       { name: 'Moola', end: '09:02 AM' },
//       { name: 'Purva Ashadha', end: '' }
//     ],
//     vaara: 'Monday'
//   });
//   const [calendarData] = useState({
//     calendar_date: {
//       year_name: 'Sri Krodhi',
//       month_name: 'Pushyamu'
//     }
//   });

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const now = new Date();
//       setCurrentTime(now.toLocaleTimeString('en-US', {
//         hour: '2-digit',
//         minute: '2-digit',
//         second: '2-digit',
//         hour12: true
//       }));
//       setCurrentDate(now.toLocaleDateString('en-IN', {
//         day: '2-digit',
//         month: '2-digit',
//         year: 'numeric'
//       }).replace(/\//g, '-'));
//       setCurrentMonthYear(now.toLocaleDateString('en-US', {
//         month: 'long',
//         year: 'numeric'
//       }));
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <ImageBackground
//       source={{ uri: 'https://i.postimg.cc/gcLgQHQy/BG-1.jpg' }}
//       style={styles.container}
//       resizeMode="cover"
//     >
//       <ScrollView
//         contentContainerStyle={styles.scrollContainer}
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Header Section */}
//         <View style={styles.headerContainer}>
//           <View style={styles.headerContent}>
//             <View style={styles.headerLeft}>
//               <View style={styles.yearBox}>
//                 <Text style={styles.yearText}>{currentMonthYear.split(' ')[1]}</Text>
//                 <Text style={styles.monthText}>{currentMonthYear.split(' ')[0]}</Text>
//               </View>
//               <View style={styles.horoscopeBox}>
//                 <Text style={styles.horoscopeTitle}>Your Horoscope</Text>
//                 <Text style={styles.horoscopeSubtitle}>for Today</Text>
//               </View>
//             </View>
            
//             <View style={styles.timeBox}>
//               <Text style={styles.timeText}>{currentTime}</Text>
//             </View>
            
//             <View style={styles.headerRight}>
//               <View style={styles.rightHoroscopeBox}>
//                 <Text style={styles.horoscopeTitle}>Your Horoscope</Text>
//                 <Text style={styles.horoscopeSubtitle}>for Today</Text>
//               </View>
//               <View style={styles.rightYearBox}>
//                 <Text style={styles.yearText}>{currentMonthYear.split(' ')[1]}</Text>
//                 <Text style={styles.rashiText}>Rashi</Text>
//                 <Text style={styles.phalaText}>Phala</Text>
//               </View>
//             </View>
//           </View>
//         </View>

//         {/* Main Content */}
//         <View style={styles.mainContentContainer}>
//           {/* Left Dates Column */}
//           <View style={styles.datesColumn}>
//             {[26, 27, 28, 29, 30, 31].map((date, index) => (
//               <View key={index} style={styles.dateBox}>
//                 <Text style={styles.dateText}>{date}</Text>
//               </View>
//             ))}
//             <View style={styles.todayBox}>
//               <Text style={styles.todayText}>TODAY</Text>
//             </View>
//           </View>

//           {/* Right Content Section */}
//           <View style={styles.contentSection}>
//             <View style={styles.contentTop}>
//               {/* Yellow Card */}
//               <View style={styles.yellowCard}>
//                 <View style={styles.cardContent}>
//                   <View style={styles.cardLeft}>
//                     {/* Time Section */}
//                     <View style={styles.timeSection}>
//                       <View style={styles.timeRow}>
//                         <Sun size={moderateScale(24)} color="#FFD700" />
//                         <Text style={styles.timeValue}>{panchangData.sunrise}</Text>
//                       </View>
//                       <View style={styles.timeRow}>
//                         <Moon size={moderateScale(24)} color="#1a237e" />
//                         <Text style={styles.timeValue}>{panchangData.sunset}</Text>
//                       </View>
//                     </View>
                    
//                     {/* Tithi Section */}
//                     <View style={styles.infoSection}>
//                       <Text style={styles.symbol}>☸</Text>
//                       <View>
//                         <Text style={styles.sectionTitle}>Krishna Paksha</Text>
//                         <Text style={styles.sectionText}>{panchangData.tithi[0].name} till</Text>
//                         <Text style={styles.highlightText}>
//                           {panchangData.tithi[0].end} next
//                         </Text>
//                         <Text style={styles.sectionText}>{panchangData.tithi[1].name}</Text>
//                       </View>
//                     </View>
                    
//                     {/* Nakshatra Section */}
//                     <View style={styles.infoSection}>
//                       <Text style={styles.symbol}>⭐</Text>
//                       <View>
//                         <Text style={styles.sectionText}>{panchangData.nakshatra[0].name} till</Text>
//                         <Text style={styles.highlightText}>
//                           {panchangData.nakshatra[0].end} next
//                         </Text>
//                         <Text style={styles.sectionText}>{panchangData.nakshatra[1].name}</Text>
//                       </View>
//                     </View>
//                   </View>
                  
//                   <View style={styles.verticalLine} />
                  
//                   {/* Card Right Section */}
//                   <View style={styles.cardRight}>
//                     <Text style={styles.monthName}>{currentMonthYear.split(' ')[0]}</Text>
//                     <Text style={styles.vaara}>{panchangData.vaara}</Text>
//                     <Text style={styles.formattedDate}>{currentDate}</Text>
                    
//                     <View style={styles.calendarInfo}>
//                       <Text style={styles.calendarText}>
//                         Year - {calendarData.calendar_date.year_name}
//                       </Text>
//                       <Text style={styles.calendarText}>
//                         Month - {calendarData.calendar_date.month_name}
//                       </Text>
//                     </View>
//                   </View>
//                 </View>
//               </View>
              
//               {/* Black Card with Krishna Image */}
//               <View style={styles.blackCard}>
//                 <ImageBackground
//                   source={{ uri: 'https://i.postimg.cc/c4vyC3vX/1-1.jpg' }}
//                   style={styles.krishnaImage}
//                   resizeMode="contain"
//                 />
//               </View>
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.3)',
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     paddingBottom: scale(20),
//   },
//   headerContainer: {
//     width: '100%',
//     paddingTop: scale(30),
//   },
//   headerContent: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: scale(40),
//   },
//   headerLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   yearBox: {
//     backgroundColor: '#800080',
//     width: scale(120),
//     height: scale(120),
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: scale(12),
//     ...Platform.select({
//       ios: {
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: scale(2) },
//         shadowOpacity: 0.3,
//         shadowRadius: scale(6),
//       },
//       android: { elevation: 6 },
//     }),
//   },
//   yearText: {
//     fontSize: moderateScale(24),
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   monthText: {
//     fontSize: moderateScale(18),
//     color: 'white',
//   },
//   horoscopeBox: {
//     backgroundColor: '#f89635',
//     width: scale(200),
//     height: scale(100),
//     justifyContent: 'center',
//     paddingHorizontal: scale(20),
//     borderRadius: scale(12),
//     marginLeft: scale(30),
//     ...Platform.select({
//       ios: {
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: scale(2) },
//         shadowOpacity: 0.3,
//         shadowRadius: scale(6),
//       },
//       android: { elevation: 6 },
//     }),
//   },
//   horoscopeTitle: {
//     fontSize: moderateScale(20),
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   horoscopeSubtitle: {
//     fontSize: moderateScale(16),
//     color: 'white',
//   },
//   timeBox: {
//     backgroundColor: 'black',
//     width: scale(200),
//     height: scale(100),
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderBottomLeftRadius: scale(40),
//     borderBottomRightRadius: scale(40),
//     ...Platform.select({
//       ios: {
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: scale(2) },
//         shadowOpacity: 0.3,
//         shadowRadius: scale(6),
//       },
//       android: { elevation: 6 },
//     }),
//   },
//   timeText: {
//     fontSize: moderateScale(36),
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   headerRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   rightHoroscopeBox: {
//     backgroundColor: '#3f51b5',
//     width: scale(180),
//     height: scale(90),
//     justifyContent: 'center',
//     paddingHorizontal: scale(20),
//     borderRadius: scale(12),
//     marginRight: scale(30),
//     ...Platform.select({
//       ios: {
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: scale(2) },
//         shadowOpacity: 0.3,
//         shadowRadius: scale(6),
//       },
//       android: { elevation: 6 },
//     }),
//   },
//   rightYearBox: {
//     backgroundColor: '#800080',
//     width: scale(120),
//     height: scale(120),
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: scale(12),
//     ...Platform.select({
//       ios: {
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: scale(2) },
//         shadowOpacity: 0.3,
//         shadowRadius: scale(6),
//       },
//       android: { elevation: 6 },
//     }),
//   },
//   rashiText: {
//     fontSize: moderateScale(16),
//     color: 'white',
//   },
//   phalaText: {
//     fontSize: moderateScale(16),
//     color: 'white',
//   },
//   mainContentContainer: {
//     flexDirection: 'row',
//     marginTop: scale(20),
//     paddingHorizontal: scale(40),
//   },
//   datesColumn: {
//     width: scale(120),
//     backgroundColor: 'black',
//     borderRadius: scale(12),
//     paddingVertical: scale(20),
//   },
//   dateBox: {
//     backgroundColor: 'white',
//     width: scale(80),
//     height: scale(80),
//     marginLeft: scale(20),
//     marginTop: scale(20),
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: scale(12),
//     ...Platform.select({
//       ios: {
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: scale(2) },
//         shadowOpacity: 0.3,
//         shadowRadius: scale(6),
//       },
//       android: { elevation: 6 },
//     }),
//   },
//   dateText: {
//     fontSize: moderateScale(28),
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   todayBox: {
//     backgroundColor: '#800080',
//     width: scale(80),
//     height: scale(80),
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: scale(12),
//     marginTop: scale(20),
//     marginLeft: scale(20),
//   },
//   todayText: {
//     fontSize: moderateScale(20),
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   contentSection: {
//     flex: 1,
//     marginLeft: scale(40),
//   },
//   contentTop: {
//     flexDirection: 'row',
//   },
//   yellowCard: {
//     backgroundColor: '#fdf59c',
//     borderRadius: scale(20),
//     width: width * 0.55,
//     padding: scale(25),
//     ...Platform.select({
//       ios: {
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: scale(4) },
//         shadowOpacity: 0.3,
//         shadowRadius: scale(8),
//       },
//       android: { elevation: 6 },
//     }),
//   },
//   cardContent: {
//     flexDirection: 'row',
//   },
//   cardLeft: {
//     flex: 1,
//     paddingRight: scale(20),
//   },
//   timeSection: {
//     marginBottom: scale(24),
//   },
//   timeRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: scale(12),
//   },
//   timeValue: {
//     fontSize: moderateScale(22),
//     fontWeight: '600',
//     color: '#1a237e',
//     marginLeft: scale(12),
//   },
//   infoSection: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     marginBottom: scale(24),
//   },
//   symbol: {
//     fontSize: moderateScale(28),
//     marginRight: scale(12),
//   },
//   sectionTitle: {
//     fontSize: moderateScale(24),
//     fontWeight: 'bold',
//     color: '#1a237e',
//     marginBottom: scale(6),
//   },
//   sectionText: {
//     fontSize: moderateScale(20),
//     color: '#1a237e',
//     marginBottom: scale(6),
//   },
//   highlightText: {
//     fontSize: moderateScale(20),
//     color: '#1565c0',
//     fontWeight: 'bold',
//     marginBottom: scale(6),
//   },
//   verticalLine: {
//     width: 1,
//     backgroundColor: '#1a237e',
//     opacity: 0.2,
//     marginHorizontal: scale(20),
//   },
//   cardRight: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   monthName: {
//     fontSize: moderateScale(36),
//     fontWeight: 'bold',
//     color: '#1a237e',
//     marginBottom: scale(12),
//   },
//   vaara: {
//     fontSize: moderateScale(36),
//     fontWeight: 'bold',
//     color: '#1a237e',
//     marginBottom: scale(20),
//   },
//   formattedDate: {
//     fontSize: moderateScale(48),
//     fontWeight: 'bold',
//     color: '#1a237e',
//     marginBottom: scale(28),
//   },
//   calendarInfo: {
//     marginTop: scale(28),
//   },
//   calendarText: {
//     fontSize: moderateScale(24),
//     fontWeight: '600',
//     color: '#1a237e',
//     marginBottom: scale(12),
//   },
//   blackCard: {
//     backgroundColor: 'black',
//     borderRadius: scale(20),
//     width: width * 0.3,
//     aspectRatio: 1,
//     borderWidth: scale(6),
//     borderColor: 'white',
//     marginLeft: scale(30),
//     ...Platform.select({
//       ios: {
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: scale(4) },
//         shadowOpacity: 0.3,
//         shadowRadius: scale(8),
//       },
//       android: { elevation: 6 },
//     }),
//   },
//   krishnaImage: {
//     width: '100%',
//     height: '100%',
//     alignSelf: 'center',
//   },
// });

// export default HomeScreen;


import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Dimensions,
  Platform,
} from 'react-native';
import { Sun, Moon } from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

// Responsive scaling
const BASE_WIDTH = 1280;
const scale = (size) => (width / BASE_WIDTH) * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

const HomeScreen = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [currentMonthYear, setCurrentMonthYear] = useState('');
  const [panchangData] = useState({
    sunrise: '6:52 AM',
    sunset: '6:04 PM',
    tithi: [
      { name: 'Krishna Paksha Thrayodasi', end: '08:35 PM' },
      { name: 'Chathurdasi', end: '' }
    ],
    nakshatra: [
      { name: 'Moola', end: '09:02 AM' },
      { name: 'Purva Ashadha', end: '' }
    ],
    vaara: 'Monday'
  });
  const [calendarData] = useState({
    calendar_date: {
      year_name: 'Sri Krodhi',
      month_name: 'Pushyamu'
    }
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }));
      setCurrentDate(now.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }).replace(/\//g, '-'));
      setCurrentMonthYear(now.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric'
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <ImageBackground
      source={{ uri: 'https://i.postimg.cc/gcLgQHQy/BG-1.jpg' }}
      style={styles.container}
      resizeMode="cover"
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section */}
        <View style={styles.headerContainer}>
          <View style={styles.headerContent}>
            <View style={styles.headerLeft}>
              <View style={styles.yearBox}>
                <Text style={styles.yearText}>{currentMonthYear.split(' ')[1]}</Text>
                <Text style={styles.monthText}>{currentMonthYear.split(' ')[0]}</Text>
              </View>
              <View style={styles.horoscopeBox}>
                <Text style={styles.horoscopeTitle}>Your Horoscope</Text>
                <Text style={styles.horoscopeSubtitle}>for Today</Text>
              </View>
            </View>
            
            <View style={styles.timeBox}>
              <Text style={styles.timeText}>{currentTime}</Text>
            </View>
            
            <View style={styles.headerRight}>
              <View style={styles.rightHoroscopeBox}>
                <Text style={styles.horoscopeTitle}>Your Horoscope</Text>
                <Text style={styles.horoscopeSubtitle}>for Today</Text>
              </View>
              <View style={styles.rightYearBox}>
                <Text style={styles.yearText}>{currentMonthYear.split(' ')[1]}</Text>
                <Text style={styles.rashiText}>Rashi</Text>
                <Text style={styles.phalaText}>Phala</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Main Content */}
        <View style={styles.mainContentContainer}>
          {/* Left Dates Column */}
          <View style={styles.datesColumn}>
            {[26, 27, 28, 29, 30, 31].map((date, index) => (
              <View key={index} style={styles.dateBox}>
                <Text style={styles.dateText}>{date}</Text>
              </View>
            ))}
            <View style={styles.todayBox}>
              <Text style={styles.todayText}>TODAY</Text>
            </View>
          </View>

          {/* Right Content Section */}
          <View style={styles.contentSection}>
            <View style={styles.contentTop}>
              {/* Yellow Card */}
              <View style={styles.yellowCard}>
                <View style={styles.cardContent}>
                  <View style={styles.cardLeft}>
                    {/* Time Section */}
                    <View style={styles.timeSection}>
                      <View style={styles.timeRow}>
                        <Sun size={moderateScale(24)} color="#FFD700" />
                        <Text style={styles.timeValue}>{panchangData.sunrise}</Text>
                      </View>
                      <View style={styles.timeRow}>
                        <Moon size={moderateScale(24)} color="#1a237e" />
                        <Text style={styles.timeValue}>{panchangData.sunset}</Text>
                      </View>
                    </View>
                    
                    {/* Tithi Section */}
                    <View style={styles.infoSection}>
                      <Text style={styles.symbol}>☸</Text>
                      <View>
                        <Text style={styles.sectionTitle}>Krishna Paksha</Text>
                        <Text style={styles.sectionText}>{panchangData.tithi[0].name} till</Text>
                        <Text style={styles.highlightText}>
                          {panchangData.tithi[0].end} next
                        </Text>
                        <Text style={styles.sectionText}>{panchangData.tithi[1].name}</Text>
                      </View>
                    </View>
                    
                    {/* Nakshatra Section */}
                    <View style={styles.infoSection}>
                      <Text style={styles.symbol}>⭐</Text>
                      <View>
                        <Text style={styles.sectionText}>{panchangData.nakshatra[0].name} till</Text>
                        <Text style={styles.highlightText}>
                          {panchangData.nakshatra[0].end} next
                        </Text>
                        <Text style={styles.sectionText}>{panchangData.nakshatra[1].name}</Text>
                      </View>
                    </View>
                  </View>
                  
                  <View style={styles.verticalLine} />
                  
                  {/* Card Right Section */}
                  <View style={styles.cardRight}>
                    <Text style={styles.monthName}>{currentMonthYear.split(' ')[0]}</Text>
                    <Text style={styles.vaara}>{panchangData.vaara}</Text>
                    <Text style={styles.formattedDate}>{currentDate}</Text>
                    
                    <View style={styles.calendarInfo}>
                      <Text style={styles.calendarText}>
                        Year - {calendarData.calendar_date.year_name}
                      </Text>
                      <Text style={styles.calendarText}>
                        Month - {calendarData.calendar_date.month_name}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              
              {/* Black Card with Krishna Image */}
              <View style={styles.blackCard}>
                <ImageBackground
                  source={{ uri: 'https://i.postimg.cc/c4vyC3vX/1-1.jpg' }}
                  style={styles.krishnaImage}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: scale(20),
  },
  headerContainer: {
    width: '100%',
    paddingTop: scale(30),
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(40),
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  yearBox: {
    backgroundColor: '#800080',
    width: scale(120),
    height: scale(120),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(12),
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: scale(2) },
        shadowOpacity: 0.3,
        shadowRadius: scale(6),
      },
      android: { elevation: 6 },
    }),
  },
  yearText: {
    fontSize: moderateScale(24),
    color: 'white',
    fontWeight: 'bold',
  },
  monthText: {
    fontSize: moderateScale(18),
    color: 'white',
  },
  horoscopeBox: {
    backgroundColor: '#f89635',
    width: scale(200),
    height: scale(100),
    justifyContent: 'center',
    paddingHorizontal: scale(20),
    borderRadius: scale(12),
    marginLeft: scale(30),
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: scale(2) },
        shadowOpacity: 0.3,
        shadowRadius: scale(6),
      },
      android: { elevation: 6 },
    }),
  },
  horoscopeTitle: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    color: 'white',
  },
  horoscopeSubtitle: {
    fontSize: moderateScale(16),
    color: 'white',
  },
  timeBox: {
    backgroundColor: 'black',
    width: scale(200),
    height: scale(100),
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: scale(40),
    borderBottomRightRadius: scale(40),
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: scale(2) },
        shadowOpacity: 0.3,
        shadowRadius: scale(6),
      },
      android: { elevation: 6 },
    }),
  },
  timeText: {
    fontSize: moderateScale(36),
    fontWeight: 'bold',
    color: 'white',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightHoroscopeBox: {
    backgroundColor: '#3f51b5',
    width: scale(180),
    height: scale(90),
    justifyContent: 'center',
    paddingHorizontal: scale(20),
    borderRadius: scale(12),
    marginRight: scale(30),
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: scale(2) },
        shadowOpacity: 0.3,
        shadowRadius: scale(6),
      },
      android: { elevation: 6 },
    }),
  },
  rightYearBox: {
    backgroundColor: '#800080',
    width: scale(120),
    height: scale(120),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(12),
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: scale(2) },
        shadowOpacity: 0.3,
        shadowRadius: scale(6),
      },
      android: { elevation: 6 },
    }),
  },
  rashiText: {
    fontSize: moderateScale(16),
    color: 'white',
  },
  phalaText: {
    fontSize: moderateScale(16),
    color: 'white',
  },
  mainContentContainer: {
    flexDirection: 'row',
    marginTop: scale(20),
    paddingHorizontal: scale(40),
  },
  datesColumn: {
    width: scale(120),
    backgroundColor: 'black',
    borderRadius: scale(12),
    paddingVertical: scale(20),
  },
  dateBox: {
    backgroundColor: 'white',
    width: scale(80),
    height: scale(80),
    marginLeft: scale(20),
    marginTop: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(12),
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: scale(2) },
        shadowOpacity: 0.3,
        shadowRadius: scale(6),
      },
      android: { elevation: 6 },
    }),
  },
  dateText: {
    fontSize: moderateScale(28),
    fontWeight: 'bold',
    color: 'black',
  },
  todayBox: {
    backgroundColor: '#800080',
    width: scale(80),
    height: scale(80),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(12),
    marginTop: scale(20),
    marginLeft: scale(20),
  },
  todayText: {
    fontSize: moderateScale(20),
    color: 'white',
    fontWeight: 'bold',
  },
  contentSection: {
    flex: 1,
    marginLeft: scale(40),
  },
  contentTop: {
    flexDirection: 'row',
  },
  yellowCard: {
    backgroundColor: '#fdf59c',
    borderRadius: scale(20),
    width: width * 0.55,
    padding: scale(25),
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: scale(4) },
        shadowOpacity: 0.3,
        shadowRadius: scale(8),
      },
      android: { elevation: 6 },
    }),
  },
  cardContent: {
    flexDirection: 'row',
  },
  cardLeft: {
    flex: 1,
    paddingRight: scale(20),
  },
  timeSection: {
    marginBottom: scale(24),
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scale(12),
  },
  timeValue: {
    fontSize: moderateScale(22),
    fontWeight: '600',
    color: '#1a237e',
    marginLeft: scale(12),
  },
  infoSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: scale(24),
  },
  symbol: {
    fontSize: moderateScale(28),
    marginRight: scale(12),
  },
  sectionTitle: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    color: '#1a237e',
    marginBottom: scale(6),
  },
  sectionText: {
    fontSize: moderateScale(20),
    color: '#1a237e',
    marginBottom: scale(6),
  },
  highlightText: {
    fontSize: moderateScale(20),
    color: '#1565c0',
    fontWeight: 'bold',
    marginBottom: scale(6),
  },
  verticalLine: {
    width: 1,
    backgroundColor: '#1a237e',
    opacity: 0.2,
    marginHorizontal: scale(20),
  },
  cardRight: {
    flex: 1,
    justifyContent: 'center',
  },
  monthName: {
    fontSize: moderateScale(36),
    fontWeight: 'bold',
    color: '#1a237e',
    marginBottom: scale(12),
  },
  vaara: {
    fontSize: moderateScale(36),
    fontWeight: 'bold',
    color: '#1a237e',
    marginBottom: scale(20),
  },
  formattedDate: {
    fontSize: moderateScale(48),
    fontWeight: 'bold',
    color: '#1a237e',
    marginBottom: scale(28),
  },
  calendarInfo: {
    marginTop: scale(28),
  },
  calendarText: {
    fontSize: moderateScale(24),
    fontWeight: '600',
    color: '#1a237e',
    marginBottom: scale(12),
  },
  blackCard: {
    backgroundColor: 'black',
    borderRadius: scale(20),
    width: width * 0.3,
    aspectRatio: 1,
    borderWidth: scale(6),
    borderColor: 'white',
    marginLeft: scale(30),
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: scale(4) },
        shadowOpacity: 0.3,
        shadowRadius: scale(8),
      },
      android: { elevation: 6 },
    }),
  },
  krishnaImage: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
});

export default HomeScreen;