import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'


function Login() {

    const inputFields = [
        {
            label: "First Name",
            name: "firstName",
            inputType: "text",
            placeholder: "E.g. John",
            
        },
        {
            label: "Last Name",
            name: "lastName",
            inputType: "text",
            placeholder: "E.g. Doe",
            
        },
        {
            label: "Email",
            name: "email",
            inputType: "email",
            placeholder: "E.g. johndoe@email.com",
           
        },
        {
            label: "Password",
            name: "password",
            inputType: "password",
            placeholder: "Enter your password",
            
        },
    ]



    return (
        <form className="w-11/12 md:w-6/12 lg:w-4/12 xl:w-3/12 mx-auto space-y-4 mt-12" >

        </form>
        )

            }

export default Login