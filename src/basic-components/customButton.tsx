/**
* Name: Custom Button component
* Description: Used to render a Custom Button on the screen
* https://callstack.github.io/react-native-paper/button.html
*
*
*   <Button
        icon="camera"
        mode="contained" // text | outlined | contained
        onPress={() => console.log('Pressed')}
    >
        Press me
    </Button>

*/

import * as React from 'react';
import { Button } from 'react-native-paper';

const CustomButton = (props) => {
    const { style = {}, mode = 'contained', uppercase = false, ...prop } = props;

    const buttonStyle = { elevation: 0, ...style };
    return (
        <Button
            uppercase={uppercase}
            style={buttonStyle}
            mode={mode}
            {...prop}
        >
            {props.children}
        </Button>
    );
};

export { CustomButton as Button };

// import React from 'react';
// import { Text, TouchableOpacity } from '../basic-components';

// function CustomButton(props) {
//     const { containerStyle = {}, textStyle = {}, disabled } = props;


//     return (
//         <TouchableOpacity
//             {...props}
//             style={containerStyle}
//         >
//             <Text
//                 style={textStyle}
//             >
//                 {props.children}
//             </Text>
//         </TouchableOpacity>
//     )
// }
