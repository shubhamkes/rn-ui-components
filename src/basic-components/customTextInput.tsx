/**   
 *  <TextInput
        type='outlined' // can be outlined or flat
        onChangeText={(val) => setText(val)}
        label="Hey"
    />
 * 
*/
import React, { useContext } from 'react';
import { TextField } from '@ubaids/react-native-material-textfield';
import { ThemeContext } from 'rn-themed-tailwind';

const CustomTextInput = props => {
  const { getColor } = useContext(ThemeContext);

  const labelOffset = {
    x1: -45,
    y1: -5
  };

  return (
    <TextField
      {...props}
      labelOffset={labelOffset}
      disabledLineWidth={2}
      labelFontSize={14}
      lineWidth={1}
      tintColor={getColor('text-onSecondaryColor')}
      lineType={'solid'}
      disabledLineType={'solid'}
    />
  );
};

export { CustomTextInput as TextInput };

// type INPUT_PARAMS = {
//     style?: any,
//     // ts throws error on passing following types.
//     // @todo to be updated with proper types
//     // "props": { label?: string, value?: unknown, onChangeText?: Function }
//     label?: string, value?: unknown, onChangeText?: Function
//     props?: any
// }

// const TEXT_STYLE = {
//     backgroundColor: 'transparent'
// }

// const CustomTextInput = (props) => {
//     // const STLYES = props.style;
//     let style = TEXT_STYLE;

//     if (props.style) {
//         style = { ...TEXT_STYLE, ...props.style, };
//     }

//     let type = 'flat';
//     if (props.type) {
//         type = props.type;
//     }

//     return (
//         <TextInput
//             {...props}
//             type={type}
//             style={style}
//         />
//     );

// /**
// * Name: Custom Text Input component
// * Description: Used to render textinput on the screen
// */
// import React from 'react';
// import { TextInput } from 'react-native';
// import { View } from './customView';
// import { Image } from './customImage';
// import { Text } from './customText';

// import { THEME } from '../Constants/theme.constants';
// import { AccessNestedObject } from '../Utils/common.utils';
// import { isReactComponent } from '../Utils/platform.utils';

// /**
//  * @class CustomTextInput
//  * @extends {React.Component}
//  * @param {object} TextInputStyleObject - it provides TextInput style
//  * Custom TextInput component; to be used in place of TextInput component. It takes care of absolute values
//  * assigned to it and converts them into relative size according to the screen size of the device
//  */
// function CustomTextInput(props) {
//     const {
//         theme,
//         containerStyle = {},
//         textInputStyle = {},
//         leftContainerStyle = {},
//         rightContainerStyle = {},
//         leftComponentStyle = {},
//         leftComponent,
//         rightComponentStyle = {},
//         rightComponent,
//         labelContainerStyle = {},
//         labelStyle = {},
//         label = ''
//     } = props;

//     const themeWholeStyle = AccessNestedObject(THEME, ['TextInput', theme], {});
//     const themeContainerStyle = AccessNestedObject(themeWholeStyle, 'containerStyle', {});
//     const themeTextInputStyle = AccessNestedObject(themeWholeStyle, 'textInputStyle', {});
//     const themeLeftContainerStyle = AccessNestedObject(themeWholeStyle, 'leftContainerStyle', {});
//     const themeRightContainerStyle = AccessNestedObject(themeWholeStyle, 'rightContainerStyle', {});
//     const themeLeftComponentStyle = AccessNestedObject(themeWholeStyle, 'leftComponentStyle', {});
//     const themeRightComponentStyle = AccessNestedObject(themeWholeStyle, 'rightComponentStyle', {});
//     const themeLabelContainerStyle = AccessNestedObject(themeWholeStyle, 'labelContainerStyle', {});
//     const themeLabelStyle = AccessNestedObject(themeWholeStyle, 'labelStyle', {});

//     const containerStyleObject = Object.assign(themeContainerStyle, containerStyle);
//     const textInputStyleObject = Object.assign(themeTextInputStyle, textInputStyle);
//     const leftContainerStyleObject = Object.assign(themeLeftContainerStyle, leftContainerStyle);
//     const rightContainerStyleObject = Object.assign(themeRightContainerStyle, rightContainerStyle);
//     const leftComponentStyleObject = Object.assign(themeLeftComponentStyle, leftComponentStyle);
//     const rightComponentStyleObject = Object.assign(themeRightComponentStyle, rightComponentStyle);
//     const labelContainerStyleObject = Object.assign(themeLabelContainerStyle, labelContainerStyle);
//     const labelStyleObject = Object.assign(themeLabelStyle, labelStyle);

//     let RenderLeftComponent = null;
//     let RenderRightComponent = null;

//     if (isReactComponent(leftComponent)) {
//         RenderLeftComponent = leftComponent;
//     } else {
//         RenderLeftComponent = () => <Image style={leftComponentStyleObject} source={leftComponent} />
//     }

//     if (isReactComponent(rightComponent)) {
//         RenderRightComponent = rightComponent;
//     } else {
//         RenderRightComponent = () => <Image style={rightComponentStyleObject} source={rightComponent} />
//     }

//     return (
//         <View style={containerStyleObject} >
//             {
//                 label ?
//                     <View style={labelContainerStyleObject} >
//                         <Text style={labelStyleObject} >{label}</Text>
//                     </View>
//                     : null
//             }
//             <View style={{ flexDirection: 'row' }} >
//                 <View style={leftContainerStyleObject} >
//                     {RenderLeftComponent()}
//                 </View>
//                 <TextInput
//                     underlineColorAndroid={'transparent'}
//                     {...props}
//                     style={textInputStyleObject}
//                 />
//                 <View style={rightContainerStyleObject} >
//                     {RenderRightComponent()}
//                 </View>
//             </View>
//         </View>
//     )
// }
