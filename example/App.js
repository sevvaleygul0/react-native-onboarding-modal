import React from 'react';
import {SafeAreaView, StyleSheet, Dimensions, View, Text} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import OnboardingModal from './lib/OnboardingModal.tsx';

const onboardingData = [
  {
    title: 'Love Nature',
    subtitle: "Let's live close to nature",
    illustration: require('./lib/assets/watering.png'),
  },
  {
    title: 'Flower Care',
    subtitle: 'Flowers are our constant friends',
    illustration: require('./lib/assets/watering-2.png'),
  },
  {
    title: 'Love Nature',
    subtitle: 'Nature always wears the colors of the spirit',
    illustration: require('./lib/assets/watering-3.png'),
  },
];

const windowWidth = Dimensions.get('window').width;

const App = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(true);
  return (
    <OnboardingModal
      isVisible={isModalVisible}
      onboardingData={onboardingData}
      buttonText="Let's Go"
      onBottomButtonPress={() => setIsModalVisible(false)}
    />
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fefefe',
  },
});

export default App;
