/* eslint-disable no-unused-vars */

import React from 'react'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { login } from '../../API/Rule_auth'
// import './Login.css'

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");

    const navigate = useNavigate()

    const handleMail = (e) => { setEmail(e.target.value) }
    const handlePass = (e) => { setPass(e.target.value) }


    const handleSubmit = async (e) => {

        e.preventDefault();

        const credenciales = { email: email, password: password };
        await login(credenciales)
            .then(() => {
                alert("Logueado correctamente")

                navigate("/main");
            })
            .catch((error) => {
                alert(error);
            })
    };

    return (
        <div className='flex content-center justify-center h-screen '>
            <div className='flex flex-col gap-3 text-center content-center justify-center '>
                <form className='flex flex-col text-center gap-8 justify-center rounded shadow-lg p-20 bg-teal-400' onSubmit={handleSubmit} action="">
                    <h2>Iniciar sesión</h2>
                    <input className='rounded p-1' type="email" required onChange={handleMail} placeholder='Email' maxLength='25' />
                    <input className='rounded p-1' type="password" required onChange={handlePass} placeholder='Password' minLength="8" />
                    <button className='rounded ' type='submit'>Submit</button>
                </form>
                <div>
                    <h3>No estas registrado?</h3>
                    <Link to={'/registro'}>Registrate!</Link>
                </div>
            </div>
        </div>
    )
}

export default Login