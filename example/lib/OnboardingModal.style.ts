import {ViewStyle, StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
interface Style {
  container: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    height: windowHeight * 0.6,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
