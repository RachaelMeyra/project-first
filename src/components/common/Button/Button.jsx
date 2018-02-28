import React from 'react';
import Button from './Button.scss';

const Button = ({ children, buttonStyle, textStyle, onPress }) => {

  const { childButtonStyle, childTextStyle } = styles;

  const mergedButtonStyle = buttonStyle ? Object.assign({}, childButtonStyle, buttonStyle) : childButtonStyle;
  const mergedTextStyle = textStyle ? Object.assign({}, childTextStyle, textStyle): childTextStyle;

  return (
      <div
      className="theme__btn"
      onClick={onPress}
      style={childButtonStyle}>

        <p style={childTextStyle}>
          {children}
        </p>

      </div>
    );
};

const styles = {
  childButtonStyle:{
    borderColor: '#12A491',
    backgroundColor: '#35FFE4',
  },
  childTextStyle: {
    color: '#12A491',
  }
};

export { Button };