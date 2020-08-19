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
