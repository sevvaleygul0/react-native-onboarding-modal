import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';

import OnboardingModal from './lib/OnboardingModal.tsx';

const onboardingData = [
  {
    title: 'My Garden',
    subtitle: 'I am beautifying my garden',
    illustration: require('./lib/assets/watering.png'),
  },
  {
    title: 'Flower Care',
    subtitle: 'Care for flowers at the beginning of spring',
    illustration: require('./lib/assets/watering-2.png'),
  },
  {
    title: 'My Garden',
    subtitle: 'I am beautifying my garden',
    illustration: require('./lib/assets/watering-3.png'),
  },
];

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
