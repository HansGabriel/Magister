import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import colors from '../assets/colors/colors';
import { color, round } from 'react-native-reanimated';

Feather.loadFont();
MaterialCommunityIcons.loadFont();

export default Splash = ({ navigation }) => {
  return (
    <View style={styles.homeScreen}>
      <Image source={require('../assets/images/logo.png')} />
    </View>
  )
};

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
