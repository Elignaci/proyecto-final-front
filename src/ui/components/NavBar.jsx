import { NavLink } from "react-router-dom";
import './navBar.css'

export const NavBar = () =>{
    return (
<ul>
    <li>
    <NavLink to="/"
    className={({ isActive }) => isActive ? 'menuActivo' : ''}
            >
                Home
    </NavLink>
    </li>
    <li>
    <NavLink to="clerigo"
    className={({ isActive }) => isActive ? 'menuActivo' : ''}
            >
                Clerigo
    </NavLink>
    </li>
    <li>
    <NavLink to="mago"
    className={({ isActive }) => isActive ? 'menuActivo' : ''}
            >
                Mago
    </NavLink>
    </li>
    <li>
    <NavLink to="guerrero"
    className={({ isActive }) => isActive ? 'menuActivo' : ''}
            >
                Guerrero
    </NavLink>
    </li>
    
    <NavLink to="login"
      className={({ isActive }) => isActive ? 'menuActivo' : ''}
            >
                Login
    </NavLink>
</ul>
    )
}


NavLink