
export const Cards = ({ id, clase, fuerza, inteligencia, habilidades, category }) => {
  return (
    <>
      <article>
        <div>

        <div><img src={`/personajes/${category}.jpg`} alt="" /></div>

          <h3 className="clase" id="stats">Clase: <b>{clase}</b></h3>
          <h3 className="clase" id="stats">Fuerza: <b>{fuerza}</b></h3>
          <h3 className="clase" id="stats">Inteligencia: <b>{inteligencia}</b></h3>
          <h3 className="clase" id="stats">Habilidades: <b>{habilidades}</b></h3>
          <h3 className="clase" id="stats">Categoria: {category}</h3>

          
        </div>
      </article>
    </>
  )
}
