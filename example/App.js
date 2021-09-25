import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';

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

const App = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  return (
    <SafeAreaView style={styles.scrollView}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => setIsModalVisible(true)}>
        <Text style={styles.buttonTextStyle}>Open Onboarding Modal</Text>
      </TouchableOpacity>
      <OnboardingModal
        isVisible={isModalVisible}
        onboardingData={onboardingData}
        buttonText="Let's Go"
        onBottomButtonPress={() => setIsModalVisible(false)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fefefe',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    width: 210,
    height: 50,
    borderWidth: 2,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#21C879',
  },
  buttonTextStyle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#084E33',
  },
});

export default App;
