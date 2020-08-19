/**
 * Progress Button
 * @author Umang Maurya
 *  e.g.
 * <ProgressButton type="primary" disabled={false} onPress={(next)=>savePayment(next)}
 */
import React, { useContext } from 'react';

import AwesomeButtonBlue from '@umangmaurya/react-native-really-awesome-button/src/themes/blue';
import { ThemeContext } from 'rn-themed-tailwind';

export const ProgressButton = ({ ...props }) => {
  const { type = 'primary', onPress, children, disabled = false } = props;

  const { getColor, getStyle } = useContext(ThemeContext);

  // Default Props
  const commonStyleProps = {
    ...getStyle('rounded-lg'),
    progress: true,
    raiseLevel: 0,
    width: '100%'
  };

  const primaryEnabled = {
    backgroundColor: getColor('primaryColor-500'),
    backgroundActive: getColor('primaryColor-500'),
    textColor: getColor('whiteColor')
  };

  const primaryDisabled = {
    backgroundColor: getColor('grayColor-200'),
    backgroundActive: getColor('grayColor-200'),
    textColor: getColor('grayColor-700')
  };

  const secondaryEnabled = {
    backgroundColor: getColor('whiteColor'),
    backgroundActive: getColor('whiteColor'),
    textColor: getColor('primaryColor-500'),
    boderWidth: 2,
    borderColor: getColor('primaryColor-500')
  };

  let buttonTheme = {};

  switch (type) {
    case 'primary':
      buttonTheme = disabled ? primaryDisabled : primaryEnabled;
      break;
    case 'secondary':
      buttonTheme = disabled ? primaryDisabled : secondaryEnabled;
      break;
  }

  return (
    <AwesomeButtonBlue
      {...commonStyleProps}
      type={type}
      disabled={disabled}
      {...buttonTheme}
      onPress={next => onPress(next)}
    >
      {children}
    </AwesomeButtonBlue>
  );
};
