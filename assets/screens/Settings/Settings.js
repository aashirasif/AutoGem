import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import ServiceCard from '../ServiceCard/ServiceCard';

export default function Settings() {
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>
            Settings
        </Text>
      <ServiceCard  
      title="Edit Profile"
      imageSource={require('../../Icons/add.png')}
      description="To edit your profile"
      />
      <ServiceCard  
      title="Change Password"
      imageSource={require('../../Icons/add.png')}
      description="To change your password"
      />
      <ServiceCard  
      title="About US"
      imageSource={require('../../Icons/add.png')}
      description="Know more about us"
      />
       <ServiceCard  
      title="Privacy Policy"
      imageSource={require('../../Icons/add.png')}
      description="We assure privacy over everything"
      />
      <ServiceCard  
      title="Terms and Condition"
      imageSource={require('../../Icons/add.png')}
      description="Documentation which you will never read"
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
