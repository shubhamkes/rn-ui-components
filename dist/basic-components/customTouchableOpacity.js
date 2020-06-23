/**
* Name: Custom TouchableOpacity component
* Description: Used to render touchableOpacity on the screen
*/
import React from 'react';
import { TouchableOpacity } from 'react-native';
/**
 * @class CustomTouchableOpacity
 * @extends {React.Component}
 * @param {object} TouchableOpacityStyleObject - it provides touchableOpacity style
 * Custom Touchable Opacity component; to be used in place of TouchableOpacity component. It takes care of absolute values
 * assigned to it and converts them into relative size according to the screen size of the device
 */
const CustomTouchableOpacity = React.forwardRef((props, ref) => {
    const { style = {} } = props;
    // const themeStyle = AccessNestedObject(THEME, ['TouchableOpacity', theme], {});
    // const styleObject = Object.assign(themeStyle, style);
    return (<TouchableOpacity ref={ref} {...props} style={style}>
            {props.children}
        </TouchableOpacity>);
});
export { CustomTouchableOpacity as TouchableOpacity };
