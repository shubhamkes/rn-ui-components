/* eslint-disable import/no-unresolved, import/extensions */
import { StyleSheet } from 'react-native';
/* eslint-enable import/no-unresolved, import/extensions */

// import Color from 'color';

import typography from './typography';
// import {
//     black,
//     grey100,
//     grey500,
//     white,
//     transparent,
//     snackbarColor,
// } from './colors';

// import lightTheme from './themes/light';
/* eslint-disable import/no-unresolved, import/extensions */
import getPlatformElevation from './../utils/getPlatformElevation';
/* eslint-enable import/no-unresolved, import/extensions */

// function darkenOrLighten(color, ratio = 0.15) {
//     const c = Color(color);
//     return c.luminosity() > 0.5 ? c.darken(ratio) : c.lighten(ratio);
// }

export default function getTheme(getStyle) {
    // export default function getTheme(theme, ...more) {
    // let mergedTheme = merge(lightTheme, theme, ...more);

    // const { iconSet, spacing, fontFamily, typography, palette } = mergedTheme;
    // const baseTheme = {
    //     iconSet,
    //     spacing,
    //     fontFamily,
    //     typography,
    //     palette,
    // };

    const mergedTheme = {
        button: StyleSheet.create(
            {
                container: {
                    height: 36,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 16,
                    borderRadius: 2,
                    flexDirection: 'row',
                },
                text: {
                    ...typography.buttons,
                    ...getStyle('text-onBackgroundColor'),
                },
                icon: {
                    marginRight: 8,
                },
            }
        ),
        buttonFlat: StyleSheet.create({ container: { borderColor: "#20232a" } }),
        buttonDisabled: StyleSheet.create(
            {
                text: getStyle('text-disabledColor')
                // text: {
                //     color: getStyle('text-disabledColor'),
                // },
            }
        ),
        buttonRaised: StyleSheet.create(
            {
                container: {
                    // ...getStyle('bg-primaryColor-100 border-primary'),
                    backgroundColor: '#fff',
                    borderColor: 'rgba(0,0,0,.12)',
                },
            }
        ),
        buttonRaisedDisabled: StyleSheet.create(
            {
                container: getStyle('bg-darkColor'),
                text: getStyle('text-disabledColor')
                // container: {
                //     backgroundColor: getStyle('text-borderColor'),
                // },
                // text: {
                //     color: getStyle('text-disabledColor'),
                // },
            }
        ),
        // ...baseTheme,
    };

    return mergedTheme;
}
