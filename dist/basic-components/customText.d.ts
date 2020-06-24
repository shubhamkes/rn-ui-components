/**
* Name: Custom Text component
* Description: Used to render text on the screen
*/
import React from 'react';
declare type TextProps = {
    children?: React.ReactNode;
    [key: string]: any;
};
/**
 * @class CustomText
 * @extends {React.Component}
 * @param {object} TextStyleObject - it provides text style
 * Custom Text component; to be used in place of Text component. It takes care of absolute values
 * assigned to it and converts them into relative size according to the screen size of the device
 */
declare const CustomText: React.ForwardRefExoticComponent<Pick<TextProps, React.ReactText> & React.RefAttributes<unknown>>;
export { CustomText as Text };
