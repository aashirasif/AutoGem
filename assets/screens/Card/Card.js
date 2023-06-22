
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity} from 'react-native';

export default function Card({title, imageSource, price}) {
  return (
    <View style={styles.container}>
    <ImageBackground source={imageSource} style={styles.backgroundImage}>
      <View style={styles.overlay} />
      <View style={styles.contentContainer}>
        <View style={styles.leftContent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}/- PKR</Text>
        </View>
        <TouchableOpacity activeOpacity={0.7}>
        <Text style={styles.viewMore}>View More</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300, 
    height: 200,
    top: 70,
    left: 30,  
    overflow: 'hidden',
    borderRadius: 15,
  },

  backgroundImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
   
  },

  overlay: {
    position: 'absolute',
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 255, 0.2)',
    height: 90,
    top: 120,
  },

  contentContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
  },

  leftContent: {
    flexDirection: 'column',
    marginTop: 5,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },

  price: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
  },

  viewMore: {
    fontSize: 16,
    color: 'white',
    textAlign: 'right',
    marginBottom: 10,
  },
});
