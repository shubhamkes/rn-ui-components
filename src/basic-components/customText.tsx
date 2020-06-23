/**
* Name: Custom Text component
* Description: Used to render text on the screen
*/
import React from 'react';
import { Text } from 'react-native';

type TextProps = {
    children?: React.ReactNode,
    // onPress?: () => void,
    [key: string]: any
}

/**
 * @class CustomText
 * @extends {React.Component}
 * @param {object} TextStyleObject - it provides text style
 * Custom Text component; to be used in place of Text component. It takes care of absolute values
 * assigned to it and converts them into relative size according to the screen size of the device
 */

const CustomText = React.forwardRef((props: TextProps, ref) => {
    const { style } = props;

    return (
        <Text
            ref={ref}
            {...props}
            style={style}
        >
            {props.children}
        </Text >
    )
})

export { CustomText as Text }; 
