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
/**
 * ? Models
 */
export type IOnboardingModal = {
  title: string;
  subtitle: string;
  asset: Asset | string;
};
type Asset = {
  uri: string;
};

const windowWidth = Dimensions.get('window').width;

type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;
type CustomViewStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomImageStyleProp =
  | StyleProp<ImageStyle>
  | Array<StyleProp<ImageStyle>>;

interface IProps {
  carouselRef?: any;
  cardContainerStyle?: CustomViewStyleProp;
  onboardingData: Array<IOnboardingModal>;
  buttonBackgroundColor?: string;
  buttonText?: string;
  disableBottomButton?: boolean;
  buttonContainer?: CustomViewStyleProp;
  buttonTextColor?: string;
  onBottomButtonPress?: () => void;
  titleStyle?: CustomTextStyleProp;
  subtitleStyle?: CustomTextStyleProp;
  photoStyle?: CustomImageStyleProp;
  carouselItemContainer: (item: IOnboardingModal) => CustomViewStyleProp;
}

interface IState {}

export default class OnboardingModal extends Component<IProps, IState> {
  carouselRenderItem = (item: IOnboardingModal) => (
    <SliderItem {...this.props} data={item} />
  );

  renderCarousel = () => {
    return (
      <Carousel
        {...this.props}
        ref={this.props.carouselRef}
        data={this.props.onboardingData}
        renderItem={({item}) =>
          this.props.carouselItemContainer &&
          this.props.carouselItemContainer(item)
            ? this.props.carouselItemContainer(item)
            : this.carouselRenderItem(item)
        }
        sliderWidth={windowWidth * 0.95}
        itemWidth={windowWidth * 0.75}
      />
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
    }
    return null;
  };

  renderOnboardingContent = () => (
    <View style={styles.container}>
      {this.renderCarousel()}
      {this.renderBottomButton()}
    </View>
  );

  render() {
    return (
      <Modal
        {...this.props}
        animationIn="fadeInUp"
        animationInTiming={750}
        animationOut="fadeOutDown"
        animationOutTiming={750}>
        {this.renderOnboardingContent()}
      </Modal>
    );
  }
}
