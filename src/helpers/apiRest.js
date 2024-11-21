/**La función apiRest es una utilidad para realizar solicitudes. Está diseñada para manejar diferentes métodos HTTP como GET, POST, PUT y DELETE.
 * 
 * @param {*} url La URL a la que se enviará la solicitud.
 * @param {*} method El método HTTP que se usará en la solicitud, como GET, POST, PUT, o DELETE.
 * @param {*} body El cuerpo de la solicitud, utilizado en métodos como POST o PUT.
 * Una variable options se define para almacenar la configuración de la solicitud, como el método HTTP, encabezados y cuerpo.

 * @returns 
 */
export const apiRest = async (url, method, body) => {

  let options = {}
/*  El método (POST o PUT).
El cuerpo, convertido en formato JSON.
Que es un encabezado Content-Type para indicar que el cuerpo es JSON */
  try {

    if (method === 'POST' || method === 'PUT') {
      options = {
        method,
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        }
      }
    }
    if (method === 'GET' || method === 'DELETE') {
      options = {
        method
      }
    }
   /*  Se utiliza fetch para realizar la solicitud HTTP con la URL y las opciones configuradas. La respuesta se almacena en la variable resp. */
    const resp = await fetch(url, options)
   

    if (resp.ok) {
      const data=await resp.json()
  
      return data
    } else {
      throw ('Error al cargar la Api')
    }
    
    /**Esta función realiza solicitudes HTTP genéricas con soporte para los métodos más comunes (GET, POST, PUT, DELETE). Permite configurar encabezados y cuerpos para métodos como POST y PUT. Si la solicitud falla, lanza un error, lo que permite manejarlo desde el código que invoca la función.
     * Si ocurre un error durante el fetch, se captura, se registra en la consola y se vuelve a lanzar para que el código que llame esta función pueda manejarlo.
     */
  } catch (error) {
    console.log(error)
    throw (error)
  }

  
}
