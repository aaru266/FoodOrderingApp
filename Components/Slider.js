import React from 'react';
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
   headerStyle={{
    wid
   }}
    onItemChanged={(item) => console.log("item", item)}
    
    
/>
  )
}

export default Slider