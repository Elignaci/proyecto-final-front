import { NavLink } from "react-router-dom";
import { useUsers } from "../../hooks/useUsers";
import './navBar.css'
import { NavBarAdmin } from "./NavBarAdmin";
import { NavBarUsers } from "./NavBarUsers";

export const NavBar = () => {
    const { isAuthenticated } = useUsers()
    return (
        <>
            {
                isAuthenticated
                    ?
                    <NavBarAdmin />
                    :
                    <NavBarUsers />
            }
       
        </>

    )
}


NavLink