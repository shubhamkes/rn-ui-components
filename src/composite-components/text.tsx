/**
 * Name: Composite Text component
 * Description: Used to render a Composite Text depends on font weight , font size and etc.
 */

import React, { useContext } from "react";
import { StyleSheet, Platform } from "react-native";
import { ThemeContext, GetStyle } from "rn-themed-tailwind";
// import { LocalizeContext } from 'react-locale-language';


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
    "xxl-b": { ...GetStyle("text-xxl font-bold "), fontFamily: Fonts.ProximaNovaBold },
    "xxl-sb": { ...GetStyle("text-xxl font-semibold "), fontFamily: Fonts.ProximaNovaBold },
    "xxxl-b": { ...GetStyle("text-xxl font-bold "), fontFamily: Fonts.ProximaNovaBold },
    "xxxl-sb": { ...GetStyle("text-xxxl font-semibold "), fontFamily: Fonts.ProximaNovaBold },
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
    style?: any,
    color?: string,
    // translate?: boolean,
    textVar?: undefined | { [key: string]: string | number },
    text?: string | number,
    hexColor?: string,
    [key: string]: any,
};

const TextSmB = ({ children, ...props }: GetStyleProps) => {
    return <TextWrapper textStyle="sm-b" defaultColor="text-onSurfaceColor-100" {...props} >{children} </TextWrapper>
};

const TextSmSb = ({ children, ...props }: GetStyleProps) => {
    return <TextWrapper textStyle="sm-sb" defaultColor="text-onSurfaceColor-100" {...props} >{children} </TextWrapper>
};

const TextBSb = ({ children, ...props }: GetStyleProps) => {
    return <TextWrapper textStyle="b-sb" defaultColor="text-onSurfaceColor-200" {...props} >{children} </TextWrapper>
};

const TextBB = ({ children, ...props }: GetStyleProps) => {
    return <TextWrapper textStyle="b-b" defaultColor="text-onSurfaceColor-200" {...props} >{children} </TextWrapper>
};

const TextBRg = ({ children, ...props }: GetStyleProps) => {
    return <TextWrapper textStyle="b-rg" defaultColor="text-onSurfaceColor-200" {...props} >{children} </TextWrapper>
};

const TextLgRg = ({ children, ...props }: GetStyleProps) => {
    return <TextWrapper textStyle="lg-rg" defaultColor="text-onSurfaceColor-200" {...props} >{children} </TextWrapper>
};

const TextLgSb = ({ children, ...props }: GetStyleProps) => {
    return <TextWrapper textStyle="lg-sb" defaultColor="text-onSurfaceColor-200" {...props} >{children} </TextWrapper>

};

const TextLgB = ({ children, ...props }: GetStyleProps) => {
    return <TextWrapper textStyle="lg-b" defaultColor="text-onSurfaceColor-200" {...props} >{children} </TextWrapper>
};

const TextXlB = ({ children, ...props }: GetStyleProps) => {
    return <TextWrapper textStyle="xl-b" defaultColor="text-onSurfaceColor-200" {...props} >{children} </TextWrapper>
};

const TextXlSb = ({ children, ...props }: GetStyleProps) => {
    return <TextWrapper textStyle="xl-sb" defaultColor="text-onSurfaceColor-200" {...props} >{children} </TextWrapper>
};

interface TextWrapperStyle extends GetStyleProps {
    textStyle: string
};

const TextWrapper = ({ textStyle, style, color, defaultColor, children, textVar, text, allowFontScaling = true, ...textProps }: TextWrapperStyle) => {

    const { getColor } = useContext(ThemeContext);

    const { translate: doTranslate } = useContext((window as any).LocalizeContext);

    // translation only applies to text
    const texts = text ? doTranslate(text, textVar) : children;

    const fontColor = getColor(color || defaultColor);

    const Style = { ...TEXT_STYLE[textStyle], ...fontColor, ...style };

    return <Text style={Style} allowFontScaling={allowFontScaling} {...textProps}>{texts}</Text>;
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
