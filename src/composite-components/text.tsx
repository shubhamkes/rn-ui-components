/**
* Name: Composite Text component
* Description: Used to render a Composite Text depends on font weight , font size and etc.
*/

import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { ThemeContext, GetStyle } from 'rn-themed-tailwind';
import { Text } from '../index';


const TextSmSb = ({ props, color = {}, style = {} }: getStyleProps) => {

    const { getStyle } = useContext(ThemeContext);

    const fontColor = color || getStyle('text-onSurfaceColor-100');

    const smSbStyle = { ...STYLE['sm-sb'], ...fontColor, ...style };

    return <Text style={smSbStyle}>Text-sm-sb</Text>;
};

const TextBSb = ({ props, color = {}, style = {} }: getStyleProps) => {

    const { getStyle } = useContext(ThemeContext);

    const fontColor = color || getStyle('text-onSurfaceColor-200');

    const smSbStyle = { ...STYLE['b-sb'], ...fontColor, ...style };

    return <Text style={smSbStyle}>Text-sm-sb</Text>;
};

const TextBB = ({ props, color = {}, style = {} }: getStyleProps) => {

    const { getStyle } = useContext(ThemeContext);

    const fontColor = color || getStyle('text-onSurfaceColor-200');

    const bbStyle = { ...STYLE['b-b'], ...fontColor, ...style };

    return <Text style={bbStyle}>Text-base-b</Text>;
};

const TextBRg = ({ props, color = {}, style = {} }: getStyleProps) => {

    const { getStyle } = useContext(ThemeContext);

    const fontColor = color || getStyle('text-onSurfaceColor-200');

    const bbStyle = { ...STYLE['b-rg'], ...fontColor, ...style };

    return <Text style={bbStyle}>Text-base-b</Text>;
};

const TextLgRg = ({ props, color = {}, style = {} }: getStyleProps) => {

    const { getStyle } = useContext(ThemeContext);

    const fontColor = color || getStyle('text-onSurfaceColor-200');

    const bbStyle = { ...STYLE['lg-rg'], ...fontColor, ...style };

    return <Text style={bbStyle}>Text-base-b</Text>;
};

const TextLgB = ({ props, color = {}, style = {} }: getStyleProps) => {

    const { getStyle } = useContext(ThemeContext);

    const fontColor = color || getStyle('text-onSurfaceColor-200');

    const bbStyle = { ...STYLE['lg-b'], ...fontColor, ...style };

    return <Text style={bbStyle}>Text-base-b</Text>;
};

const TextXlB = ({ props, color = {}, style = {} }: getStyleProps) => {

    const { getStyle } = useContext(ThemeContext);

    const fontColor = color || getStyle('text-onSurfaceColor-200');

    const bbStyle = { ...STYLE['xl-b'], ...fontColor, ...style };

    return <Text style={bbStyle}>Text-base-b</Text>;
};

const TextXlSb = ({ props, color = {}, style = {} }: getStyleProps) => {

    const { getStyle } = useContext(ThemeContext);

    const fontColor = color || getStyle('text-onSurfaceColor-200');

    const bbStyle = { ...STYLE['xl-sb'], ...fontColor, ...style };

    return <Text style={bbStyle}>Text-base-b</Text>;
};

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

type getStyleProps = {
    style?: any,
    [key: string]: any,
    color?: { color?: string }
}

export { TextSmSb, TextBSb, TextBB, TextBRg, TextLgRg, TextLgB, TextXlB, TextXlSb };

