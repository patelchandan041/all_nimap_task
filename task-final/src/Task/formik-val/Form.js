import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Form = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('firstname is Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required(' lastname is Required'),
      email: Yup.string().email('Invalid email address')
      .required(' email is Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  console.log(formik.values.firstName)
  return (
    <form style={{display:"flex",flexDirection:"column",width:"300px",margin:"80px 470px",backgroundColor:"grey",padding:"50px",borderRadius:"20px"}} onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
            style={{padding:"5px",borderRadius:"8px",outline:"none"}}
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div style={{color:"red"}}>{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="lastName">Last Name</label>
      <input
      style={{padding:"5px",borderRadius:"8px",outline:"none"}}
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div style={{color:"red"}}>{formik.errors.lastName}</div>
      ) : null}

      <label htmlFor="email">Email Address</label>
      <input
        style={{padding:"5px",borderRadius:"8px",outline:"none"}}
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div style={{color:"red"}}>{formik.errors.email}</div>
      ) : null}

      <button style={{width:"100px",margin:"20px 100px",padding:"7px",borderRadius:"7px"}} type="submit">Submit</button>
    </form>
  );
};

export default Form;