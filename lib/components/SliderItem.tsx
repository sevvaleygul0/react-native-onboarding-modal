import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  TextStyle,
  ImageStyle,
  ViewStyle,
  StyleProp,
} from 'react-native';
/**
 * ? Local Imports
 */
import styles from './SliderItem.style';
import {IOnboardingModal} from '../OnboardingModal';

type CustomViewStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface IProps {
  data: IOnboardingModal;
  photoStyle?: ImageStyle;
  titleStyle?: TextStyle;
  subtitleStyle?: TextStyle;
  titleColor?: string;
  subtitleColor?: string;
  cardBackgroundColor?: string;
  cardContainerStyle?: CustomViewStyleProp;
  carouselItemContainer?: CustomViewStyleProp;
}

interface IState {}

export default class SliderItem extends Component<IProps, IState> {
  renderPhoto = () => (
    <Image
      style={[styles.photoStyle, this.props.photoStyle]}
      source={this.props.data.asset}
    />
  );

  renderTitle = () => (
    <View style={styles.textContainer}>
      <Text style={[styles.titleTextStyle, this.props.titleStyle]}>
        {this.props.data.title}
      </Text>
    </View>
  );

  renderDescription = () => (
    <View style={styles.textContainer}>
      <Text style={[styles.subtitleTextStyle, this.props.subtitleStyle]}>
        {this.props.data.subtitle}
      </Text>
    </View>
  );

  renderContent = () => (
    <View style={[styles.contentContainer, this.props.cardContainerStyle]}>
      {this.renderPhoto()}
      {this.renderTitle()}
      {this.renderDescription()}
    </View>
  );

  render() {
    return this.renderContent();
  }
}
