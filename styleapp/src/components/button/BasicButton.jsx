import React from 'react';
import Button from './style';

const BasicButton = ({children, color, size, variant, font, shape}) => {
  return (
    <Button color={color} size={size} variant={variant} font={font} shape={shape}>
      {children}
    </Button>
  );
};

export default BasicButton;