import {ViewStyle, StyleSheet, Dimensions, TextStyle} from 'react-native';
const windowHeight = Dimensions.get('window').height;
interface Style {
  container: ViewStyle;
}

export const _buttonStyle = (backgroundColor?: string): ViewStyle => ({
  borderRadius: 12,
  height: 40,
  width: 120,
  backgroundColor: backgroundColor ? backgroundColor : '#23285B',
  justifyContent: 'center',
  alignItems: 'center',
  elevation: 5,
  shadowRadius: 8,
  shadowOpacity: 0.5,
  shadowColor: '#23285B',
  shadowOffset: {
    width: 0,
    height: 3,
  },
});

export const _buttonTextStyle = (textColor?: string): TextStyle => ({
  fontWeight: '500',
  color: textColor || '#fefefe',
});

export default StyleSheet.create<Style>({
  container: {
    height: windowHeight * 0.6,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
