import { GridClases } from "../../components/GridClases"
import { IntroPages } from "../../components/IntroPages"
export const Clerigo = () => {
  return (
    <>
      <section className="personajes" id="personajes">
        <IntroPages titulo="Clerigo" descripcion="El Clérigo es un intermediario entre el reino mortal y lo divino, un servidor ferviente de una deidad que otorga poderes divinos a cambio de fe y dedicación. Protector, sanador y luchador a partes iguales, el Clérigo combina fuerza y magia divina.
        Características principales:

        Conjuros divinos: Su conexión con lo divino les permite lanzar hechizos para curar heridas, proteger a los aliados y destruir a los no-muertos.
        Armadura y armas: A diferencia de otros lanzadores de conjuros, los Clérigos pueden usar armaduras pesadas y armas contundentes, lo que los hace extremadamente versátiles en combate.
        Dominio religioso: Cada Clérigo sigue un dominio específico relacionado con su deidad (como Vida, Guerra, Conocimiento o Tempestad), lo que define sus habilidades y enfoque.
        Papel en el grupo: Suelen actuar como el soporte del equipo, sanando heridas, protegiendo con magia y enfrentándose a amenazas sobrenaturales.
        Personalidad: Los Clérigos suelen ser piadosos, compasivos y valientes, aunque algunos pueden ser fanáticos o dogmáticos, poniendo las órdenes de su deidad por encima de todo." />

        <GridClases category={"clerigo"} />
      </section>
    </>
  )
}
