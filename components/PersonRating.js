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

export default PersonRating = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    'Poppins': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
  });


  return (
    <ScrollView style={styles.infoContainer}>
      <Image source={require('../assets/images/info/george.png')} />
      <TouchableOpacity onPress={()=>navigation.navigate('PersonInfo')}>
      <View style={styles.buttonWrapper}>
        <View style={styles.infoButton}>
          <Text style={styles.infoText}>Information</Text>
        </View>
        <View style={styles.reviewButton}>
          <Text style={styles.reviewText}>Review</Text>
        </View>
      </View>
      </TouchableOpacity>
      <View style={styles.marginMain}>
        <View style={styles.starWrapper}>
          <Image style={styles.generalStar} source={require('../assets/images/rating/general.png')} />
          <View style={styles.starContainer}>
            <View style={styles.starFirstRow}>
              <Image style={styles.miniStar} source={require('../assets/images/rating/1star.png')} />
              <Image style={styles.miniStar} source={require('../assets/images/rating/2star.png')} />
              <Image style={styles.miniStar} source={require('../assets/images/rating/3star.png')} />
            </View>
            <View style={styles.starSecondRow}>
              <Image style={styles.miniStar} source={require('../assets/images/rating/4star.png')} />
              <Image style={styles.miniStar} source={require('../assets/images/rating/5star.png')} />
            </View>
          </View>
        </View>
                <View style={styles.infoWrapper}>
          <Text style={styles.infoTitle}>Last Comment</Text>
          <Text style={styles.infoParagraph}>{"Pretty Good, I left with an even better understanding on calculus than when I did with my professor. The whole tutoring was also fun and I didn’t get bored, and I got even more interested. Will ask to tutor me again."} </Text>
        </View>
        <View style={styles.meterWrapper}>
          <View style={styles.meterRow}>
            <Text style={styles.ratingText}>5 Star</Text>
            <Image source={require('../assets/images/rating/Rectangle1.png')} />
            <Image style={styles.greyContainer} source={require('../assets/images/rating/Rectangle.png')} />
          </View>
          <View style={styles.meterRow}>
            <Text style={styles.ratingText}>4 Star</Text>
            <Image source={require('../assets/images/rating/Rectangle2.png')} />
            <Image style={styles.greyContainer} source={require('../assets/images/rating/Rectangle.png')} />
          </View>
          <View style={styles.meterRow}>
            <Text style={styles.ratingText}>3 Star</Text>
            <Image source={require('../assets/images/rating/Rectangle3.png')} />
            <Image style={styles.greyContainer} source={require('../assets/images/rating/Rectangle.png')} />
          </View>
          <View style={styles.meterRow}>
            <Text style={styles.ratingText}>2 Star</Text>
            <Image source={require('../assets/images/rating/Rectangle4.png')} />
            <Image style={styles.greyContainer} source={require('../assets/images/rating/Rectangle.png')} />
          </View>
          <View style={styles.meterRow}>
            <Text style={styles.ratingText}>1 Star</Text>
            <Image source={require('../assets/images/rating/Rectangle5.png')} />
            <Image style={styles.greyContainer} source={require('../assets/images/rating/Rectangle.png')} />
          </View>
        </View>
        <View style={styles.commentContainer}>
          <Text style={styles.commentText}>{"Awesome, he knows what’s he’s doing bro, he’s pretty knarley and rad with all the algebra stuff. I couldn’t understand it when I was 4 years in Highschool but He made understand in just like an hour bro, that’s crazy."}</Text>
          <View style={styles.footerComment}>
            <Text style={styles.authorStyle}>Kyle Valencia</Text>
            <View style={styles.ratingContainer}>
              <Image source={require('../assets/images/rating/lightstar.png')} />
              <Image source={require('../assets/images/rating/lightstar.png')} />
              <Image source={require('../assets/images/rating/lightstar.png')} />
              <Image source={require('../assets/images/rating/lightstar.png')} />
              <Image source={require('../assets/images/rating/darkstar.png')} />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    flex: 1,
    flexDirection: 'row',
    marginTop: -50
  },
  infoButton: {
    backgroundColor: colors.background,
    width: 190, 
    height: 50,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  reviewButton: {
    backgroundColor: colors.darkBlue,
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
    backgroundColor: colors.white,
    overflow: 'hidden',
    zIndex: -1
  },
  infoWrapper: {
    marginTop: 0
  },
  marginMain: {
    marginLeft: 30,
    marginRight: 20
  },
  starWrapper: {
    marginVertical: 30,
    flexDirection: 'row',
  },
  starFirstRow: {
    flexDirection: 'row',
  },
  starSecondRow: {
    flexDirection: 'row',
  },
  generalStar: {
    marginRight: 25
  },
  miniStar: {
    marginRight: 20,
    marginBottom: 20
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
  meterWrapper: {
    marginTop: 50
  },
  meterRow: {
    flexDirection: 'row',
    marginBottom: 10
  },
  ratingText: {
    marginRight: 10,
    fontFamily: 'Poppins',
    color: colors.grey,
    fontSize: 15,
  },
  greyContainer: {
    position: 'absolute',
    zIndex: -1,
    left: 55, 
    top: 1
  },
  commentContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
    borderRadius: 20,
    borderColor: '#F5F5F5',
    borderWidth: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
  commentText: {
    fontFamily: 'Poppins',
    fontSize: 12,
    letterSpacing: 0.26,
    marginBottom: 50
  }, 
  footerComment: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    backgroundColor: colors.lightGrey,
    paddingVertical: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 80,
    top: 120,
  },
  ratingContainer: {
    flexDirection: 'row'
  },
  authorStyle: {
    marginRight: 5
  }
});
