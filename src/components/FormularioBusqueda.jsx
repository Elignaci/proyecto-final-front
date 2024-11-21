import { useEffect } from "react"
import { useForm } from "../hooks/useForm"

export const FormularioBusqueda = () => {
    const { formulario, handlerSubmit } = useForm(onNewCategory)
useEffect (() => {
    if (formulario.buscador != "") onNewCategory(formulario.buscador)
},[formulario])
  return (
    <>
    <form id="formulario" name="formulario" onSubmit={handlerSubmit}>
        <input type="text" placeholder="buscar" id="buscar" name="buscar" />
        <input type="submit" value="buscar" id="buscar" />

    </form>
</>
  )
}
