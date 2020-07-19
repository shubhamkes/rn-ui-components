/**
* Name: Custom CheckBox component
* Description: Used to render a Custom Check Box on the screen
*/

import React from 'react';
import CheckBox from '../Components/Checkbox/Checkbox';

import { AccessNestedObject } from '../Utils/common.utils';
import { THEME } from '../Constants/theme.constants';

function CustomCheckBox(props) {
    const { theme, containerStyle = {}, checkboxStyle = {} } = props;

    const themeStyle = AccessNestedObject(THEME, ['Checkbox', theme], {});
    const themContainerStyle = AccessNestedObject(themeStyle, 'containerStyle', {});
    const themeCheckboxStyle = AccessNestedObject(themeStyle, 'checkboxStyle', {});
    const themeCheckedImage = AccessNestedObject(themeStyle, 'checkedImage');
    const themeUncheckedImage = AccessNestedObject(themeStyle, 'uncheckedImage');

    const containerStyleObject = Object.assign(themContainerStyle, containerStyle);
    const checkboxStyleObject = Object.assign(themeCheckboxStyle, checkboxStyle);

    return (
        <CheckBox
            {...props}
            containerStyle={containerStyleObject}
            checkboxStyle={checkboxStyleObject}
            checkedImage={themeCheckedImage}
            uncheckedImage={themeUncheckedImage}
        />
    )
}

export { CustomCheckBox as Checkbox };
