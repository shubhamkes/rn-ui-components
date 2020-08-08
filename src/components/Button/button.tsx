/* eslint-disable import/no-unresolved, import/extensions */
import { View, Text, StyleSheet } from 'react-native';
import React, { PureComponent, useState, useContext, ReactNode } from 'react';
import PropTypes, { func } from 'prop-types';
import { ThemeContext } from 'rn-themed-tailwind';

// import theme from './../../utils/theme';
import { ViewPropTypes } from '../../utils/viewPropTypes';
/* eslint-enable import/no-unresolved, import/extensions */

// import Icon from '../Icon'; // @TODO icon fix

import RippleFeedback from './../Ripple-Feedback/rippleFeedback';
/* eslint-disable import/no-unresolved, import/extensions */
import getPlatformElevation from '../../utils/getPlatformElevation';
import getTheme from '../../styles/getTheme';
/* eslint-enable import/no-unresolved, import/extensions */
// import withTheme from '../styles/withTheme';

const propTypes = {
    testID: PropTypes.string,
    /**
     * If true button will be disabled
     */
    disabled: PropTypes.bool,
    /**
     * If true button will be raised
     */
    raised: PropTypes.bool,
    /**
     * Called when button is pressed. Text is passed as param
     */
    onPress: PropTypes.func,
    /**
     * Called when button is long pressed. Text is passed as param
     */
    onLongPress: PropTypes.func,
    /**
     * Text will be shown on button
     */
    text: PropTypes.string.isRequired,
    /**
     * Button text will be in uppercase letters
     */
    upperCase: PropTypes.bool,
    /**
     * If specified it'll be shown before text
     */
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    /**
     * Name of Icon set that should be use. From react-native-vector-icons
     */
    iconSet: PropTypes.string,
    /**
     * You can override any style for this button
     */
    style: PropTypes.shape({
        container: ViewPropTypes.style,
        text: Text.propTypes.style, // eslint-disable-line
    }),
    primary: PropTypes.bool,
    accent: PropTypes.bool,
};
const defaultProps = {
    testID: null,
    icon: null,
    onPress: null,
    onLongPress: null,
    primary: false,
    accent: false,
    disabled: false,
    raised: false,
    upperCase: true,
    iconSet: null,
    style: {},
};

type getStyleProps = {
    style: any,
    [key: string]: any
}

// Button.propTypes = propTypes;
// Button.defaultProps = defaultProps;

function GetStyles({ primary, accent, disabled, raised, elevation, style = {}, getStyle, getColor }: getStyleProps) {

    const {
        button,
        buttonFlat,
        buttonRaised,
        buttonDisabled,
        buttonRaisedDisabled,
        // palette,
    } = getTheme(getStyle);

    const local: { [key: string]: object | string | any } = {
        container: {},
    };

    if (!disabled) {
        if (primary && !raised) {
            local.text = getStyle('text-onPrimaryColor');
            // local.text = { color: palette.primaryColor };
        } else if (accent && !raised) {
            local.text = { color: '#f24434' };
            // local.text = getStyle('text-secondaryColor-100');
            // local.text = { color: palette.accentColor };
        }

        if (primary && raised) {
            local.container.backgroundColor = getColor('primaryColor-500')
            // palette.primaryColor;
            local.text = getStyle('text-onPrimaryColor');
        } else if (accent && raised) {
            local.container.backgroundColor = '#f24434';
            // local.container.backgroundColor = getColor('secondaryColor-100')
            local.text = { color: '#fff' };
        }
    }

    if (raised && !disabled) {
        local.container = {
            ...local.container,
            ...(getPlatformElevation as Function)(elevation) as { elevation: number },
        };
    }

    return {
        container: [
            button.container,
            !raised && buttonFlat.container,
            raised && buttonRaised.container,
            !raised && disabled && buttonDisabled.container,
            raised && disabled && buttonRaisedDisabled.container,
            local.container,
            style.container,
        ],
        text: [
            button.text,
            !raised && buttonFlat.text,
            raised && buttonRaised.text,
            !raised && disabled && buttonDisabled.text,
            raised && disabled && buttonRaisedDisabled.text,
            local.text,
            style.text,
        ],
        icon: [
            button.icon,
            !raised && buttonFlat.icon,
            disabled && buttonDisabled.icon,
            raised && buttonRaised.icon,
            local.icon,
            style.icon,
        ],
    };
}

type ButtonProps = {
    text?: string,
    onPress?: Function,
    icon?: string | ReactNode,
    disabled?: boolean,
    raised?: boolean,
    upperCase?: boolean,
    onLongPress?: Function,
    primary?: boolean,
    accent?: boolean,
    style?: { [key: string]: any }
}

export const Button = ({ text, onPress, icon, disabled, raised, upperCase, onLongPress = () => { }, primary, accent, style }: ButtonProps) => {
    const [elevation, setElevation] = useState(2);

    const { getStyle, getColor } = useContext(ThemeContext);

    const styles = GetStyles({ elevation, primary, accent, disabled, raised, style, getStyle, getColor });
    // const styles = getStyles(this.props, this.state);

    function onPressButton() {
        // const { text, onPress } = this.props;
        if (onPress) {
            onPress(text);
        }
    };

    function setElevationVal() {
        setElevation(4);
        // this.setState({
        //     elevation: 4, // eslint-disable-line
        // });
    };

    function removeElevation() {
        setElevation(2);
    }


    function renderIcon(styles) {
        const textFlatten = StyleSheet.flatten(styles.text);
        if (!icon) {
            return null;
        }

        let result;

        if (React.isValidElement(icon)) {
            result = icon;
        } else if (typeof icon === 'string') {
            result = (<Text>icon</Text>)
            // <Icon
            //     iconSet={iconSet}
            //     name={icon}
            //     color={textFlatten.color}
            //     style={styles.icon}
            //     size={24}
            // />
            // @TODO icon to be rendered
            // );
        }
        return result;
    };

    const content = (
        <View style={styles.container} pointerEvents="box-only">
            {renderIcon(styles)}
            <Text style={styles.text}>{upperCase ? text.toUpperCase() : text}</Text>
        </View>
    );

    if (disabled) {
        alert('here');
        return content;
    }

    return (
        <RippleFeedback
            // testID={testID}
            onPress={!disabled ? onPressButton : null}
            onLongPress={!disabled ? onLongPress : null}
            onPressIn={raised ? setElevationVal : null}
            onPressOut={raised ? removeElevation : null}
            delayPressIn={50}
        >
            {content}
        </RippleFeedback>
    );

}

