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
    let mode = 'contained';
    if (props.mode) {
        mode = props.mode;
    }

    return (
        <Button
            {...props}
            mode={mode}
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
