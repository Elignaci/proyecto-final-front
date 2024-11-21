import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { AdminCard } from './AdminCard'
/**GridCharacters es un componente que muestra un grid/listado de personajes    obtenidos desde una API REST.
 * Utiliza un hook personalizado, useFetch, para realizar la solicitud HTTP y manejar los estados de carga, éxito y error.
 * useFetch(url): Un hook personalizado que acepta una URL y devuelve un objeto con las propiedades 
 * data: La respuesta procesada de la API.En ella guardo los datos objData, error, isloading para que useFetch realice una solicitud y manejar los estados de carga, éxito y error.
 * error: Mensaje de error si la solicitud falla.
 * isLoading: Estado booleano que indica si la solicitud está en progreso.
 * Cada personaje se renderiza como un componente AdminCard.
 * @returns 
 */
export const GridCharacters = () => {

  const url = `${import.meta.env.VITE_URL_BASE}/api/v1/admin/characters`
   const { data: objData, error, isLoading } = useFetch(url)
   const { data, ok, msg } = objData
   console.log(data, error, isLoading, 'en gridCharacters')
  return (
     <>
    
      <div>

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
                data.map((char)=>(
                    <AdminCard key={char._id} {...char}/>
                ))
            )
        }
               
      </div>
      
    </> 
  )
}
