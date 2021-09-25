import React, {Component} from 'react';
import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  StyleProp,
  ImageStyle,
} from 'react-native';
import Modal from 'react-native-modal';
import Carousel from 'react-native-snap-carousel';
/**
 * ? Local Imports
 */
import SliderItem from './components/SliderItem';
import styles, {_buttonStyle, _buttonTextStyle} from './OnboardingModal.style';

const windowWidth = Dimensions.get('window').width;

type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;
type CustomViewStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomImageStyleProp =
  | StyleProp<ImageStyle>
  | Array<StyleProp<ImageStyle>>;

interface IProps {
  cardContainerStyle?: CustomViewStyleProp;
  onboardingData: any;
  carouselRef?: any;
  buttonBackgroundColor?: string;
  buttonText?: string;
  disableBottomButton?: boolean;
  buttonContainer?: CustomViewStyleProp;
  buttonTextColor?: string;
  onBottomButtonPress?: () => void;
  carouselComponent?: any;
  titleStyle?: CustomTextStyleProp;
  subtitleStyle?: CustomTextStyleProp;
  photoStyle?: CustomImageStyleProp;
  cardBackgroundColor?: string;
}

interface IState {}

export default class OnboardingModal extends Component<IProps, IState> {
  carouselRef = React.createRef<any>();
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  carouselRenderItem = (item: any) => (
    <SliderItem {...this.props} data={item} />
  );

  renderCarousel = () => {
    return (
      this.props.carouselComponent || (
        <Carousel
          {...this.props}
          ref={this.props.carouselRef}
          data={this.props.onboardingData}
          renderItem={({item}) => this.carouselRenderItem(item)}
          sliderWidth={windowWidth * 0.95}
          itemWidth={windowWidth * 0.75}
        />
      )
    );
  };

  renderBottomButton = () => {
    if (!this.props.disableBottomButton) {
      return (
        this.props.buttonContainer || (
          <TouchableOpacity
            style={_buttonStyle(this.props.buttonBackgroundColor)}
            onPress={
              this.props.onBottomButtonPress && this.props.onBottomButtonPress
            }>
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
