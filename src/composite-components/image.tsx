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

// const IMAGE_STYLE = StyleSheet.create({
//     2: { ...GetStyle("w-2 h-2") },
//     3: { ...GetStyle("w-3 h-3") },
//     4: { ...GetStyle("w-4 h-4") },
//     5: { ...GetStyle("w-5 h-5") },
//     6: { ...GetStyle("w-6 h-6") },
//     7: { ...GetStyle("w-7 h-7") },
//     8: { ...GetStyle("w-8 h-8") },
//     9: { ...GetStyle("w-9 h-9") },
//     10: { ...GetStyle("w-10 h-10") },
//     11: { ...GetStyle("w-11 h-11") },
//     100: { ...GetStyle("w-full h-full") },


// });

const GetImageStyle = (size) => {
    return StyleSheet.create(GetStyle(`w-${size} h-${size}`));
}


type ImageProps = {
    [key: string]: any,
    source: any,
    size?: number
    style?: any
};

const Image = ({ style, source, size = 4, ...props }: ImageProps) => {
    style = [GetImageStyle(size), style];
    return <CustomImage source={source} {...props} style={style} />;
};

export { Image };

