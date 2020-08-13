/**
 * Name: Composite Image component
 * Description: Used to render a Composite image depends on size
 * Ex:       <Image
                    size={20}
                    source={img()}
            />
 */
import React from "react";
import { StyleSheet } from "react-native";
import { GetStyle } from "rn-themed-tailwind";
import { Image as CustomImage } from '../basic-components/customImage';

const IMAGE_STYLE = StyleSheet.create({
    4: { ...GetStyle("w-4 h-4") },
    6: { ...GetStyle("w-6 h-6") },
    8: { ...GetStyle("w-8 h-8") },
    10: { ...GetStyle("w-10 h-10") },
    12: { ...GetStyle("w-12 h-12") },
    16: { ...GetStyle("w-16 h-16") },
    20: { ...GetStyle("w-20 h-20") },
    32: { ...GetStyle("w-32 h-32") },
    40: { ...GetStyle("w-40 h-40") },
    48: { ...GetStyle("w-48 h-48") },

});

type ImageProps = {
    [key: string]: any,
    source: any,
    size?: number
    style?: any
};

const Image = ({ style, source, size = 4, ...props }: ImageProps) => {

    style = [IMAGE_STYLE[size], style] as any;

    return <CustomImage source={source} {...props} style={style} />;
};

export { Image };

