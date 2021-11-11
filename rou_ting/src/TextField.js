import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label htmlFor={field.name}></label>
      <input
       style={{width:"400px",height:"25px",marginTop:"20px"}}
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        placeholder={label}
        autoComplete="off"
      />
      <ErrorMessage style={{color:"orangered"}} component="div" name={field.name} className="error" />
    </div>
  )
}
