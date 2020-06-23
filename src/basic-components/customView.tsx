/**
* Name: Custom View component
* Description: Used to render view on the screen
*/
import React from 'react';
import { View } from 'react-native';

type ViewProps = {
    children?: React.ReactNode,
    onPress?: () => void,
    [key: string]: any
}

/**
 * @class CustomView
 * @extends {React.Component}
 * @param {object} ViewStyleObject - it provides styling of view
 * Custom View component; to be used in place of View component. It takes care of absolute values 
 * assigned to it and converts them into relative size according to the screen size of the device
 */

const CustomView = React.forwardRef((props: ViewProps, ref) => {
    const { theme, style = {} } = props;
    // const themeStyle = AccessNestedObject(THEME, ['View', theme], {});
    // const styleObject = { ...themeStyle, ...style };

    return (
        <View
            ref={ref}
            {...props}
            style={style}
        >
            {props.children}
        </View>
    )
})

export { CustomView as View };
