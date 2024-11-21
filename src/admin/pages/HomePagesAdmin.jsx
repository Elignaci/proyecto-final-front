import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { GridCharacters } from "../components/GridCharacters"
import { Link } from "react-router-dom"


export const HomePagesAdmin = () => {

  const { mensaje, admin } = useContext(UserContext)
  return (
    <>
    <div>
      <h1 className="titulo"> MAKEyourDnD</h1>

      <h2>{mensaje}</h2> 
      <article>
        <section>
          <h2>------------</h2>
          <Link to={`/admin/create-character`}>Crear Personaje</Link>
        </section>
          {/* <Link to={`/admin/edit-character/${_id}`}>Editar personaje</Link> */}
        <section>
          <GridCharacters />
        </section>
      </article>


    </div>
    </>
  )
}