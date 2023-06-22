
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Favourite from './assets/screens/Favourite/Favourite.js';
import Services from './assets/screens/Services/Services.js';
import Settings from './assets/screens/Settings/Settings.js';
import Home from './assets/screens/Home/Home.js';



const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
    </View>
  );
};

const ExploreScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Explore</Text>
    </View>
  );
};

const AddScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Add</Text>
    </View>
  );
};

const AddScreen2 = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Add</Text>
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile</Text>
    </View>
  );
};

const CustomIcon = ({ source, color, wsize, hsize }) => {
  return <Image source={source} style={{ tintColor: color, width: wsize, height: hsize }} />;
};


export default function App() {
  return (
    <NavigationContainer>
     <Tab.Navigator
      screenOptions={{

        activeTintColor: 'white',
        inactiveTintColor: 'white',
        headerShown: false,
        headerShadowVisible: false,
        showLabel: false,

      tabBarStyle: {
        backgroundColor: 'blue',
        height: 65,
      },


    }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => <CustomIcon source={require('./assets/Icons/home.png')} color="white" hsize={25} wsize={25} />,
          tabBarLabel: ' ',
        }}
        
      />
      <Tab.Screen
        name="Explore"
        component={Favourite}
        options={{
          tabBarIcon: ({ color, size }) => <CustomIcon source={require('./assets/Icons/fav.png')} color="white" hsize={25} wsize={28} />,
          tabBarLabel: ' ',
        }}
      />
      <Tab.Screen
        name=" "
        component={AddScreen}
        options={{
          tabBarLabel: ' ',
          tabBarIcon: () => (
            <View style={styles.tabStyle}>
              <CustomIcon source={require('./assets/Icons/add.png')} color="blue" hsize={50} wsize={50} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Add2"
        component={Services}
        options={{
          tabBarIcon: ({ color, size }) => <CustomIcon source={require('./assets/Icons/services.png')} color="white" hsize={25} wsize={25} />,
          tabBarLabel: ' ',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => <CustomIcon source={require('./assets/Icons/settings.png')} color="white" hsize={25} wsize={35} />,
          tabBarLabel: ' ',
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tabStyle: {
    backgroundColor: 'white',
    width: 70,
    height: 70,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 55,
  },
});
 