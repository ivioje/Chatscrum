import React from 'react';
import './sign-up.css';
import content from '../../static/index';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const schema = yup.object().shape(
        {
            fullname: yup.string().required().min(6),
            email: yup.string().required('please enter a valid email'),
            password: yup.string().required('please enter password').matches (
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                'Must contain 8 characters, one uppercase, one lowercase, one number and one special case character'
            )
        }
    );

    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: yupResolver(schema)
        }
    );

    const onSubmit = (data) => console.log(data);
    return (
        <div>
            <h1>Don't have an account?</h1>
            <h3>Sign up here!</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                {content.inputs.map((input, key) => {
                    return (
                        <div key={key}>
                            <label className='label' htmlFor={input.name}>{input.label}</label>
                            <br />
                            <input type={input.type} name={input.name} {...register(input.name, 'formRequired', { requird: true })} />
                            <br />
                            <p className='message'>{errors[input.name]?.message}</p>
                        </div>
                    )
                })}

                {/* <label htmlFor='options'>User Type</label>
                <select id='options'>
                    <option value='Developer'>Developer</option>
                    <option value='Owner'>Owner</option>
                </select> */}

                <button type='submit'> SIGN UP</button>
                <p>Have an account? <Link to='/signIn'>Sign In</Link></p>
                <p><Link to='/'>Back to Home</Link> </p>
            </form>
        </div>
    )
}

export default SignUp;