import * as React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';

import OnboardingModal, {IOnboardingModal} from 'react-native-onboarding-modal';

const onboardingData: IOnboardingModal[] = [
  {
    title: 'Love Nature',
    subtitle: "Let's live close to nature",
    asset: {
      uri: 'https://cdn.dribbble.com/users/1174720/screenshots/10850813/media/75ea855c008a60be82b526abd12275f2.png?compress=1&resize=1600x1200',
    },
  },
  {
    title: 'Flower Care',
    subtitle: 'Flowers are our constant friends',
    asset: {
      uri: 'https://cdn.dribbble.com/users/1450874/screenshots/14775888/media/1e3914999f912fff2d3c6b0d8b66248c.jpg?compress=1&resize=1600x1200',
    },
  },
  {
    title: 'Love Nature',
    subtitle: 'Nature always wears the colors of the spirit',
    asset: {
      uri: 'https://cdn.dribbble.com/users/118065/screenshots/10741791/media/c9965247f5c21db97009d71784d9ace3.gif',
    },
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
