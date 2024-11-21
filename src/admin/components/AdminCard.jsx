import { Link } from "react-router-dom"
/**AdminCard es un componente funcional que muestra los datos de un personaje, como su clase, fuerza, inteligencia, habilidades y categoría.
 * -Editar personaje: Redirige a la ruta /admin/edit-character/:id.
   -Eliminar personaje: Redirige a la ruta /admin/eliminar.
 * 
 * @param {*} param0 
 * @returns Link en una herramienta de react para incorporar un enlace a otra ruta del la aplicacion ya sea una pagina o componente
 */
export const AdminCard = ({_id, clase, fuerza, inteligencia, habilidades, categoria }) => {
  return (
    <article className="edit-character">
        <h3 className="clase" id="stats">Clase: <b>{clase}</b></h3>
          <h3 className="clase" id="stats">Fuerza: <b>{fuerza}</b></h3>
          <h3 className="clase" id="stats">Inteligencia: <b>{inteligencia}</b></h3>
          <h3 className="clase" id="stats">Habilidades: <b>{habilidades}</b></h3>
          <h3 className="clase" id="stats">Categoria: <b>{categoria}</b></h3>
           <Link to={`/admin/edit-character/${_id}`}>Editar</Link>
           <section>
           <Link to={`/admin/eliminar/${_id}`}>Eliminar</Link>
           </section> 
    </article>
  )
}
