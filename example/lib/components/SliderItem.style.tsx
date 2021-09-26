import {
  ViewStyle,
  StyleSheet,
  TextStyle,
  ImageStyle,
  Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface Style {
  contentContainer: ViewStyle;
  textContainer: ViewStyle;
  photoStyle: ImageStyle;
  titleTextStyle: TextStyle;
  subtitleTextStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  contentContainer: {
    backgroundColor: '#fefefe',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    height: windowHeight * 0.45,
  },
  textContainer: {
    marginTop: 12,
    width: windowWidth * 0.7,
  },
  photoStyle: {
    height: 200,
    width: 200,
  },
  titleTextStyle: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '600',
    color: '#568460',
  },
  subtitleTextStyle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    color: '#9F9E9E',
  },
});
