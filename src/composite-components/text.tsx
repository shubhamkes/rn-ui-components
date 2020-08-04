/**
* Name: Composite Text component
* Description: Used to render a Composite Text depends on font weight , font size and etc.
*/

import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { ThemeContext, GetStyle } from 'rn-themed-tailwind';
import { Text } from '../index';

const STYLE = StyleSheet.create({
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
    text: string,
    [key: string]: any,
    style?: any,
    color?: { color?: string }
}

const TextSmSb = ({ props, color, style = {}, text }: getStyleProps) => {

    const { getStyle } = useContext(ThemeContext);

    const fontColor = color || getStyle('text-onSurfaceColor-100');

    const smSbStyle = { ...STYLE['sm-sb'], ...fontColor, ...style };

    return <Text style={smSbStyle}>{text}</Text>;
};

const TextBSb = ({ props, color, style = {}, text }: getStyleProps) => {

    const { getStyle } = useContext(ThemeContext);

    const fontColor = color || getStyle('text-onSurfaceColor-200');

    const smSbStyle = { ...STYLE['b-sb'], ...fontColor, ...style };

    return <Text style={smSbStyle}>{text}</Text>;
};

const TextBB = ({ props, color, style = {}, text }: getStyleProps) => {

    const { getStyle } = useContext(ThemeContext);

    const fontColor = color || getStyle('text-onSurfaceColor-200');

    const bbStyle = { ...STYLE['b-b'], ...fontColor, ...style };

    return <Text style={bbStyle}>{text}</Text>;
};

const TextBRg = ({ props, color, style = {}, text }: getStyleProps) => {

    const { getStyle } = useContext(ThemeContext);

    const fontColor = color || getStyle('text-onSurfaceColor-200');

    const bbStyle = { ...STYLE['b-rg'], ...fontColor, ...style };

    return <Text style={bbStyle}>{text}</Text>;
};

const TextLgRg = ({ props, color, style = {}, text }: getStyleProps) => {

    const { getStyle } = useContext(ThemeContext);

    const fontColor = color || getStyle('text-onSurfaceColor-200');

    const bbStyle = { ...STYLE['lg-rg'], ...fontColor, ...style };

    return <Text style={bbStyle}>{text}</Text>;
};

const TextLgB = ({ props, color, style = {}, text }: getStyleProps) => {

    const { getStyle } = useContext(ThemeContext);

    const fontColor = color || getStyle('text-onSurfaceColor-200');

    const bbStyle = { ...STYLE['lg-b'], ...fontColor, ...style };

    return <Text style={bbStyle}>{text}</Text>;
};

const TextXlB = ({ props, color, style = {}, text }: getStyleProps) => {

    const { getStyle } = useContext(ThemeContext);

    const fontColor = color || getStyle('text-onSurfaceColor-200');

    const bbStyle = { ...STYLE['xl-b'], ...fontColor, ...style };

    return <Text style={bbStyle}>{text}</Text>;
};

const TextXlSb = ({ props, color, style = {}, text }: getStyleProps) => {

    const { getStyle } = useContext(ThemeContext);

    const fontColor = color || getStyle('text-onSurfaceColor-200');

    const bbStyle = { ...STYLE['xl-sb'], ...fontColor, ...style };

    return <Text style={bbStyle}>{text}</Text>;
};

export { TextSmSb, TextBSb, TextBB, TextBRg, TextLgRg, TextLgB, TextXlB, TextXlSb };

