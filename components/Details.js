import React,  { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
  ScrollView,
  Dimensions
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import subjectData from '../assets/data/subjectData'
import { useFonts } from 'expo-font';
import colors from '../assets/colors/colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default Details = ({ navigation }) => {

  const [value, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <Image source={require('../assets/images/details/terence_tao.png')} />
          <View style={styles.detailsInfo}>
            <Text style={{color: colors.white, fontWeight: 'bold', fontSize: 14}}>Coach of the week</Text>
            <Text style={{color: colors.white,  fontSize: 19, marginTop: 30}}>Terrence Tao</Text>
            <Text style={{color: colors.white,  fontSize: 19, marginTop: 5}}>Coach</Text>
            <View style={styles.starContainer}>
              <View>
              </View>
            </View>
            <Text style={{color: colors.white, fontSize: 15, marginTop: 10}}>125 Votes</Text>
          </View>
        </View>
      </View>
      <View style={styles.fancyGraphic}>
      </View>
      <Image style={styles.price} source={require('../assets/images/details/price.png')} />
      <View style={styles.mainDetails}>
        <View>
          <View style={styles.detailContainer}>
            <Text style={styles.infoTitle}>Subjects</Text>
            <Text style={styles.infoDef}>Differential Calculus, Discrete Math, 
Algebra 1, and Algebra 2</Text>
          </View>
          <View style={styles.detailContainer}> 
            <Text style={styles.infoTitle}>Bio</Text>
            <Text style={styles.infoDef}>Terrence has been the coach of the American IMO 
team for the past 4 years. He is the youngest to
ever win a bronze, silver, and gold medal at the IMO.</Text>
          </View>
          <View style={styles.detailContainer}> 
            <Text style={[styles.infoTitle, {marginBottom: 10}]}>Badges</Text>
            <View style={styles.iconContainer}>
              <View>
                <Image style={{marginRight: 30}} source={require('../assets/images/details/pieces.png')} />
              </View>
              <View>
                <Image source={require('../assets/images/details/pieces2.png')} />
              </View>
            </View>
          </View>
          <View style={{marginTop: -30, marginBottom: 20}}> 
            <Text style={[styles.infoTitle, {marginBottom: 10}]}>Hours</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => setCount(value-1)}>
              <View style={styles.iconContainer}>
                <View style={styles.blueContainer}>
                  <Feather size={24} name='minus' style={{color: '#48B6DB', marginLeft: 4, marginTop: 4}} />
                </View>
              </View>
              </TouchableOpacity>
              <View style={{justifyContent:'center', marginHorizontal: 25}}>
                <Text style={{fontSize: 20}}>{value}</Text>
              </View>
              <TouchableOpacity onPress={() => setCount(value+1)}>
              <View style={styles.iconContainer}>
                <View style={styles.blueContainer}>
                  <Feather size={24} name='plus' style={{color: '#48B6DB', marginLeft: 4, marginTop: 4}} />
                </View>
              </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Book')}>
      <View style={styles.footer}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Book</Text>
        </View>
      </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: colors.background
  },
  headerContainer: {
    marginTop: 30,
    marginBottom: 60,
    marginHorizontal: 10,
    flexDirection: 'row'
  },
  detailsInfo: {
    marginLeft: 40
  },
  starContainer: {
    flexDirection: 'row',
    marginTop: 20
  },
  fancyGraphic: {
    position: 'absolute',
    backgroundColor: colors.white,
    width: windowWidth,
    top: 200,
    borderTopLeftRadius: 40,
    height: 50
  },
  price: {
    position: 'absolute',
    top: 180,
    left: 175
  },
  mainDetails: {
    backgroundColor: colors.white,
    paddingHorizontal: 15,
  },
  iconContainer: {
    flexDirection: 'row'
  },
  blueContainer: {
    width: 33,
    height: 33,
    borderRadius: 9,
    backgroundColor: colors.lightBlue
  },
  footer: {
    zIndex: 2,
    backgroundColor: colors.creamBlue,
    height: 75,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    backgroundColor: colors.background,
    paddingVertical: 15,
    paddingHorizontal: 70,
    borderRadius: 24
  },
  buttonText: {
    color: colors.white
  },
  detailContainer: {
    marginBottom: 15
  },
  infoTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5,
  },
  infoDef: {
    lineHeight: 20
  }
});
