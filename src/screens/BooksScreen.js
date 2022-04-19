import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import * as Speech from 'expo-speech';
import Text from '../components/Text';
import Button from '../components/Button';

export default function MegaBook() {
  constructor(props) 
    super(props);
    this.state = {
      fontsLoaded: false,
      speakerColor: 'gray',
      speakerIcon: 'volume-high-outline',
    };
  }
    if (current_color === 'gray') {
      Speech.speak(`${title}by${author}`);
      Speech.speak(story);
      Speech.speak('book');
      Speech.speak(moral);
    } else {
      Speech.stop();
    }
    function book ({ navigation }) {

// Import lottie animation
const lottie = require('../anims/reading.json');

// Default screen
  const { colors, margin, normalize } = useTheme();

  // Styles
  const styles = StyleSheet.create({
    screen: {
      backgroundColor: colors.background,
    },
    scroll: {
      paddingVertical: margin,
      paddingHorizontal: margin * 2,
    },
    lottie: {
      alignSelf: 'center',
      marginRight: margin / 2,
      width: normalize(320, 400),
    },
    title: {
      fontSize: 50,
      lineHeight: 60,
      fontWeight: '700',
      marginTop: margin * 2,
    },
    subTitle: {
      fontSize: 17,
      fontWeight: '500',
      marginTop: margin,
      marginBottom: margin * 2,
    },
    speak:{}
    
  });

  return (
    <ScrollView style={styles.screen} centerContent contentContainerStyle={styles.scroll}>
      <LottieView autoPlay loop style={styles.lottie} source={lottie} />
      <Text bold center style={styles.title}>
        {'Modern \n Book List'}
      </Text>
      <Text center style={styles.subTitle}>
        Its never been easier to organize your reading list in one place.
      </Text>
      <Button onPress={() => navigation.push('BookList')}>
        Get Started
      </Button>

    <View style={styles.container}>
    <Button title="Press to hear some words" onPress={speak} />
  </View>
  </ScrollView>
  );
}


  
