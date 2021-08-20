import React from 'react';
import '../../styles/FormInput.scss';

const FormInput = ({handleChange, label, ...otherProps}) => {
  return(
    <div className="group">
      <input onChange={handleChange} className='form-input'
      {...otherProps}/>
      {(
        label? 
        <label className={`${otherProps.value.length}?'move-up':'' form-input-label`}>
          {label}
        </label>
        :null
      )}
    </div>
  )
}

export default FormInput;