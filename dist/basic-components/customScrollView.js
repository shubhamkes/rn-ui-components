/**
* Name: Custom ScrollView component
* Description: Used to render an scrollview on the screen
*/
import React from 'react';
import { ScrollView } from 'react-native';
/**
 * @class CustomScrollView
 * @extends {React.Component}
 * @param {object} contentContainerStyleObject - for android usage
 * @param {object} contentInsetStyleObject - for ios usage
 * Custom ScrollView component; to be used in place of ScrollView  component. It takes care of absolute values
 * assigned to it and converts them into relative size according to the screen size of the device
 */
const CustomScrollView = React.forwardRef((props, ref) => {
    const { theme, style, contentContainerStyle } = props;
    return (<ScrollView ref={ref} {...props} style={style} contentContainerStyle={contentContainerStyle}>
            {props.children}
        </ScrollView>);
});
export { CustomScrollView as ScrollView };
