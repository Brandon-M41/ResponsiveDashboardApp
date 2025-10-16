import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import DashboardScreen from './src/screens/DashboardScreen';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#3498db" />
      <DashboardScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp('2%'), // optional padding that scales with screen width
    paddingTop: hp('1%'),       // optional padding that scales with screen height
    backgroundColor: '#f5f5f5', // optional background
  },
});

export default App;
