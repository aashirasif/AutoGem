
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, SafeAreaView} from 'react-native';
import Card from '../Card/Card.js';

export default function Home() {

  const [searchName, setsearchName] = useState('');

  return (
   <View style={styles.container}>
     <View style={styles.searchContainer}>
        <TextInput
            style={styles.searchField}
            placeholder="Search"
            value={searchName}
            onChangeText={setsearchName}
          />
      </View>
      <ScrollView contentContainerStyle={styles.cardScrollContainer}>
        <View style={styles.cardWrapper}>
        <Card 
          title="Suzuki Cultus"
          imageSource={require('./car.png')}
          price="210000"
        />
        </View>
        <View style={styles.cardWrapper}>
        <Card 
          title="Suzuki Cultus"
          imageSource={require('./car.png')}
          price="210000"
        />
        </View>
        <View style={styles.cardWrapper}>
        <Card 
          title="Suzuki Cultus"
          imageSource={require('./car.png')}
          price="210000"
        />
        </View>
      </ScrollView>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  searchContainer: {
    top: 90,
    marginBottom: 100
  },

  searchField: {
    width: 300,
    height: 50,
    borderColor: 'gray',
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // for Android
  },

  cardScrollContainer: {
    position: 'relative',
    alignItems: 'center',
    paddingBottom: 80,
    paddingRight: 80,
    bottom: 45,
  },

  cardWrapper: {
    marginBottom: 20,
  },

});
