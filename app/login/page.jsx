import google from "../../public/google_logo.svg"
import logo from "../../public/skill_hunter.svg"
import claws from "../../public/claws.svg"
import Image from 'next/image'

import {InputField, PasswordField} from '../../components/account/input_fields.jsx'

export default async function Login() {
    return (
        <div>
            <div className="flex ">
                <div className="flex flex-col items-center justify-center w-1/2 h-screen">
                    
                    <div className="flex flex-col mb-10">
                        <p className="font-bold text-l">Good to see you again</p>
                        <p className="text-sm">Welcome back, please enter your details to login</p>
                    </div>

                    <form className="form">

                        <InputField text="Name"/>
                        <PasswordField text="Password"/>
                        
                        <div className="flex flex-col space-y-2">
                            <button className="h-10 text-sm font-bold text-white rounded-l bg-dark">Log in</button>
                            <button className="flex justify-center items-center h-10 rounded-l text-sm font-bold bg-light border border-[rgba(0,0,0,0.12)] gap-3">
                                    <Image
                                    src={google}
                                    alt="google"
                                    />
                                    login with Google
                            </button>
                        </div>
                        
                        <p className="mt-4 text-center text-s">Don’t have account yet? <a className="font-bold underline" href="/register">Register now</a></p> 
                    
                    </form>
                    
                    <Image
                        className="absolute bottom-0 left-0" 
                        src={claws}
                    />

                </div>

                <div className="flex items-center justify-center w-1/2 h-screen bg-gradient-to-r from-purple-500 to-pink-500">
                    <Image className="absolute" src={logo}/>
                </div>

            </div>
        </div>
    )
}