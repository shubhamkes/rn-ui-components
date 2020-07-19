/**
* Name: Custom RadioButton component
* Description: Used to render an radiobutton on the screen
*/
import React from 'react';
import RadioButtonGroup from '../Components/RadioButtonGroup/RadioButtonGroup';

import { THEME } from '../Constants/theme.constants';
import { AccessNestedObject } from '../Utils/common.utils';

/**
 * @class CustomRadioButton
 * @extends {React.Component}
 * @param {object} RadioButtonStyleObject - it provides color and size for radio buttons 
 * Custom Radio Button Group component; to be used in place of RadioButton component. It takes care of absolute values
 * assigned to it and converts them into relative size according to the screen size of the device
 */

function CustomRadioButton(props) {
    const { theme, style = {}, radioButtons = [] } = props;

    const themeStyle = AccessNestedObject(THEME, ['RadioButton', theme], {});

    radioButtons.forEach(element => {
        if (AccessNestedObject(element, 'color') == null) {
            element["color"] = AccessNestedObject(themeStyle, 'color');
        }

        if (AccessNestedObject(element, 'size') == null) {
            element["size"] = AccessNestedObject(themeStyle, 'size');
        }
    });

    return (
        <RadioButtonGroup
            {...props}
            style={style}
            radioButtons={radioButtons}
        />
    )
}

export { CustomRadioButton as RedioButton };
