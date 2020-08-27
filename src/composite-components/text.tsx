/**
 * Name: Composite Text component
 * Description: Used to render a Composite Text depends on font weight , font size and etc.
 */

import React, { useContext } from "react";
import { StyleSheet, Platform } from "react-native";
import { ThemeContext, GetStyle } from "rn-themed-tailwind";
import { LocalizeContext } from 'react-locale-language';


import { Text } from "../index";

const Fonts = Platform.android ? {
    ProximaNovaSemibold: 'ProximaNovaSemibold',
    ProximaNovaBold: 'ProximaNovaBold',
    ProximaNovaRegular: 'ProximaNovaRegular',
} : {
        ProximaNovaSemibold: 'ProximaNova-Semibold',
        ProximaNovaBold: 'ProximaNova-Bold',
        ProximaNovaRegular: 'ProximaNova-Regular',
    }

const TEXT_STYLE = StyleSheet.create({
    "sm-sb": { ...GetStyle("text-sm font-semibold"), fontFamily: Fonts.ProximaNovaSemibold },
    "sm-b": { ...GetStyle("text-sm font-bold"), fontFamily: Fonts.ProximaNovaBold },
    "b-sb": { ...GetStyle("text-base font-semibold"), fontFamily: Fonts.ProximaNovaSemibold },
    "b-b": { ...GetStyle("text-base font-bold"), fontFamily: Fonts.ProximaNovaBold },
    "b-rg": { ...GetStyle("text-base font-normal"), fontFamily: Fonts.ProximaNovaRegular },
    "lg-rg": { ...GetStyle("text-lg font-normal "), fontFamily: Fonts.ProximaNovaRegular },
    "lg-sb": { ...GetStyle("text-lg font-semibold"), fontFamily: Fonts.ProximaNovaSemibold },
    "lg-b": { ...GetStyle("text-lg font-bold"), fontFamily: Fonts.ProximaNovaBold },
    "xl-sb": { ...GetStyle("text-xl font-semibold "), fontFamily: Fonts.ProximaNovaSemibold },
    "xl-b": { ...GetStyle("text-xl font-bold "), fontFamily: Fonts.ProximaNovaBold },
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

interface GetStyleProps {
    children?: React.ReactNode,
    [key: string]: any,
    style?: any,
    color?: string,
    translate?: boolean
};

const TextSmB = ({ props, color, style = {}, children, translate }: GetStyleProps) => {
    return <TextWrapper textStyle="sm-b" color={color} defaultColor="text-onSurfaceColor-100" props={props} translate={translate}> {children}</TextWrapper>
};

const TextSmSb = ({ props, color, style = {}, children, translate }: GetStyleProps) => {
    return <TextWrapper textStyle="sm-sb" style={style} color={color} defaultColor="text-onSurfaceColor-100" props={props} translate={translate}> {children}</TextWrapper>
};

const TextBSb = ({ props, color, style = {}, children, translate }: GetStyleProps) => {
    return <TextWrapper textStyle="b-sb" style={style} color={color} defaultColor="text-onSurfaceColor-200" props={props} translate={translate}> {children}</TextWrapper>
};

const TextBB = ({ props, color, style = {}, children, translate }: GetStyleProps) => {
    return <TextWrapper textStyle="b-b" style={style} color={color} defaultColor="text-onSurfaceColor-200" props={props} translate={translate}> {children}</TextWrapper>
};

const TextBRg = ({ props, color, style = {}, children, translate }: GetStyleProps) => {
    return <TextWrapper textStyle="b-rg" style={style} color={color} defaultColor="text-onSurfaceColor-200" props={props} translate={translate}> {children}</TextWrapper>
};

const TextLgRg = ({ props, color, style = {}, children, translate }: GetStyleProps) => {
    return <TextWrapper textStyle="lg-rg" style={style} color={color} defaultColor="text-onSurfaceColor-200" props={props} translate={translate}> {children}</TextWrapper>
};

const TextLgSb = ({ props, color, style = {}, children, translate }: GetStyleProps) => {
    return <TextWrapper textStyle="lg-sb" style={style} color={color} defaultColor="text-onSurfaceColor-200" props={props} translate={translate}> {children}</TextWrapper>

};

const TextLgB = ({ props, color, style = {}, children, translate }: GetStyleProps) => {
    return <TextWrapper textStyle="lg-b" style={style} color={color} defaultColor="text-onSurfaceColor-200" props={props} translate={translate}> {children}</TextWrapper>
};

const TextXlB = ({ props, color, style = {}, children, translate }: GetStyleProps) => {
    return <TextWrapper textStyle="xl-b" style={style} color={color} defaultColor="text-onSurfaceColor-200" props={props} translate={translate}> {children}</TextWrapper>
};

const TextXlSb = ({ props, color, style = {}, children, translate }: GetStyleProps) => {
    return <TextWrapper textStyle="xl-sb" style={style} color={color} defaultColor="text-onSurfaceColor-200" props={props} translate={translate}> {children}</TextWrapper>
};

interface TextWrapperStyle extends GetStyleProps {
    textStyle: string
};

const TextWrapper = ({ style, color, defaultColor, children, translate, props, }: TextWrapperStyle) => {

    const { getStyle } = useContext(ThemeContext);

    // const { translate: doTranslate } = useContext(LocalizeContext);

    const texts = children;
    // const texts = translate ? doTranslate(children) : children;
    // console.log('texts', texts, children);

    const fontColor = getStyle(color || defaultColor);

    const Style = { ...TEXT_STYLE[style], ...fontColor, ...style };

    return <Text style={Style} {...props}>{texts}</Text>;
};

export {
    TextSmB,
    TextSmSb,
    TextBSb,
    TextBB,
    TextBRg,
    TextLgRg,
    TextLgSb,
    TextLgB,
    TextXlB,
    TextXlSb,
    TEXT_STYLE,
};
