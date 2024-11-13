import { NavLink } from "react-router-dom"


export const NavBarUsers = () => {
    return (
        <ul>
            <li>
                <NavLink to="login"
                    className={({ isActive }) => isActive ? 'menuActivo' : ''}
                >
                    <p>Login</p>
                </NavLink>
            </li>

            <li>
                <NavLink to="/"
                    className={({ isActive }) => isActive ? 'menuActivo' : ''}
                >
                    <p>Menu principal</p>
                </NavLink>
            </li>

            <li>
                <NavLink to="clerigo"
                    className={({ isActive }) => isActive ? 'menuActivo' : ''}
                >
                    <p>Clerigo</p>
                </NavLink>
            </li>
            <li>
                <NavLink to="magos"
                    className={({ isActive }) => isActive ? 'menuActivo' : ''}
                >
                    <p>Mago</p>
                </NavLink>
            </li>
            <li>
                <NavLink to="guerrero"
                    className={({ isActive }) => isActive ? 'menuActivo' : ''}
                >
                    <p>Guerrero</p>
                </NavLink>
            </li>


        </ul>
    )
}
