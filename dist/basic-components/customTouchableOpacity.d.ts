/**
* Name: Custom TouchableOpacity component
* Description: Used to render touchableOpacity on the screen
*/
import React from 'react';
declare type TouchableProps = {
    children?: React.ReactNode;
    onPress?: () => void;
    [key: string]: any;
};
/**
 * @class CustomTouchableOpacity
 * @extends {React.Component}
 * @param {object} TouchableOpacityStyleObject - it provides touchableOpacity style
 * Custom Touchable Opacity component; to be used in place of TouchableOpacity component. It takes care of absolute values
 * assigned to it and converts them into relative size according to the screen size of the device
 */
declare const CustomTouchableOpacity: React.ForwardRefExoticComponent<Pick<TouchableProps, string | number> & React.RefAttributes<unknown>>;
export { CustomTouchableOpacity as TouchableOpacity };
