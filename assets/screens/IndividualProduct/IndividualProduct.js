import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView, TouchableOpacity } from 'react-native';

export default function IndividualProduct() {

  const [headerImage, setHeaderImage] = useState(require('./assets/BG-Image.png'));

  const handleImagePress = (image) => {
    setHeaderImage(image);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerImageContainer}>
        <Image
        style={styles.headerImage}
        source={headerImage}
        />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Suzuki Cultus</Text>
          <Image
            style={styles.favIcon}
            source={require('./assets/Icons/fav.png')}
          />
        </View>
        <Text style={styles.subheadingText}>210,000-/ PKR</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        horizontal={true}
      >
        <Image
          style={styles.image}
          source={require('./assets/car.png')}
        />
        <Image
          style={styles.image}
          source={require('./assets/car.png')}
        />
        <Image
          style={styles.image}
          source={require('./assets/car.png')}
        />
        <Image
          style={styles.image}
          source={require('./assets/car.png')}
        />
        <Image
          style={styles.image}
          source={require('./assets/car.png')}
        />
      </ScrollView>

      <View style={styles.detailContainer}>
        <Text style={styles.detailHeading}>Details</Text>
        <View style={styles.detailMainContainer}>
        <ScrollView>
          <View style={styles.detailItem}>
            <Text style={styles.detailText}>Lorem ipsum dolor sit amet</Text>
            <Text style={styles.subDetailText}>Subtext 1</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailText}>consectetur adipiscing elit</Text>
            <Text style={styles.subDetailText}>Subtext 2</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailText}>Sed eget nisi aliquam</Text>
            <Text style={styles.subDetailText}>Subtext 3</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailText}>fermentum libero at</Text>
            <Text style={styles.subDetailText}>Subtext 4</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailText}>consectetur massa</Text>
            <Text style={styles.subDetailText}>Subtext 5</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailText}>consectetur massa</Text>
            <Text style={styles.subDetailText}>Subtext 5</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailText}>consectetur massa</Text>
            <Text style={styles.subDetailText}>Subtext 5</Text>
          </View>
        </ScrollView>
        </View>
      </View>
      
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button1} activeOpacity={0.9} >
          <Text style={styles.buttonText1}>Buy </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} activeOpacity={0.9} >
          <Text style={styles.buttonText2}>Contact Seller </Text>
      </TouchableOpacity>    
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },

  headerImageContainer: {
   justifyContent: 'center',
   alignItems: 'center',
  },

  headerImage: {
    width: '100%',
    height: 240,
    marginBottom: 8,
  },

  textContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 10,
  },

  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },

  headingText: {
    fontSize: 25,
    fontWeight: '700',
    color: 'black',
  },

  subheadingText: {
    fontSize: 15,
    fontWeight: 'normal',
    color: 'black',
  },

  scrollViewContent: {
    justifyContent: 'center',
    
  },

  image: {
    width: 110,
    height: 110,
    marginHorizontal: 8,
    borderRadius: 10,
  },

  favIcon: {
    width: 28,
    height: 25,
    tintColor: 'black',
  },

  detailContainer: {
    paddingHorizontal: 16,
    flex: 1,
    bottom: 110,
  },

  detailMainContainer: {
    height: 170,
  },

  detailHeading: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 14,
  },

  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },

  detailText: {
    fontSize: 16,
    fontWeight: 'normal',
    color: 'black',
  },

  subDetailText: {
    fontSize: 14,
    fontWeight: 'normal',
    color: 'gray',
    textAlign: 'right',
  },

  buttonContainer: {
    paddingHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },

  button1: {
    backgroundColor: '#446CFE',
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  
  button2: {
    backgroundColor: 'lightgray',
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },

  buttonText1: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },

  buttonText2: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },

});
