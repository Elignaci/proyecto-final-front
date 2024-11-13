
export const Cards = ({ id, clase, fuerza, inteligencia, habilidades, category }) => {
  return (
    <>
    <article>
      <div>Cards</div>
      <div>
          <h3 className="clase" id="stats">{clase}</h3>
          <h3 className="clase" id="stats">{fuerza}</h3>
          <h3 className="clase" id="stats">{inteligencia}</h3>
          <h3 className="clase" id="stats">{habilidades}</h3>
          
      </div>
      <div>
        <h3 className="clase" id="stats">{category}</h3>
      </div>
    </article>
    </>
  )
}
