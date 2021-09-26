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
import styles, {
  _contentContainer,
  _titleTextStyle,
  _subtitleTextStyle,
} from './SliderItem.style';

type CustomViewStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface IProps {
  data: any;
  photoStyle?: ImageStyle;
  titleStyle?: TextStyle;
  subtitleStyle?: TextStyle;
  titleColor?: string;
  subtitleColor?: string;
  cardBackgroundColor?: string;
  cardContainerStyle?: CustomViewStyleProp;
}

interface IState {}

export default class ClassComponent extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  renderPhoto = () => (
    <Image
      style={[this.props.photoStyle, styles.photoStyle]}
      source={this.props.data.illustration}
    />
  );

  renderTitle = () => (
    <View style={styles.textContainer}>
      <Text
        style={[this.props.titleStyle, _titleTextStyle(this.props.titleColor)]}>
        {this.props.data.title}
      </Text>
    </View>
  );

  renderDescription = () => (
    <View style={styles.textContainer}>
      <Text
        style={[
          this.props.subtitleStyle,
          _subtitleTextStyle(this.props.subtitleColor),
        ]}>
        {this.props.data.subtitle}
      </Text>
    </View>
  );

  renderContent = () => (
    <View
      style={[
        this.props.cardContainerStyle,
        _contentContainer(this.props.cardBackgroundColor),
      ]}>
      {this.renderPhoto()}
      {this.renderTitle()}
      {this.renderDescription()}
    </View>
  );

  render() {
    return this.renderContent();
  }
}