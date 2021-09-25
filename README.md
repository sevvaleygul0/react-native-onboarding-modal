<img alt="React Native Typescript Library Starter" src="assets/logo.png" width="1050"/>

<p align="center">
  <img alt="React Native Typescript Library Starter"
        src="assets/Screenshots/typescript.jpg" />
</p>

# Installation

Add the dependency:

```bash
npm i react-native-onboarding-modal
```

## Peer Dependencies

<h5><i>IMPORTANT! You need install them</i></h5>

```js
"react": ">= 16.x.x",
"react-native": ">= 0.55.x",
"react-native-modal": ">=  13.0.0",
"react-native-snap-carousel": ">=  3.9.1"
```

# Usage

## Import

```jsx
import OnboardingModal from "react-native-onboarding-modal";
```

## Data Format

```jsx
const exampleData = {
  {
    title: 'Love Nature',
    subtitle: "Let's live close to nature",
    illustration: require('./assets/watering.png'),
  },
}
```

## Basic Usage

```jsx
<OnboardingModal
  data={exampleData}
  onBottomButtonPress={() => console.log("Handle Let's Go Button")}
/>
```

## Advanced Usage

```jsx
<OnboardingModal
  onboardingData={exampleData}
  buttonTextColor="#51186E"
  buttonBackgroundColor="#DCCFE2"
  photoStyle={{ width: 300, height: 300 }}
  titleStyle={{ fontSize: 32, color: "#8066BA" }}
  onBottomButtonPress={() => console.log("Handle Let's Go Button")}
/>
```

# Configuration - Props

## Fundamentals

| Property       | Type |  Default  | Description                  |
| -------------- | :--: | :-------: | ---------------------------- |
| onboardingData | any  | undefined | set data data shown in modal |

## Customization (Optionals)

| Property              |    Type    |  Default  | Description                                                                    |
| --------------------- | :--------: | :-------: | ------------------------------------------------------------------------------ |
| cardContainerStyle    | ViewStyle  |  default  | set or override the style object for the modal main container                  |
| carouselRef           |    any     | undefined | set carouselRef prop for carousel                                              |
| buttonBackgroundColor |   string   |  #21AE79  | change the button's text color                                                 |
| buttonText            |   string   | Let's Go  | change the button's text                                                       |
| disableBottomButton   |  boolean   |   false   | set visibility of the bottom button                                            |
| buttonContainer       |    any     |  default  | set your own component instead of default bottom button component              |
| buttonTextColor       |   string   |  #fefefe  | change the button's text color                                                 |
| carouselComponent     |    any     |  default  | set your own component instead of default react-native-snap-carousel component |
| titleStyle            | TitleStyle |  default  | set or override the style object for the title text style                      |
| subtitleStyle         | TitleStyle |  default  | set or override the style object for the subtitle text style                   |
| photoStyle            | ImageStyle |  default  | set or override the style object for the photo style                           |
| cardBackgroundColor   |   string   |  #fefefe  | change modal backgroundColor                                                   |
| onBottomButtonPress   |  function  |  default  | handle bottom button is pressed                                                |

## Future Plans

- [x] ~~LICENSE~~

# Change Log

Change log will be here !

## Author

Sevval Eygul, sevvalleygull@gmail.com

## License

React Native Onboarding Modal is available under the MIT license. See the LICENSE file for more info.
