import React, {Component} from 'react';
import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import Modal from 'react-native-modal';
import Carousel from 'react-native-snap-carousel';
import SliderItem from './components/SliderItem';
/**
 * ? Local Imports
 */
import styles, {_buttonStyle, _buttonTextStyle} from './OnboardingModal.style';

const windowWidth = Dimensions.get('window').width;
interface IProps {
  containerStyle: any;
  onboardingData: any;
  carouselRef: any;
  buttonBackgroundColor?: string;
  cardBackgroundColor?: string;
  buttonText?: string;
  disableBottomButton?: boolean;
  buttonContainer?: any;
  buttonTextColor?: string;
  sliderItemComponent?: any;
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
    <SliderItem {...this.props} data={item} />
  );

  renderCarousel = () => (
    <Carousel
      {...this.props}
      ref={this.props.carouselRef}
      data={this.props.onboardingData}
      renderItem={({item}) => this.carouselRenderItem(item)}
      sliderWidth={windowWidth * 0.95}
      itemWidth={windowWidth * 0.75}
    />
  );

  renderBottomButton = () => {
    if (!this.props.disableBottomButton) {
      return (
        this.props.buttonContainer || (
          <TouchableOpacity
            style={_buttonStyle(this.props.buttonBackgroundColor)}
            onPress={() => {}}>
            <Text style={_buttonTextStyle(this.props.buttonTextColor)}>
              {this.props.buttonText}
            </Text>
          </TouchableOpacity>
        )
      );
    } else {
      return null;
    }
  };

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
