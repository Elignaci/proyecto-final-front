import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

export const HomePages = () => {
  const { mensaje, user } = useContext(UserContext)
  return (
    <div>
    <code><pre>{JSON.stringify(user, null, " ")}</pre></code>
    <h1>  HomePages</h1>
    <h2>{mensaje}</h2>
</div>
  )
}
