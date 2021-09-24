import React from 'react';
import {CustomBtn, GoogleBtn} from './CustomButtonStyles';
// https://stackoverflow.com/questions/7117639/input-type-submit-vs-button-tag-are-they-interchangeable

const CustomButtom = ({children, isGoogleBtn, ...otherProps}) => {

  return (
    isGoogleBtn ?
     <GoogleBtn {...otherProps}>{children} </GoogleBtn> :
     <CustomBtn {...otherProps}>{children} </CustomBtn>
  )
}

export default CustomButtom;