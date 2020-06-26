/**
* Name: Custom Image component
* Description: Used to render an image on the screen
*/
import React from 'react';
import { Image } from 'react-native';
import FastImage from 'react-native-fast-image';

type ImageProps = {
    [key: string]: any,
    source: any
}

/**
 * @class CustomImage
 * @extends {React.Component}
 * @param {object} ImageStyleObject - it provides styling for image 
 * Custom Image component; to be used in place of image component. It takes care of absolute values
 * assigned to it and converts them into relative size according to the screen size of the device
 */
const CustomImage = ({ style = {}, source, ...props }: ImageProps) => {
    const isFastImageLinked = !!FastImage;
    // const ImageComponent = FastImage;
    const ImageComponent = isFastImageLinked ? FastImage : Image;

    if (!isFastImageLinked) {
        // if (!isFastImageLinked && __DEV__) {
        console.warn('Link react-native-fastimage from better performance');
    }


    return (
        <ImageComponent
            source={source}
            {...props}
            style={style}
        />
    )
}

export { CustomImage as Image };
