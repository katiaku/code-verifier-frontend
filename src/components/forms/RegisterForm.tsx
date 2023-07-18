import React from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { register } from '../../services/authService';
import { AxiosResponse } from 'axios';

const RegisterForm = () => {

    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        age: 18
    }

    const registerSchema = Yup.object().shape(
        {
            name: Yup.string()
                .min(6, 'Username must have 6 letters minimum')
                .max(12, 'Username must have 12 letters maximum')
                .required('Username is required'),
            email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
            password: Yup.string()
                .min(8, 'Password too short')
                .required('Password is required'),
            confirm: Yup.string()
                .when("password", {
                    is: (value: string) => (value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref("password")], 'Passwords must match'
                    )
                })
                .required('You must confirm your password'),
            age: Yup.number()
                .min(10, 'You must be over 10 years old')
                .required('Age is required')
        }
    );

    return (
        <div>
            <h4>Register Form</h4>
            <Formik
                initialValues = { initialValues }
                validationSchema = { registerSchema }
                onSubmit = { async(values) => {
                    register(values.name, values.email, values.password, values.age).then((response: AxiosResponse) => {
                        if(response.status === 201){
                            console.log('User registered correctly')
                            console.log(response.data)
                            alert('User registered correctly')
                        } else {
                            throw new Error('Error in registry')
                        }
                    }).catch((error) => console.error(`[REGISTER ERROR]: Something went wrong: ${error}`))
                }}
            >
                {
                    ({ values, touched, errors, isSubmitting, handleChange, handleBlur}) =>
                    (
                        <Form>
                            <label htmlFor='name'>Name</label>
                            <Field id='name' type='text' name='name' placeholder='Your name' />
                            {
                                errors.name && touched.name && (
                                    <ErrorMessage name='name' component='div'></ErrorMessage>
                                )
                            }

                            <label htmlFor='email'>Email</label>
                            <Field id='email' type='email' name='email' placeholder='example@mail.com' />
                            {
                                errors.email && touched.email && (
                                    <ErrorMessage name='email' component='div'></ErrorMessage>
                                )
                            }

                            <label htmlFor='password'>Password</label>
                            <Field id='password' type='password' name='password' placeholder='Password' />
                            {
                                errors.password && touched.password && (
                                    <ErrorMessage name='password' component='div'></ErrorMessage>
                                )
                            }

                            <label htmlFor='confirm'>Confirm Password</label>
                            <Field id='confirm' type='password' name='confirm' placeholder='Confirm your password' />
                            {
                                errors.confirm && touched.confirm && (
                                    <ErrorMessage name='confirm' component='div'></ErrorMessage>
                                )
                            }

                            <label htmlFor='age'>Age</label>
                            <Field id='age' type='number' name='age' />
                            {
                                errors.age && touched.age && (
                                    <ErrorMessage name='age' component='div'></ErrorMessage>
                                )
                            }

                            <button type='submit'>Register</button>
                            {
                                isSubmitting ? (<p>Sending data...</p>) : null
                            }
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

export default RegisterForm;