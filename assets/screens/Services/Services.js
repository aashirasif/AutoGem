import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import ServiceCard from '../ServiceCard/ServiceCard';

export default function Services() {
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>
            Services
        </Text>
      <ServiceCard  
      title="Price Prediction"
      imageSource={require('../../Icons/services.png')}
      description="This is Price Prediction Model"
      />
      <ServiceCard  
      title="Recommendation System"
      imageSource={require('../../Icons/add.png')}
      description="This is Recommendation System Model"
      />
      <ServiceCard  
      title="Checking the card view"
      imageSource={require('../../Icons/add.png')}
      description="This is Recommendation System Model"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  heading: {
    fontSize: 25,
    fontWeight: '600',
    color: 'black',
    left: 25,
    bottom: 10,
  },

});
