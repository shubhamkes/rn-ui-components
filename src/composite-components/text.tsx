/**
 * Name: Composite Text component
 * Description: Used to render a Composite Text depends on font weight , font size and etc.
 */

import React, { useContext } from "react";
import { StyleSheet, Platform } from "react-native";
import { ThemeContext, GetStyle } from "rn-themed-tailwind";
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

type getStyleProps = {
    children?: React.ReactNode,
    [key: string]: any,
    style?: any,
    color?: string
}

const TextSmB = ({ props, color, style = {}, children }: getStyleProps) => {
    const { getStyle } = useContext(ThemeContext);

    const fontColor = getStyle(color || "text-onSurfaceColor-100");

    const smSbStyle = { ...TEXT_STYLE["sm-b"], ...fontColor, ...style };

    return <Text style={smSbStyle} {...props}>{children}</Text>;
};

const TextSmSb = ({ props, color, style = {}, children }: getStyleProps) => {
    const { getStyle } = useContext(ThemeContext);

    const fontColor = getStyle(color || "text-onSurfaceColor-100");

    const smSbStyle = { ...TEXT_STYLE["sm-sb"], ...fontColor, ...style };

    return <Text style={smSbStyle} {...props}>{children}</Text>;
};

const TextBSb = ({ props, color, style = {}, children }: getStyleProps) => {
    const { getStyle } = useContext(ThemeContext);

    const fontColor = getStyle(color || "text-onSurfaceColor-200");

    const smSbStyle = { ...TEXT_STYLE["b-sb"], ...fontColor, ...style };

    return <Text style={smSbStyle} {...props}>{children}</Text>;
};

const TextBB = ({ props, color, style = {}, children }: getStyleProps) => {
    const { getStyle } = useContext(ThemeContext);

    const fontColor = getStyle(color || "text-onSurfaceColor-200");

    const bbStyle = { ...TEXT_STYLE["b-b"], ...fontColor, ...style };

    return <Text style={bbStyle} {...props}>{children}</Text>;
};

const TextBRg = ({ props, color, style = {}, children }: getStyleProps) => {
    const { getStyle } = useContext(ThemeContext);

    const fontColor = getStyle(color || "text-onSurfaceColor-200");

    const bbStyle = { ...TEXT_STYLE["b-rg"], ...fontColor, ...style };

    return <Text style={bbStyle} {...props}>{children}</Text>;
};

const TextLgRg = ({ props, color, style = {}, children }: getStyleProps) => {
    const { getStyle } = useContext(ThemeContext);

    const fontColor = getStyle(color || "text-onSurfaceColor-200");

    const bbStyle = { ...TEXT_STYLE["lg-rg"], ...fontColor, ...style };

    return <Text style={bbStyle} {...props}>{children}</Text>;
};

const TextLgSb = ({ props, color, style = {}, children }: getStyleProps) => {
    const { getStyle } = useContext(ThemeContext);

    const fontColor = getStyle(color || "text-onSurfaceColor-200");

    const bbStyle = { ...TEXT_STYLE["lg-sb"], ...fontColor, ...style };

    return <Text style={bbStyle} {...props}>{children}</Text>;
};


const TextLgB = ({ props, color, style = {}, children }: getStyleProps) => {
    const { getStyle } = useContext(ThemeContext);

    const fontColor = getStyle(color || "text-onSurfaceColor-200");

    const bbStyle = { ...TEXT_STYLE["lg-b"], ...fontColor, ...style };

    return <Text style={bbStyle} {...props}>{children}</Text>;
};

const TextXlB = ({ props, color, style = {}, children }: getStyleProps) => {
    const { getStyle } = useContext(ThemeContext);

    const fontColor = getStyle(color || "text-onSurfaceColor-200");

    const bbStyle = { ...TEXT_STYLE["xl-b"], ...fontColor, ...style };

    return <Text style={bbStyle} {...props}>{children}</Text>;
};

const TextXlSb = ({ props, color, style = {}, children }: getStyleProps) => {
    const { getStyle } = useContext(ThemeContext);

    const fontColor = getStyle(color || "text-onSurfaceColor-200");

    const bbStyle = { ...TEXT_STYLE["xl-sb"], ...fontColor, ...style };

    return <Text style={bbStyle} {...props}>{children}</Text>;
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

