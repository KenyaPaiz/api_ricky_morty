import { useAuth0 } from '@auth0/auth0-react'
import React, { Component } from 'react'


export const Login = () => {
    const { loginWithRedirect } = useAuth0();

    return <button className='btn btn-outline-info' onClick={() => loginWithRedirect()}>Iniciar Sesion</button>;
};
