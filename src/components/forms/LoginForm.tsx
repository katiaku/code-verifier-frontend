import React from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { login } from '../../services/authService';
import { AxiosResponse } from 'axios';

// Define validation schema with Yup
const loginSchema = Yup.object().shape(
    {
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().required('Password is required')
    }
);

const LoginForm = () => {

    // Define initial credentials
    const initialCredentials = {
        email: '',
        password: ''
    }

    return (
        <div>
            <h4>Login Form</h4>
            <Formik
                initialValues = { initialCredentials }
                validationSchema = { loginSchema }
                onSubmit = { async(values) => {
                    login(values.email, values.password).then((response: AxiosResponse) => {
                        if(response.status == 200){
                            if(response.data.token){
                                sessionStorage.setItem('sessionJWTToken', response.data.token)
                            } else {
                                throw new Error('Error generating login token')
                            }
                        } else {
                            throw new Error('Invalid credentials')
                        }
                    }).catch((error) => console.error(`[LOGIN ERROR]: Something went wrong: ${error}`))
                }}
            >
                {
                    ({ values, touched, errors, isSubmitting, handleChange, handleBlur}) =>
                    (
                        <Form>
                            <label htmlFor='email'>Email</label>
                            <Field id='email' type='email' name='email' placeholder='example@mail.com' />
                            {
                                errors.email && touched.email && (
                                    <ErrorMessage name='email' component='div'></ErrorMessage>
                                )
                            }

                            <label htmlFor='password'>Password</label>
                            <Field id='password' type='password' name='password' placeholder='example' />
                            {
                                errors.password && touched.password && (
                                    <ErrorMessage name='password' component='div'></ErrorMessage>
                                )
                            }

                            <button type='submit'>Login</button>
                            {
                                isSubmitting ? (<p>Checking credentials...</p>) : null
                            }
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

export default LoginForm;
