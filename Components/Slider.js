import React from 'react';
import { View ,Text} from 'react-native';
import { ImageSlider } from "react-native-image-slider-banner";

const Slider = () => {
  return (
    <ImageSlider 
    data={[
        {img: require('../assets/homepage/burger.jpg')},
        {img:require('../assets/homepage/icecream.jpeg')},
        {img:require('../assets/homepage/samosa.jpg')},
        {img:require('../assets/homepage/sweets.jpg')}
    ]}
    autoPlay={false}
    localImg={true}
   preview={false}
   caroselImageStyle={{resizeMode: 'cover',overflow:'hidden'}}
   caroselImageContainerStyle={{height:200}}
   indicatorContainerStyle={{position:'absolute',bottom:-10}}
/>

  )
}

export default Slider