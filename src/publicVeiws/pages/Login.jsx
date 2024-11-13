import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import{useNavigate} from "react-router-dom"


export const Login = () => {
  const { mensaje, user, setUser, isAuthenticated, login } = useContext(UserContext)
  const navigate = useNavigate()
  const handleSubmit = (ev) => {
    ev.preventDefault()

    const nombre = ev.target.nombre.value.trim()
    const password = ev.target.password.value.trim()

  

    setUser(logeredUser)
    login()
    navigate('/admin')
}
  return (
    <>
    <div className="contenedor">
            <code><pre>{JSON.stringify(user, null, " ")}</pre></code>
            <h1 className="login" id="login">LoginPage</h1>
            <h2>{mensaje}</h2>
            <p>{isAuthenticated ? 'está autenticado' : 'no está autenticado'}</p>
            

            <form
                id='login'
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    name='nombre'
                    id='nombre'
                    placeholder='Nombre'
                />
                <input
                    type="text"
                    name='password'
                    id='password'
                    placeholder='Password'
                />
                <button type='submit'>
                    Login
                </button>
            </form>
        </div>
        </>
  )
}
