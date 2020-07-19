/**
* Name: Custom Image Background component
* Description: Used to render an background image on the screen
*/
import React from 'react';
import { ImageBackground } from 'react-native';

import { THEME } from '../Constants/theme.constants';
import { AccessNestedObject } from '../Utils/common.utils';

function CustomImageBackground(props) {
    const { theme, style = {} } = props;

    const themeStyle = AccessNestedObject(THEME, ['ImageBackground', theme], {});
    const styleObject = Object.assign(themeStyle, style);

    return (
        <ImageBackground
            {...props}
            style={styleObject}
        >
            {props.children}
        </ImageBackground>
    )
}

export { CustomImageBackground as ImageBackground };
