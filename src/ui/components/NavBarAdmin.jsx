import { NavLink } from "react-router-dom"

export const NavBarAdmin = () => {
    return (
        <>
            <li>
                <NavLink
                    to="admin"
                    className={({ isActive }) => isActive ? 'menuActivo' : ''}
                >
                    ADMIN
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="logout"
                    className={({ isActive }) => isActive ? 'menuActivo' : ''}
                >
                    logout
                </NavLink>
            </li>
        </>
    )
}
