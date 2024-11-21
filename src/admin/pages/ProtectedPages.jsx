import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

export const ProtectedPages = () => {
  const {logout} = useContext(UserContext)
  const handlerClick = () =>{
    logout()
  }
  return (
    <div>
      <button onClick={handlerClick}>logout</button>
    </div>
  )
}
