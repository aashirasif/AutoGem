
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SignUp() {

  const [phoneNumber, setPhoneNumber] = useState('');

  return (

    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
    <View style={styles.textContainer}>
        <Text style={styles.headingText}>Welcome!</Text>
        <Text style={styles.heading2Text}>Register Yourself</Text>
      </View>

      <View style={styles.formContainer}>
      <View style={styles.imageContainer}>
      <Image
        style={styles.backgroundImage}
        source={require('./BG-Image.png')}
      >
      </Image>
      <View style={styles.overlay} />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        <Text style={styles.orText}>OR</Text>
        <TouchableOpacity style={styles.googleButton} activeOpacity={0.9}>
          <Icon name="google" size={20} color="red" />
          <Text style={styles.buttonText}>Sign Up with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.facebookButton} activeOpacity={0.9}>
          <Icon name="facebook" size={20} color="blue" />
          <Text style={styles.buttonText}>Sign Up with Facebook</Text>
        </TouchableOpacity>
      </View>
      </View>
      <TouchableOpacity style={styles.button} activeOpacity={0.95} >
          <Text style={styles.buttonText2}>Sign Up</Text>
      </TouchableOpacity>
   </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 120,
  },

  textContainer: {
    position: 'absolute',
    top: 140,
    left: 40,
  },

  headingText: {
    fontSize: 40,
    fontWeight: '700',
    color: 'black',
  },

  heading2Text: {
    top: 5,
    fontSize: 16,
    fontWeight: 'normal',
    color: 'black',
  },

  backgroundImage: {
    position: 'relative',
    height: 550,
    width: 360,
    top: 250,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 255, 0.15)',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    top: 250,
    height: 550,
    width: 360,
  },

  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  inputContainer: {
    bottom: 220,
  },

  input: {
    width: 320,
    height: 60,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: 'white'
  },
  
  orText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    top: 15,
    textAlign: 'center'
  },

  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: 320,
    height: 60,
    borderRadius: 10,
    marginBottom: 10,
    top: 40
  },

  facebookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: 320,
    height: 60,
    borderRadius: 10,
    top: 45
  },

  buttonText: {
    color: 'gray',
    marginLeft: 10,
  },

  button: {
    position: 'absolute',
    backgroundColor: '#446CFE',
    width: 320,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    top: 650,
  },

  buttonText2: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
});
