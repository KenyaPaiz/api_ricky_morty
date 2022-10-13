import React, { Component } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export const Logout = () => {
        const { logout } = useAuth0();
        return (
            <button className="btn btn-danger mr-sm-2 boton" onClick={() => logout({ returnTo: window.location.origin })}>
                Cerrar Sesion
            </button>
        );
};
