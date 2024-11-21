
import { Cards } from "./Cards"
/**Map Crea un nuevo array con los resultados de la llamada a una función proporcionada en cada elemento del array.
 * 
 * @param {*} param0 
 * @returns 
 */
export const GridClases = ({ category }) => {
/* const url = `${import.meta.env.VITE_URL_BASE}/posts`
const {data, error, isLoading} = useFetch(url)
const url = `${import.meta.env.VITE_URL_BASE}/api/v1/user/characters`
  const { data: objData, error, isLoading } = useFetch(url) */
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
      clase: "luchador",
      fuerza: 12,
      inteligencia: 10,
      habilidades: "combate con mazo",
      category: "clerigo"
    },
  ]
  const filterData = dataFetch.filter(personaje => personaje.category === category);
/**
 * FilterData es una funcion que se encarga de filtrar los datos de personaje si este esxiste. Si filterData tiene elementos, los renderiza mediante map.
Si no tiene elementos (ejemplo: no hay personajes de esa categoría), muestra un mensaje indicando que no se encontraron resultados:
 */
  return (
    <>
      <section>
        <h1>Ficha del Personaje</h1>
        <h2 className="gridclases"> Características del personaje </h2>
        <div className="griddatos">
          {filterData.length > 0 ? (
            filterData.map(personajes => (
              <Cards key={personajes.id} {...personajes} />
            ))
          ) : (
            <p>No se encontraron personajes en la categoría "{category}"</p>
          )}
        </div>
      </section>
    </>
  );
};