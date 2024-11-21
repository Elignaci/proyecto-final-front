import { useEffect, useState } from "react"
import { apiRest } from "../helpers/apiRest"
/**useFetch
 * @param {useFetch} param hook se utiliza para realizar solicitudes a la api y gestionar el estado relacionado con la carga, los datos y los errores.
 * @param {*} url La URL a la que se realizará la solicitud (por defecto, la URL proporcionada por el parámetro).
 * @param {*} method El método HTTP que se utilizará (por defecto "GET").
 * @param {*} body El cuerpo de la solicitud (por defecto un objeto vacío {}).
 */
export const useFetch = (url, method="GET", body={} ) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsloading] = useState(true)

/**data: Almacena los datos que se obtienen de la API.
error: Almacena cualquier error que ocurra durante la solicitud.
isLoading: Indica si la solicitud está en proceso. Inicialmente, está en true, lo que significa que los datos están siendo cargados.

 * @param {*} customUrl Son los parámetros que la función usa para hacer la solicitud. Estos pueden ser personalizados si se proporcionan valores diferentes cuando se llama a getData.
 * @param {*} customMethod 
 * @param {*} customBody 
 * @param {useEffect} param Se ejecuta una sola vez después de que el componente se monta (cuando se carga la página o el componente).
Llama a getData() para hacer la solicitud a la URL especificada cuando el hook se usa.
 */
    const getData = async (customUrl=url, customMethod=method, customBody=body ) => {
        try {
            const resp = await apiRest(customUrl, customMethod, customBody)
            setData(resp)
            setIsloading(false)
            setError(false)
        } catch (error) {
            console.log(error)
            setError(error)
           
        }
    }
    useEffect(() => {
        getData()
    }, [])

/**El return nos devuelve estos valores:
 * data: Los datos obtenidos de la solicitud.
error: El error (si ocurre).
isLoading: El estado de carga (si la solicitud está en curso).
getData: La función que se puede utilizar para hacer nuevas solicitudes.
 * 
 */
    return {
        data,
        error,
        isLoading,
        getData
    }
  
}
