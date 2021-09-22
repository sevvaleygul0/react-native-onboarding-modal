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
  textContainer: ViewStyle;
  textStyle: TextStyle;
  photoStyle: ImageStyle;
  subtitleTextStyle: TextStyle;
}

export const _contentContainer = (backgroundColor?: string): ViewStyle => ({
  backgroundColor: backgroundColor ? backgroundColor : '#DEDAF1',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 20,
  height: windowHeight * 0.5,
});

export default StyleSheet.create<Style>({
  textContainer: {
    marginTop: 24,
    width: windowWidth * 0.7,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '600',
    color: '#fff',
  },
  photoStyle: {
    height: 260,
    width: 260,
  },
  subtitleTextStyle: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    color: '#23285B',
  },
});
