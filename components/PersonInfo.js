import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
  ScrollView
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFonts } from 'expo-font';
import colors from '../assets/colors/colors';

export default PersonInfo = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    'Poppins': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
  });


  return (
    <View>
      <Image source={require('../assets/images/info/george.png')} />
      <TouchableOpacity onPress={()=>navigation.navigate('PersonRating')} >
      <View style={styles.buttonWrapper}>
        <View style={styles.infoButton}>
          <Text style={styles.infoText}>Info</Text>
        </View>
          <View style={styles.reviewButton}>
            <Text style={styles.reviewText}>Review</Text>
          </View>
      </View>
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <View style={styles.headerProfile}>
          <Text style={styles.name}>George Abaygar</Text>
          <View style={styles.ratingContainer}>
            <MaterialCommunityIcons style={styles.star} name='star' size={15} />
            <MaterialCommunityIcons style={styles.star} name='star' size={15} />
            <MaterialCommunityIcons style={styles.star} name='star' size={15} />
            <MaterialCommunityIcons style={styles.star} name='star' size={15} />
            <MaterialCommunityIcons style={styles.star} name='star' size={15} />
            <MaterialCommunityIcons style={styles.star} name='star' size={15} />
            <Text style={styles.available}>Available Now</Text>
          </View>
          <Text style={styles.address}>Tokyo, Japan</Text>
        </View>
        <View style={styles.infoWrapper}>
          <Text style={styles.infoTitle}>Info</Text>
          <Text style={styles.infoParagraph}>{"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. "} </Text>
        </View>
        <View style={styles.contWrapper}>
          <Text style={styles.contactText}>Contact</Text>
          <View style={styles.contactWrapper}>
            <View style={styles.phoneButton}>
              <Image source={require('../assets/images/info/path1.png')} />
              <Text style={styles.phoneText}>+1 232 2323 23</Text>
            </View>
            <View style={styles.websiteButton}>
              <Image source={require('../assets/images/info/website.png')} />
              <Text style={styles.websiteText}>cpu.edu.ph</Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Book')} >
      <View style={styles.bookContainer}>
        <View style={styles.bookButton}>
          <Text style={styles.bookText}>Book</Text>
        </View>
      </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    flex: 1,
    flexDirection: 'row',
    marginTop: -50
  },
  infoButton: {
    backgroundColor: colors.darkBlue,
    width: 190, 
    height: 50,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  reviewButton: {
    backgroundColor: colors.background,
    width: 190, 
    height: 50,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'Poppins'
  },
  reviewText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'Poppins'
  },
  infoContainer: {
    marginLeft: 30,
    marginRight: 20
  },
  ratingContainer: {
    flexDirection: 'row'
  },
  name: {
    marginTop: 20,
    marginBottom: 10,
    fontFamily: 'Poppins',
    fontSize: 15
  },
  star: {
    color: colors.yellow,
  },
  available: {
    marginLeft: 20,
    color: colors.lightGreen,
  },
  address: {
    marginTop: 10,
    letterSpacing: 0.35,
    color: colors.grey,
    fontFamily: 'Poppins'
  },
  infoWrapper: {
    marginTop: 20
  },
  infoTitle: {
    fontFamily: 'Popper', 
    fontWeight: 'bold',
    fontSize: 16
  }, 
  infoParagraph: {
    marginTop: 10,
    lineHeight: 20,
    letterSpacing: 0.35,
    fontWeight: 'Thin'
  },
  contWrapper: {
    marginTop: 10
  },
  contactText: {
    fontFamily: 'Popper', 
    fontWeight: 'bold',
    fontSize: 16
  },
  contactWrapper: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  phoneButton: {
    flexDirection: 'row',
    backgroundColor: colors.background,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginRight: 20
  },
  websiteButton: {
    flexDirection: 'row',
    backgroundColor: colors.lightBlue,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  phoneText: {
    color: colors.white,
    marginLeft: 10
  },
  websiteText: {
    color: colors.darkBlue,
    marginLeft: 10
  },
  bookContainer: {
    backgroundColor: "#F8F8F8",
    position: 'fixed',
    height: 200,
    alignItems: 'center'
  },
  bookButton: {
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 40,
    backgroundColor: colors.background
  },
  bookText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold'
  }
});
