
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function OnBoarding() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./BG-Image.png')}
        style={styles.backgroundImage}
      >
      </Image>
      <View style={styles.textContainer}>
        <Text style={styles.headingText}>We provide the best, with ease!</Text>
      </View>

      <TouchableOpacity style={styles.button} activeOpacity={0.9} >
          <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>Already have an account? 
      <Text style={{fontWeight: '600'}}> Sign in</Text>
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backgroundImage: {
    position: 'relative',
    height: 800,
    width: 360,
    top: 400,
  },

  textContainer: {
    position: 'absolute',
    top: 160,
    width: 300,
  },

  headingText: {
    fontSize: 29,
    fontWeight: 'normal',
    color: 'white',
  },

  button: {
    position: 'absolute',
    backgroundColor: '#446CFE',
    width: 320,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    top: 600,
  },

  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },

  footerText: {
    position: 'absolute',
    top: 670,
    fontSize: 18,
    fontWeight: 'normal',
    color: 'white',
  },
});
