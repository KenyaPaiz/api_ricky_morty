import { useAuth0 } from "@auth0/auth0-react";
import { Logout } from './Logout';
import React from "react";

export const Navbar = () => {
        const { user, isAuthenticated, isLoading } = useAuth0();
        if (isLoading) {
            return <div> Loading... </div>;
        }
    
        return (
            isAuthenticated && (
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#"><b>{user.name}</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Principal</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0 contenedor-boton">
                            <Logout></Logout>
                        </form>
                    </div>
                </nav>
            )
        );
};
