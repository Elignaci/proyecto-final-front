import { createContext, useState } from "react"

/**UserContext sirve para compartir datos y métodos relacionados con la autenticación y el usuario en una aplicación.
 */
export const UserContext = createContext()
/**
 * 
 * @param {UserContext} param0 
Crea un contexto de React, que permite compartir datos entre componentes sin necesidad de pasar props manualmente por cada nivel del árbol de componentes.
@param {UserProvider} param1 Es un componente que envuelve a otros componentes (children) para que estos puedan acceder al contexto.
@param {user, setUser} param2 Almacena la información del usuario, inicializado como un objeto vacío {}.
setUser es la función para actualizar este estado.
@param {isAuthenticated}param3
Representa si el usuario está autenticado o no, inicializado como false.
setIsAuthenticated es la función para cambiar este valor.
 * @returns 
 */
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const login = () => setIsAuthenticated(true)
    const logout = () => {
        setIsAuthenticated(false)
        setUser({})
    }
    return (
        /**
         * El contexto proporciona los siguientes valores a los componentes hijos los cuales son:
        mensaje: Una cadena de texto fija que puede ser utilizada como referencia o para propósitos de depuración.
        user: La información actual del usuario.
        setUser: Una función para actualizar el estado del usuario.
        isAuthenticated: El estado de autenticación (true o false).
        login y logout: Métodos para cambiar el estado de autenticación.
         */
        <UserContext.Provider value={{
            mensaje: 'Acceso a web',
            user,
            setUser,
            isAuthenticated,
            login,
            logout
        }}>
            {children}

        </UserContext.Provider>
    )



}

