/* eslint-disable import/no-unresolved, import/extensions */
import { View } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'rn-themed-tailwind';
/* eslint-enable import/no-unresolved, import/extensions */
import RippleFeedback from '../Ripple-Feedback/rippleFeedback';
import { ViewPropTypes } from '../../utils/viewPropTypes';
import getTheme from '../../styles/getTheme';

const propTypes = {
    children: PropTypes.node,
    onPress: PropTypes.func,
    style: PropTypes.shape({
        container: ViewPropTypes.style,
    }),
};
const defaultProps = {
    children: null,
    onPress: null,
    style: {},
};

function GetStyles({ getStyle, getColor, ...props }) {
    // const { card } = props.theme;
    const { card } = getTheme(getStyle);

    const local: { [key: string]: object | string | any } = {};

    if (props.fullWidth) {
        local.container = {
            marginHorizontal: 0,
        };
    }

    return {
        container: [card.container, local.container, props.style && props.style.container ? props.style.container : null],
    };
}


export const Card = ({ onPress, ...props }) => {
    const { getStyle, getColor } = useContext(ThemeContext);
    const [styles, setStyles] = useState(GetStyles({ getStyle, getColor, ...props }));

    useEffect(() => {
        setStyles(GetStyles({ getStyle, getColor, ...props }));
    }, [props]);

    function renderContent() {
        const { children } = props;

        return (
            <View style={styles.container} pointerEvents="auto">
                {children}
            </View>
        );
    }

    if (onPress) {
        return (<RippleFeedback onPress={onPress}>
            {renderContent()}
        </RippleFeedback>)
    } else {
        return renderContent();
    }
}