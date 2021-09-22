import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
/**
 * ? Local Imports
 */
import styles from './SliderItem.style';

interface IProps {
  data: any;
}

interface IState {}

export default class ClassComponent extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  renderPhoto = () => (
    <Image style={styles.photoStyle} source={this.props.data.illustration} />
  );

  renderTitle = () => (
    <View style={styles.textContainer}>
      <Text style={styles.textStyle}>{this.props.data.title}</Text>
    </View>
  );

  renderDescription = () => (
    <View style={styles.textContainer}>
      <Text style={styles.subtitleTextStyle}>{this.props.data.subtitle}</Text>
    </View>
  );

  renderContent = () => (
    <View style={styles.contentContainer}>
      {this.renderPhoto()}
      {this.renderTitle()}
      {this.renderDescription()}
    </View>
  );

  render() {
    return this.renderContent();
  }
}
