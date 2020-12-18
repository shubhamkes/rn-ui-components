/**
 * Name: Composite Text component
 * Description: Used to render a Composite Text depends on font weight , font size and etc.
 */

import React, { useContext } from "react";
import { StyleSheet, Platform } from "react-native";
import { ThemeContext, GetStyle } from "rn-themed-tailwind";
// import { LocalizeContext } from 'react-locale-language';


import { Text } from "../index";

const Fonts = Platform.OS === 'android' ? {
    ProximaNovaSemibold: 'ProximaNovaSemibold',
    ProximaNovaBold: 'ProximaNovaBold',
    ProximaNovaRegular: 'ProximaNovaRegular',
} : {
        ProximaNovaSemibold: 'ProximaNova-Semibold',
        ProximaNovaBold: 'ProximaNova-Bold',
        ProximaNovaRegular: 'ProximaNova-Regular',
    }

const TEXT_STYLE = StyleSheet.create({
    "sm-rg": { ...GetStyle("text-sm font-normal"), fontFamily: Fonts.ProximaNovaRegular },
    "sm-sb": { ...GetStyle("text-sm font-semibold"), fontFamily: Fonts.ProximaNovaSemibold },
    "sm-b": { ...GetStyle("text-sm font-bold"), fontFamily: Fonts.ProximaNovaBold },

    "b-rg": { ...GetStyle("text-base font-normal"), fontFamily: Fonts.ProximaNovaRegular },
    "b-sb": { ...GetStyle("text-base font-semibold"), fontFamily: Fonts.ProximaNovaSemibold },
    "b-b": { ...GetStyle("text-base font-bold"), fontFamily: Fonts.ProximaNovaBold },

    "lg-rg": { ...GetStyle("text-lg font-normal "), fontFamily: Fonts.ProximaNovaRegular },
    "lg-sb": { ...GetStyle("text-lg font-semibold"), fontFamily: Fonts.ProximaNovaSemibold },
    "lg-b": { ...GetStyle("text-lg font-bold"), fontFamily: Fonts.ProximaNovaBold },

    "xl-rg": { ...GetStyle("text-xl font-normal "), fontFamily: Fonts.ProximaNovaRegular },
    "xl-sb": { ...GetStyle("text-xl font-semibold "), fontFamily: Fonts.ProximaNovaSemibold },
    "xl-b": { ...GetStyle("text-xl font-bold "), fontFamily: Fonts.ProximaNovaBold },

    "xxl-b": { ...GetStyle("text-xxl font-bold "), fontFamily: Fonts.ProximaNovaBold },
    "xxl-sb": { ...GetStyle("text-xxl font-semibold "), fontFamily: Fonts.ProximaNovaBold },

    "xxxl-b": { ...GetStyle("text-xxl font-bold "), fontFamily: Fonts.ProximaNovaBold },
    "xxxl-sb": { ...GetStyle("text-xxxl font-semibold "), fontFamily: Fonts.ProximaNovaBold },
});

/**
 *font-size
sm=12
base=14
lg==16
xl=18
xxl=22
xxxl=24

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
    return <TextWrapper textStyle="sm-b" defaultColor="text-onSurfaceColor-100" {...props} >{children}</TextWrapper>
};

const TextSmSb = ({ children, ...props }: GetStyleProps) => {
    return <TextWrapper textStyle="sm-sb" defaultColor="text-onSurfaceColor-100" {...props} >{children}</TextWrapper>
};

const TextSmRg = ({ children, ...props }: GetStyleProps) => {
    return <TextWrapper textStyle="sm-rg" defaultColor="text-onSurfaceColor-200" {...props} >{children}</TextWrapper>
};

const TextBSb = ({ children, ...props }: GetStyleProps) => {
    return <TextWrapper textStyle="b-sb" defaultColor="text-onSurfaceColor-200" {...props} >{children}</TextWrapper>
};

const TextBB = ({ children, ...props }: GetStyleProps) => {
    return <TextWrapper textStyle="b-b" defaultColor="text-onSurfaceColor-200" {...props} >{children}</TextWrapper>
};

const TextBRg = ({ children, ...props }: GetStyleProps) => {
    return <TextWrapper textStyle="b-rg" defaultColor="text-onSurfaceColor-200" {...props} >{children}</TextWrapper>
};

const TextLgRg = ({ children, ...props }: GetStyleProps) => {
    return <TextWrapper textStyle="lg-rg" defaultColor="text-onSurfaceColor-200" {...props} >{children}</TextWrapper>
};

const TextLgSb = ({ children, ...props }: GetStyleProps) => {
    return <TextWrapper textStyle="lg-sb" defaultColor="text-onSurfaceColor-200" {...props} >{children}</TextWrapper>

};

const TextLgB = ({ children, ...props }: GetStyleProps) => {
    return <TextWrapper textStyle="lg-b" defaultColor="text-onSurfaceColor-200" {...props} >{children}</TextWrapper>
};

const TextXlB = ({ children, ...props }: GetStyleProps) => {
    return <TextWrapper textStyle="xl-b" defaultColor="text-onSurfaceColor-200" {...props} >{children}</TextWrapper>
};

const TextXlSb = ({ children, ...props }: GetStyleProps) => {
    return <TextWrapper textStyle="xl-sb" defaultColor="text-onSurfaceColor-200" {...props} >{children}</TextWrapper>
};

const TextXlRg = ({ children, ...props }: GetStyleProps) => {
    return <TextWrapper textStyle="xl-rg" defaultColor="text-onSurfaceColor-200" {...props} >{children}</TextWrapper>
};

const TextXXlB = ({ children, ...props }: GetStyleProps) => {
    return <TextWrapper textStyle="xxl-b" defaultColor="text-onSurfaceColor-200" {...props} >{children}</TextWrapper>
};

const TextXXlSb = ({ children, ...props }: GetStyleProps) => {
    return <TextWrapper textStyle="xxl-sb" defaultColor="text-onSurfaceColor-200" {...props} >{children}</TextWrapper>
};

const TextXXXlB = ({ children, ...props }: GetStyleProps) => {
    return <TextWrapper textStyle="xxxl-b" defaultColor="text-onSurfaceColor-200" {...props} >{children}</TextWrapper>
};

const TextXXXlSb = ({ children, ...props }: GetStyleProps) => {
    return <TextWrapper textStyle="xxxl-sb" defaultColor="text-onSurfaceColor-200" {...props} >{children}</TextWrapper>
};

interface TextWrapperStyle extends GetStyleProps {
    textStyle: string
};

const TextWrapper = ({ textStyle, style, color, defaultColor, children, textVar, text, allowFontScaling = true, ...textProps }: TextWrapperStyle) => {

    const { getStyle } = useContext(ThemeContext);

    const { translate: doTranslate } = useContext((window as any).LocalizeContext);

    // translation only applies to text
    const texts = text ? doTranslate(text, textVar) : children;

    const fontColor = getStyle(color || defaultColor);
    // if (color) {
    //     console.log(' getColor(color ', color, getStyle(color));
    // }

    const Style = StyleSheet.flatten([TEXT_STYLE[textStyle], fontColor, style]);

    return <Text style={Style} allowFontScaling={allowFontScaling} {...textProps}>{texts}</Text>;
};

export {
    TextSmB,
    TextSmSb,
    TextSmRg,
    TextBSb,
    TextBB,
    TextBRg,
    TextLgRg,
    TextLgSb,
    TextLgB,
    TextXlRg,
    TextXlSb,
    TextXlB,
    TextXXlB,
    TextXXXlB,
    TextXXlSb,
    TextXXXlSb,
    TEXT_STYLE,
};
