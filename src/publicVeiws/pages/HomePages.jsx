import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

export const HomePages = () => {
  const { mensaje, user } = useContext(UserContext)
  return (
    <div>
      <h1 className="titulo"> MAKE.your.DnD</h1>
      {/* <h2>{mensaje}</h2> */}
      <section>
        <div>
          <button className="buscar" >Buscar</button>
          <input type="text" placeholder="Buscar personaje" />
        </div>
      </section>
    </div>
  )
}
