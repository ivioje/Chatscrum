import React from 'react';
import './sign-in.css';
import content from '../../static/index'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';

const SignIn = () => {

    const schema = yup.object().shape(
        {
            email: yup.string().required().min(6),
            password: yup.string().required('please enter password').matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                'Must contain 8 characters, one uppercase, one lowercase, one number and one special case character'
            ),
            text: yup.string().required('please enter a project name')
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
            <h1>Have an account already?</h1>
            <h3>Sign in here!</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
                {content.otherInputs.map((input, key) => {
                    return (
                        <div key={key}>
                            <label htmlFor={input.name}>{input.label}</label>
                            <br />
                            <input type={input.type} name={input.name} {...register(input.name, 'formRequired', { requird: true })} />
                            <p className='message'>{errors[input.name]?.message}</p>
                        </div>
                    )
                })}

                <Link to='/scrumboard'><button>SIGN IN</button> </Link>
                <p>Don't have an account? <Link to='/signUp'>Sign up</Link></p>
                <Link to='/'>Back to Home</Link>
            </form>
        </div>
    )
}

export default SignIn