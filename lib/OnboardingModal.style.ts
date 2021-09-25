import {ViewStyle, StyleSheet, Dimensions, TextStyle} from 'react-native';
interface Style {
  container: ViewStyle;
}

export const _buttonStyle = (backgroundColor?: string): ViewStyle => ({
  marginTop: 52,
  borderRadius: 12,
  height: 40,
  width: 120,
  backgroundColor: backgroundColor ? backgroundColor : '#21AE79',
  justifyContent: 'center',
  alignItems: 'center',
  elevation: 5,
  shadowRadius: 8,
  shadowOpacity: 0.5,
  shadowColor: backgroundColor ? backgroundColor : '#21AE79',
  shadowOffset: {
    width: 0,
    height: 3,
  },
});

export const _buttonTextStyle = (textColor?: string): TextStyle => ({
  fontWeight: '500',
  fontSize: 17,
  color: textColor || '#fefefe',
});

export default StyleSheet.create<Style>({
  container: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
