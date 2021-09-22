import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';

import OnboardingModal from './lib/OnboardingModal.tsx';

const onboardingData = [
  {
    title: 'My Garden',
    illustration: require('./lib/assets/plant.png'),
  },
];

const App = () => {
  return <OnboardingModal isVisible={true} onboardingData={onboardingData} />;
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fefefe',
  },
});

export default App;
