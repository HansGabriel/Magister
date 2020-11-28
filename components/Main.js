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
import subjectData from '../assets/data/subjectData'
import { useFonts } from 'expo-font';
import colors from '../assets/colors/colors';

export default Main = ({ navigation }) => {

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={()=>navigation.navigate('PersonInfo')}>
        <View style={styles.subjectContainer}>
          <Image
            source={item.image}
          />
          <Text style={{marginTop: 5}}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.addressButton} source={require('../assets/images/main/map.png')} />
        <Image source={require('../assets/images/main/marcus.png')} />
      </View>
      <View style={styles.searchConainer}>
        <Image source={require('../assets/images/main/search.png')} />
      </View>
      <View style={styles.addressContainer}>
        <Image source={require('../assets/images/main/address1.png')} />
        <Image source={require('../assets/images/main/address2.png')} />
      </View>
      <View style={styles.subjectHeader}>
        <Text style={{fontFamily: 'Poppins', fontWeight: 'bold', }}>Explore by Subject</Text>
        <Text style={{fontFamily: 'Poppines', color: colors.grey}}>See All (12)</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={subjectData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
        />
      </View>
      <View style={styles.dealContainer}>
        <Text style={{fontFamily: 'Poppins', fontWeight: 'bold' }}>Deals of the day</Text>
        <View style={styles.dealWrapper}>
          <Image style={{marginRight: 20}} source={require('../assets/images/main/language1.png')} />
          <View>
            <Text style={{fontFamily: 'Poppins', fontWeight: 'bold', }}>Language Lessons Pack</Text>
            <Text>10 Lessons</Text>
            <Text>Total of 30</Text>
            <Text>hours</Text>
            <Text style={{color: '#EF6A62',  fontWeight: 'bold'}}>$ 50</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Details')}>
        <View style={{marginTop: 20}}>
          <Image source={require('../assets/images/main/campain.png')} />
        </View>
      </TouchableOpacity>
    </ScrollView>
    <View style={styles.footer}>
      <Image style={styles.navItem} source={require('../assets/images/main/grocery.png')} />
      <Image style={styles.navItem} source={require('../assets/images/main/news.png')} />
      <Image style={styles.navItem} source={require('../assets/images/main/favorites.png')} />
      <Image style={styles.navItem} source={require('../assets/images/main/order.png')} />
    </View>
    <View style={styles.circleIcon}>
      <Image source={require('../assets/images/main/Oval.png')} />
      <Image style={styles.shoppingLogo} source={require('../assets/images/main/shopping.png')} />
      <Text style={{marginTop: -35, marginLeft: 9, color: colors.white}}>$160</Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 50
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  addressButton: {
    marginTop: 30
  },
  searchConainer: {
    marginTop: 20
  },
  addressContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  subjectHeader: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  listContainer: {
    marginTop: 20
  },
  subjectContainer: {
    marginRight: 30,
    justifyContent:'center',
    textAlign: 'center',
    alignItems: 'center'
  }, 
  dealContainer: {
    marginTop: 20
  },
  dealWrapper: {
    flexDirection: 'row',
    marginTop: 20,
  },
  footer: {
    zIndex: 2,
    backgroundColor: colors.creamBlue,
    height: 75,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  navItem: {
    marginRight: 25,
    marginLeft: 25
  },
  circleIcon: {
    position: 'absolute',
    top: 560,
    left: 160,
    zIndex: 3
  },
  shoppingLogo: {
    marginLeft: 15,
    marginTop: -50,
  }
});
