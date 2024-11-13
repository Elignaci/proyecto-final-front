import { Cards } from "./Cards"

export const GridClases = ({ category }) => {

  const dataFetch = [
    {
      id: 1,
      clase: "hechicero",
      fuerza: 2,
      inteligencia: 11,
      habilidades: "hechizos",
      category: "mago",
    },
    {
      id: 2,
      clase: "barbaro",
      fuerza: 20,
      inteligencia: 1,
      habilidades: "combate con espada",
      category: "guerrero",
    },
    {
      id: 3,
      clase: "paladin",
      fuerza: 12,
      inteligencia: 10,
      habilidades: "combate con mazo",
      category: "clerigo",
    },


  ]
  return (
    <>
      <section>
        <div>GridClases</div>
        <div>
          {
            dataFetch.map((personajes) =>
              <Cards key={personajes.id} {...personajes} />
            )
          }
        </div>
      </section>
    </>
  )
}
