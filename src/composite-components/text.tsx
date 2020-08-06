/**
* Name: Composite Text component
* Description: Used to render a Composite Text depends on font weight , font size and etc.
*/

import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { ThemeContext, GetStyle } from 'rn-themed-tailwind';
import { Text } from '../index';

const TEXT_STYLE = StyleSheet.create({
    "sm-sb": GetStyle('text-sm font-semibold'),
    "b-sb": GetStyle('text-base font-semibold'),
    "b-b": GetStyle('text-base font-semibold'),
    "b-rg": GetStyle('text-base font-semibold'),
    "lg-rg": GetStyle('text-lg font-normal '),
    "lg-b": GetStyle('text-lg font-bold'),
    "xl-b": GetStyle('text-xl font-bold '),
    "xl-sb": GetStyle('text-xl font-semibold ')
});

/**
 *font-size
sm=10
base=12
lg==14
xl=16

* font-weight
regular/normal==400
sb==500 ==semibold
b==600==bold
 */

type getStyleProps = {
    children?: React.ReactNode,
    [key: string]: any,
    style?: any,
    color?: string
}

const TextSmSb = ({ props, color, style = {}, children }: getStyleProps) => {

    const { getStyle } = useContext(ThemeContext);

    const fontColor = getStyle(color || 'text-onSurfaceColor-100');

    const smSbStyle = { ...TEXT_STYLE['sm-sb'], ...fontColor, ...style };

    return <Text style={smSbStyle}>{children}</Text>;
};

const TextBSb = ({ props, color, style = {}, children }: getStyleProps) => {

    const { getStyle } = useContext(ThemeContext);

    const fontColor = getStyle(color || 'text-onSurfaceColor-100');

    const smSbStyle = { ...TEXT_STYLE['b-sb'], ...fontColor, ...style };

    return <Text style={smSbStyle}>{children}</Text>;
};

const TextBB = ({ props, color, style = {}, children }: getStyleProps) => {

    const { getStyle } = useContext(ThemeContext);

    const fontColor = getStyle(color || 'text-onSurfaceColor-200');

    const bbStyle = { ...TEXT_STYLE['b-b'], ...fontColor, ...style };

    return <Text style={bbStyle}>{children}</Text>;
};

const TextBRg = ({ props, color, style = {}, children }: getStyleProps) => {

    const { getStyle } = useContext(ThemeContext);

    const fontColor = getStyle(color || 'text-onSurfaceColor-200');

    const bbStyle = { ...TEXT_STYLE['b-rg'], ...fontColor, ...style };

    return <Text style={bbStyle}>{children}</Text>;
};

const TextLgRg = ({ props, color, style = {}, children }: getStyleProps) => {

    const { getStyle } = useContext(ThemeContext);

    const fontColor = getStyle(color || 'text-onSurfaceColor-200');

    const bbStyle = { ...TEXT_STYLE['lg-rg'], ...fontColor, ...style };

    return <Text style={bbStyle}>{children}</Text>;
};

const TextLgB = ({ props, color, style = {}, children }: getStyleProps) => {

    const { getStyle } = useContext(ThemeContext);

    const fontColor = getStyle(color || 'text-onSurfaceColor-200');

    const bbStyle = { ...TEXT_STYLE['lg-b'], ...fontColor, ...style };

    return <Text style={bbStyle}>{children}</Text>;
};

const TextXlB = ({ props, color, style = {}, children }: getStyleProps) => {

    const { getStyle } = useContext(ThemeContext);

    const fontColor = getStyle(color || 'text-onSurfaceColor-200');

    const bbStyle = { ...TEXT_STYLE['xl-b'], ...fontColor, ...style };

    return <Text style={bbStyle}>{children}</Text>;
};

const TextXlSb = ({ props, color, style = {}, children }: getStyleProps) => {

    const { getStyle } = useContext(ThemeContext);

    const fontColor = getStyle(color || 'text-onSurfaceColor-200');

    const bbStyle = { ...TEXT_STYLE['xl-sb'], ...fontColor, ...style };

    return <Text style={bbStyle}>{children}</Text>;
};

export { TextSmSb, TextBSb, TextBB, TextBRg, TextLgRg, TextLgB, TextXlB, TextXlSb, TEXT_STYLE };

