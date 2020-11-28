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
import subjectData from '../assets/data/subjectData';
import classData from '../assets/data/classData'
import { useFonts } from 'expo-font';
import colors from '../assets/colors/colors';

export default Book = ({ navigation }) => {

  const renderItem = ({ item }) => {
    return (
        <View style={styles.subjectContainer}>
          <Image
            source={item.image}
          />
          <Text style={{marginTop: 5}}>{item.title}</Text>
          <Text style={{color:colors.grey, fontSize: 10}}>{item.time}</Text>
        </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
    <View style={styles.container}>
      <View>
        <View style={styles.details}>
          <Image style={{marginRight: 25}} source={require('../assets/images/book/user.png')} />
          <Text>Terence Tao</Text>
        </View>
        <View style={styles.details}>
          <Image style={styles.icon} source={require('../assets/images/book/location.png')} />
          <Text>Old Student House 56 Street</Text>
        </View>
        <View style={styles.details}>
          <Image style={styles.icon} source={require('../assets/images/book/Shape.png')} />
          <Text>13:00 Today, Jul 24 </Text>
        </View>
      </View>
      <View style={styles.subjectHeader}>
        <Text style={{fontFamily: 'Poppins', fontWeight: 'bold', }}>Class</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={classData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
        />
      </View>
      <View style={styles.midLayer}>
        <Text style={{color: colors.grey, fontSize: 20}}>Tutor Price</Text>
        <Text style={{fontSize: 20}}>$154</Text>
      </View>
    </View>
    <View style={styles.lastLayer}>
        <Text style={{color: '#2C3D55', fontWeight: '10', marginBottom: 15}}>4 Classes</Text>
        <View style={styles.oneLine}>
          <Text style={{color: '#2C3D55', fontWeight: 'bold', fontSize: 16}}>Total: $160</Text>
          <View style={styles.button}>
            <Text style={{color: colors.white, fontSize: 15, fontWeight: 'bold'}}>Book</Text>
          </View>
        </View>
    </View>
    <View style={styles.footer}>
      <TouchableOpacity onPress={()=>navigation.navigate('Main')} >
      <View style={styles.cancelButton}>
        <Text style={{color: '#2C3D55', fontSize: 15, fontWeight: 'bold'}}>Cancel Booking</Text>
      </View>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    marginBottom: 20
  },
  icon: {
    marginRight: 40
  },
  container: {
    marginTop: 50,
    paddingHorizontal: 30
  },
  midLayer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 70,
    marginBottom: 40
  },
  lastLayer: {
    backgroundColor: '#F8F8F8',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  oneLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    paddingVertical: 20,
    backgroundColor: colors.background,
    paddingHorizontal: 70,
    borderRadius: 40,
    marginTop: -20
  },
  cancelButton: {
    backgroundColor: '#F6F4F5',
    paddingHorizontal: 70,
    paddingVertical: 20,
    borderRadius: 20
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
    backgroundColor: colors.white,
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
