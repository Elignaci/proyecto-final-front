import { GridClases } from "../../components/GridClases"
import { IntroPages } from "../../components/IntroPages"
export const Guerrero = () => {
  return (
    <>
      <section className="personajes" id="personajes">
        <IntroPages titulo="Guerrero" descripcion="El Guerrero es el pilar del combate físico, un experto en la guerra y la estrategia. Desde soldados entrenados en las filas de un ejército hasta mercenarios que luchan por oro o gloria, los Guerreros tienen una versatilidad única en el campo de batalla.
        Conocimiento ilimitado: Los Magos dedican años a estudiar grimorios y antiguas escrituras mágicas, convirtiéndose en los mejores lanzadores de conjuros arcanos.
        Fragilidad física: Aunque son poderosos en el ámbito mágico, carecen de fuerza física y dependen de su magia para la defensa.
        Variedad de hechizos: Los Magos pueden especializarse en distintas escuelas de magia, como Evocación (daño directo), Ilusión (engaño), Conjuración (invocación de criaturas) o Nigromancia (control de la muerte).
        Estilo de vida: Algunos Magos trabajan como consejeros de reyes, otros como aventureros solitarios, y unos pocos como reclusos que buscan la verdad detrás de la magia.
        Personalidad: Suelen ser inteligentes, curiosos y meticulosos, aunque la obsesión por el conocimiento puede llevarlos a la arrogancia o incluso a la locura."/>
        <GridClases category={"guerrero"} />

      </section>

    </>
  )
}
