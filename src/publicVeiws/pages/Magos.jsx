import { GridClases } from "../../components/GridClases"
import { IntroPages } from "../../components/IntroPages"
export const Magos = () => {
  return (
    <>
     <section className="personajes" id="personajes">
     <IntroPages titulo="Mago" descripcion="El Mago es un erudito de lo arcano, un estudiante dedicado que explora los misterios más profundos del universo. Desde conjuros devastadores que pueden reducir a cenizas a sus enemigos hasta hechizos sutiles que manipulan el destino, el Mago es la esencia de la magia pura.
    Características principales:

    Conocimiento ilimitado: Los Magos dedican años a estudiar grimorios y antiguas escrituras mágicas, convirtiéndose en los mejores lanzadores de conjuros arcanos.
    Fragilidad física: Aunque son poderosos en el ámbito mágico, carecen de fuerza física y dependen de su magia para la defensa.
    Variedad de hechizos: Los Magos pueden especializarse en distintas escuelas de magia, como Evocación (daño directo), Ilusión (engaño), Conjuración (invocación de criaturas) o Nigromancia (control de la muerte).
    Estilo de vida: Algunos Magos trabajan como consejeros de reyes, otros como aventureros solitarios, y unos pocos como reclusos que buscan la verdad detrás de la magia.
    Personalidad: Suelen ser inteligentes, curiosos y meticulosos, aunque la obsesión por el conocimiento puede llevarlos a la arrogancia o incluso a la locura."/>
    <GridClases category={"mago"}/>
    </section>
    </>
  )
}
