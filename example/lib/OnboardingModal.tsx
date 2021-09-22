import React, {Component} from 'react';
import {View, Dimensions, Image} from 'react-native';
import Modal from 'react-native-modal';
import Carousel from 'react-native-snap-carousel';
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

  carouselRenderItem = (item: any) => (
    <Image source={item.illustration} style={{width: 200, height: 200}}></Image>
  );

  renderCarousel = () => (
    <Carousel
      ref={this.props.carouselRef}
      data={this.props.onboardingData}
      renderItem={({item}) => this.carouselRenderItem(item)}
      sliderWidth={windowWidth * 0.95}
      itemWidth={windowWidth * 0.8}
    />
  );

  renderBottomButton = () => <View></View>;

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
