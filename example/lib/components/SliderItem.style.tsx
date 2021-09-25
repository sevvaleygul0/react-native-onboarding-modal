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
  photoStyle: ImageStyle;
}

export const _titleTextStyle = (color?: string): TextStyle => ({
  textAlign: 'center',
  fontSize: 32,
  fontWeight: '600',
  color: color || '#568460',
});

export const _subtitleTextStyle = (color?: string): TextStyle => ({
  textAlign: 'center',
  fontSize: 18,
  fontWeight: '500',
  color: color || '#9F9E9E',
});

export const _contentContainer = (backgroundColor?: string): ViewStyle => ({
  backgroundColor: backgroundColor ? backgroundColor : '#fefefe',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 20,
  height: windowHeight * 0.45,
});

export default StyleSheet.create<Style>({
  textContainer: {
    marginTop: 12,
    width: windowWidth * 0.7,
  },
  photoStyle: {
    height: 200,
    width: 200,
  },
});
