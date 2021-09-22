import React, {Component} from 'react';
import {View, Dimensions, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import Carousel from 'react-native-snap-carousel';
import SliderItem from './components/SliderItem';
/**
 * ? Local Imports
 */
import styles from './OnboardingModal.style';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
interface IProps {
  containerStyle: any;
  onboardingData: any;
  carouselRef: any;
}

interface IState {}

export default class ClassComponent extends Component<IProps, IState> {
  carouselRef = React.createRef<any>();
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  carouselRenderItem = (item: any) => <SliderItem data={item} />;

  renderCarousel = () => (
    <Carousel
      ref={this.props.carouselRef}
      data={this.props.onboardingData}
      renderItem={({item}) => this.carouselRenderItem(item)}
      sliderWidth={windowWidth * 0.95}
      itemWidth={windowWidth * 0.75}
    />
  );

  renderBottomButton = () => (
    <TouchableOpacity style={styles.buttonStyle} onPress={() => {}}>
      <Text style={styles.buttonTextStyle}>Let's Go</Text>
    </TouchableOpacity>
  );

  renderOnboardingContent = () => (
    <View style={styles.container}>
      {this.renderCarousel()}
      {this.renderBottomButton()}
    </View>
  );

  renderContent = () => (
    <Modal
      {...this.props}
      animationIn="fadeInUp"
      animationInTiming={750}
      animationOut="fadeOutDown"
      animationOutTiming={750}>
      {this.renderOnboardingContent()}
    </Modal>
  );

  render() {
    return this.renderContent();
  }
}
