import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

export const ProtectedPages = () => {
  const {logout} = useContext(UserContext)
  const handlerClick = () =>{
    logout()
  }
  return (
    <div>
      <h1>
        Rutas protegidas
      </h1>
      <button onClick={handlerClick}>logout</button>
    </div>
  )
}
