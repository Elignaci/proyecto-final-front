import { GridClases } from "../../components/GridClases"
import { IntroPages } from "../../components/IntroPages"
export const Paladin = () => {
  return (
    <>
      <section className="personajes" id="personajes">
        <IntroPages titulo="Paladin" descripcion="El Paladín es un guerrero sagrado, un campeón de la justicia, la virtud y la fe. Guiado por un juramento sagrado, el Paladín combina una poderosa fuerza física con la magia divina para proteger a los inocentes, destruir el mal y cumplir la voluntad de su deidad o ideales.
        Características principales:
        Juramentos sagrados: Cada Paladín jura defender un ideal o causa. Estos juramentos (como Devoción, Venganza o Conquista) definen su propósito y le otorgan habilidades específicas.
        Armadura pesada: Protegidos por placas relucientes, los Paladines son casi impenetrables, capaces de soportar el embate de los enemigos más peligrosos.
        Magia divina: Gracias a su conexión con lo sagrado, pueden lanzar conjuros como Curar heridas, Escudo de fe y Zona de verdad. Sus hechizos se centran en la protección, la curación y la lucha contra el mal.
        Castigo divino: Una de las habilidades más icónicas del Paladín, este poder permite canalizar energía divina para infligir daño adicional devastador a sus enemigos, especialmente a criaturas malignas como no-muertos y demonios.
        Aura protectora: Los Paladines emiten un aura de coraje y protección que mejora a sus aliados cercanos, ayudándolos a resistir efectos dañinos."/>
        <GridClases category={"paladin"} />

      </section>

    </>
  )
}
