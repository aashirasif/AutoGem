import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function ServiceCard({ title, imageSource, description }) {
  return (
  <TouchableOpacity activeOpacity={0.9}>
  <View style={styles.cardContainer}>
    <Image source={imageSource} style={styles.image} />
    <View style={styles.cardContent}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  </View>
  </TouchableOpacity>
);
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    elevation: 3,
    shadowColor: 'blue',
    shadowOffset: { width: 0, height: 1
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    marginVertical: 15,
    marginHorizontal: 20,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  image: {
    width: 30,
    height: 30,
    marginRight: 20,
    tintColor: 'black',
  },

  cardContent: {
    flex: 1,
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },

  description: {
    fontSize: 14,
    color: '#888888',
  },
});
