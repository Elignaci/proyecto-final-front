import {  useNavigate, useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import { useState } from "react";
import { serializeForm } from "../../helpers/serializeForm";

/**useNavigate: Proporciona una función para redirigir al usuario a otra ruta en la aplicación.
useParams: Obtiene los parámetros dinámicos de la URL. Aquí, se extrae el parámetro id, que probablemente corresponda al identificador único del recurso que se está editando.
setFormulario: Permite actualizar los valores del estado.
url: Construye la URL del recurso que se va a editar, utilizando el id extraído de los parámetros.
 * 
 * @returns 
 */
export const EditProjectAdmin = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [formulario, setFormulario] = useState({
        clase: "",
        fuerza: "",
        inteligencia: "",
        habilidades: "",
        categoria: "",
        foto: "",
    })
/**useFetch(url) contiene el enclace de url que conectara con la api del back.En ella se realizara modificaciones de los sigienetes atributos.
 * 
data: Contiene la información actual del recurso obtenido desde la API.

error: Muestra cualquier error que ocurra durante la solicitud.

isLoading: Indica si la solicitud está en progreso(se encargara de cragar la pagina y comprobar que esta todo bien).

getData: Es una función para realizar solicitudes HTTP (en este caso, PUT).
ev.preventDefault():Esto evita que el formulario recargue la página al enviarse.
 * 
 */

    const url = `${import.meta.env.VITE_URL_BASE}/api/v1/admin/characters/${id}`;
    const { data, error, isLoading, getData } = useFetch(url)
    
    const handleSubmit = async (ev) => {
        ev.preventDefault();
      
        const formData=serializeForm(ev.target)
        console.log(formData)
        try {
            const url = `${import.meta.env.VITE_URL_BASE}/api/v1/admin/characters/${id}`;
           
            const resp = await getData(url, 'PUT', formData);
          if(!isLoading){
             navigate('/admin');
          }
         
          //  if(resp.ok){
          //   console.log(resp, 'personaje creado');
          //   
          // } else {
          //   console.log('Error al crear el personaje');
          // } 
        } catch (error) {
          console.log(error)
        }
        
      }
    return (
        <>
    <section>      
        {
           error 
            ?
            <p>{error}</p>
             :
            (
               isLoading
                ?
               <p>Cargando pagina</p>
               :
               <form onSubmit={handleSubmit}>

                    <input className="botonedit"
                        type="text"
                        name="clase"
                        placeholder="Clase"
                        // onChange={handlerChange}
                        defaultValue={data.findCharacter.clase}
                    />
                    Clase
                    <input className="botonedit"
                        type="number"
                        name="fuerza"
                        placeholder="Fuerza"
                        // onChange={handlerChange}
                        defaultValue={data.findCharacter.fuerza}
                    />
                    Fuerza
                    <input className="botonedit"
                        type="number"
                        name="inteligencia"
                        placeholder="Inteligencia"
                        // onChange={handlerChange}
                        defaultValue={data.findCharacter.inteligencia}
                    />
                    Inteligencia
                    <input className="botonedit"
                        type="text"
                        name="habilidades"
                        placeholder="Habilidades"
                        // onChange={handlerChange}
                        defaultValue={data.findCharacter.habilidades}
                    />
                    Habilidades
                    <input className="botonedit"
                        type="text"
                        name="categoria"
                        placeholder="Categoria"
                        // onChange={handlerChange}
                        defaultValue={data.findCharacter.categoria}
                    />
                    <input className="botonedit"
                        type="text"
                        name="foto"
                        placeholder="foto"
                        defaultValue='url de la foto'
                        // onChange={handlerChange}
                    />foto

                    {/*  Aqui se muestra el contenido de data en un formato JSON . Esto ayuda a depurar el estado en tiempo real y visualizar el objeto completo del personaje de D&D. */}
                    <button className="buttonEdit"type="submit">Editar</button>
                    {/* <pre>{JSON.stringify(data, null, "")}</pre> */}
                </form>
            )
        }
    
    </section>
        </>
    )
}
