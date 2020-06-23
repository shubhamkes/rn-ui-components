/**
* Name: Custom Button component
* Description: Used to render a Custom Button on the screen
*/
import React from 'react';
import { Text, TouchableOpacity } from '../basic-components';
function CustomButton(props) {
    const { containerStyle = {}, textStyle = {}, disabled } = props;
    return (<TouchableOpacity {...props} style={containerStyle}>
            <Text style={textStyle}>
                {props.children}
            </Text>
        </TouchableOpacity>);
}
export { CustomButton as Button };
