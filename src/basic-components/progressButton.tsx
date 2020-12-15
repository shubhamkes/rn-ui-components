/**
 * Progress Button
 * @author Umang Maurya
 *  e.g.
 * <ProgressButton type="primary" disabled={false} onPress={(next)=>savePayment(next)}
 */
import React, { useContext } from 'react';

import AwesomeButtonBlue from '@umangmaurya/react-native-really-awesome-button/src/themes/blue';
import { ThemeContext } from 'rn-themed-tailwind';

export const ProgressButton = ({ ...props }) => {
    const { type = 'primary', onPress, children, disabled = false, progress = true, width = null } = props;

    const { getColor, getStyle } = useContext(ThemeContext);

    /* To give 100% width; without sending width in string  */
    let widthStyle = { width: null, stretch: false };
    if (width) {
        widthStyle.width = width
    } else {
        widthStyle.width = width;
        widthStyle.stretch = true
    }

    // Default Props
    const commonStyleProps = {
        ...getStyle('rounded-lg'),
        progress: progress,
        raiseLevel: 0,
        ...widthStyle,
    };

    const primaryEnabled = {
        backgroundColor: getColor('primaryColor-500'),
        backgroundActive: getColor('primaryColor-500'),
        textColor: getColor('whiteColor')
    };

    const primaryDisabled = {
        backgroundColor: getColor('disabledColor'),
        backgroundActive: getColor('disabledColor'),
        textColor: getColor('text-disabledColor')
    };

    const secondaryEnabled = {
        backgroundColor: getColor('whiteColor'),
        backgroundActive: getColor('whiteColor'),
        textColor: getColor('primaryColor-500'),
        boderWidth: 2,
        borderColor: getColor('primaryColor-500')
    };

    const acceptEnabled = {
        backgroundColor: getColor('positiveColor'),
        backgroundActive: getColor('positiveColor'),
        textColor: getColor('whiteColor')
    }

    const rejectEnabled = {
        backgroundColor: getColor('whiteColor'),
        backgroundActive: getColor('whiteColor'),
        textColor: getColor('negativeColor'),
        boderWidth: 2,
        borderColor: getColor('negativeColor')
    }

    const readyEnabled = {
        backgroundColor: getColor('warnColor'),
        backgroundActive: getColor('warnColor'),
        textColor: getColor('whiteColor')
    }

    let buttonTheme = {};
    let btnType = '';

    switch (type) {
        case 'primary':
            buttonTheme = disabled ? primaryDisabled : primaryEnabled;
            btnType = 'primary';
            break;
        case 'secondary':
            buttonTheme = disabled ? primaryDisabled : secondaryEnabled;
            btnType = 'secondary';
            break;
        case 'accept':
            buttonTheme = disabled ? primaryDisabled : acceptEnabled;
            btnType = 'primary';
            break;
        case 'reject':
            buttonTheme = disabled ? primaryDisabled : rejectEnabled;
            btnType = 'secondary';
            break;
        case 'ready':
            buttonTheme = disabled ? primaryDisabled : readyEnabled;
            btnType = 'primary';
            break;
        case 'complete':
            buttonTheme = disabled ? primaryDisabled : primaryEnabled;
            btnType = 'primary';
            break;
    }

    return (
        <AwesomeButtonBlue
            {...commonStyleProps}
            type={btnType}
            disabled={disabled}
            {...buttonTheme}
            onPress={next => onPress(next)}
        >
            {children}
        </AwesomeButtonBlue>
    );
};
