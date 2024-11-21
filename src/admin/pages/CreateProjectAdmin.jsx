
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch"
import { serializeForm } from "../../helpers/serializeForm";

/** useNavigate: Es un hook proporcionado por react-router-dom que se utiliza para redirigir al usuario a una ruta diferente dentro de la aplicación.
getData: Es una función proveniente de un hook personalizado useFetch.
 *  
 */
export const CreateProjectAdmin = () => {
const navigate = useNavigate();
const {getData} = useFetch();
const handleSubmit = async (ev) => {
  ev.preventDefault();
/**
 * handleSubmit funcion de useFetch que se ejecuta cuando el formulario asociado a este componente es enviado.
 * serializeForm es una funcion exportada (del mismo nombre ) se encarga de convertir en un objeto JavaScript.
 * formData funcion  donde se guardara serializeForm que ev.target se encarga de activar el evento del formulario
 * URL el enlace para conectarse con la api que se encarga de crear nuevos categorias de personajes.
 * ev.preventDefault():Esto evita que el formulario recargue la página al enviarse.
 */
 

  const formData=serializeForm(ev.target)
  try {
    const url = `${import.meta.env.VITE_URL_BASE}/api/v1/admin/characters`;
    const resp = await getData(url, 'POST', formData);
    //  if(resp.ok){
    //   console.log(resp, 'Evento creado');
    //   navigate('/allevents');
    // } else {
    //   console.log('Error al crear el evento');
    // } 
  } catch (error) {
  }
  
}


  return (
    <>
      <section className="createcharacter">
        <h2>Crear Nuevo Personaje</h2>
        <form className="submit" onSubmit={handleSubmit }>

          <input className="botoncrear"
            type="text"
            name="clase"
            placeholder="Clase"
           
          />Clase

          <input className="botoncrear"
            type="number"
            name="fuerza"
            placeholder="Fuerza"
           
          />Fuerza

          <input className="botoncrear"
            type="number"
            name="inteligencia"
            placeholder="Inteligencia"
           
          />Inteligencia

          <input className="botoncrear"
            type="text"
            name="habilidades"
            placeholder="Habilidades"
           
          />Habilidades

          {/* <input
            type="text"
            name="categoria"
            placeholder="Categoria"
           
          />Categoria */}

           {/*  <input
            type="text"
            name="foto"
            placeholder="foto"
           
          />foto */}

          {/* Botón de creación de personaje */}
          <button className="buttonCreate" type="submit">Crear Personaje</button>

        </form>
        
      </section>
    </>
  )
}
