import { NavLink } from "react-router-dom"


export const NavBarUsers = () => {
    return (
        <ul>
         

            {/* <li>
                <NavLink to="/"
                    className={({ isActive }) => isActive ? 'menuActivo' : ''}
                >
                    <p>Home</p>
                </NavLink>
            </li> */}

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
            <li>
                <NavLink to="paladin"
                    className={({ isActive }) => isActive ? 'menuActivo' : ''}
                >
                    <p>Paladin</p>
                </NavLink>
            </li>
            <section>
            <li >
                <NavLink to="login"
                    className={({ isActive }) => isActive ? 'menuActivo' : ''}
                >
                    <p className="login">Login</p>
                </NavLink>
            </li>
            </section>
        </ul>
    )
}
