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
  fontSize: 28,
  fontWeight: '600',
  color: color || '#fff',
});

export const _subtitleTextStyle = (color?: string): TextStyle => ({
  textAlign: 'center',
  fontSize: 16,
  fontWeight: '400',
  color: color || '#23285B',
});

export const _contentContainer = (backgroundColor?: string): ViewStyle => ({
  backgroundColor: backgroundColor ? backgroundColor : '#DEDAF1',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 20,
  height: windowHeight * 0.5,
});

export default StyleSheet.create<Style>({
  textContainer: {
    marginTop: 12,
    width: windowWidth * 0.7,
  },

  photoStyle: {
    height: 260,
    width: 260,
  },
});
