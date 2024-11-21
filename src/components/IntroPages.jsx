/**
 * 
 * @param {IntroPages} param se encarga de dividir las carta de cada personaje por su descripcion y titulo
 * @returns 
 */
export const IntroPages = ({titulo="tituloSeccion",descripcion="esta es la descripcion por argumento"}) => {
  
  return (
    <>
    <h1 className="tituloPage">{titulo}</h1>
    <p className="parrafoPage">{descripcion}</p>
    </>
  )
}
