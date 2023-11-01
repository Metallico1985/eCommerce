/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from '../../API/Rule_auth'
import './Register.css'

function FormRegistro() {

    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [tipo_usuario, setTipo] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");

    const navigate = useNavigate()

    const handleMail = (e) => { setEmail(e.target.value) };
    const handlePass = (e) => { setPass(e.target.value) };
    const handleNombre = (e) => { setNombre(e.target.value) };
    const handleApellido = (e) => { setApellido(e.target.value) }
    const handleTipo = (e) => { setTipo(e.target.value) };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const credenciales = { email: email, password: password, nombre: nombre, apellido: apellido, tipo_usuario: tipo_usuario };

        await register(credenciales)
            .then(() => {
                alert("Ingreso correctamente")
                navigate("/main");
            })
            .catch((error) => {
                alert(error);
            })
    };
    return (
        <div className='flex content-center justify-center h-screen'>
        <div className='flex flex-col gap-3 text-center content-center justify-center  '>
            <form className='flex flex-col text-center gap-8 justify-center rounded shadow-lg p-20 bg-teal-400' onSubmit={handleSubmit} action="">
                <h2>Registro nuevo usuario</h2>
                <input className='rounded p-1' type="text" required placeholder="Nombre" onChange={handleNombre} maxLength='20' />
                <input className='rounded p-1' type="text" required placeholder="Apellido" onChange={handleApellido} maxLength='20' />
                <input className='rounded p-1' type="text" placeholder='Tipo usuario' onChange={handleTipo} />
                <input className='rounded p-1' type="email" required onChange={handleMail} placeholder='Email' />
                <input className='rounded p-1' type="password" required onChange={handlePass} placeholder='Password' minLength='8' />
                <button className='rounded ' type='submit'>Submit</button>
            </form>
        </div>
        </div>
    )
}

export default FormRegistro;