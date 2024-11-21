import { useState } from "react"
/**useForm es una funcion que se utiliza en un hooks para facilitar la gestión de formularios en React. Este hook maneja el estado de un formulario, la serialización de datos y el control de los cambios y envíos.
 * 
 * @returns 
 */
export const useForm = () => {
/**
Inicialmente se establece como una cadena vacía "", pero luego se actualizará con los valores del formulario.
setFormulario: Es la función que se usará para actualizar el estado de formulario.

@param {handlerSubmint} param Se llama cuando el formulario se envía.
ev.preventDefault(): Previene el comportamiento por defecto del formulario (que normalmente recargaría la página).
serializeForm(ev.target): Serializa los datos del formulario.
setFormulario(data): Actualiza el estado formulario con los datos del formulario serializado.

@param {handlerChange} param Se llama cada vez que el valor de un campo del formulario cambia (por ejemplo, cuando un usuario escribe en un campo de entrada).
Utiliza destructuración para obtener el name y value del campo que cambió.
setFormulario: Actualiza el estado formulario con el nuevo valor. La propiedad [name]: value asegura que el estado se actualice correctamente para el campo correspondiente en el formulario.
...formulario: Mantiene los valores previos del formulario, y solo actualiza el campo que cambió.(lo que estás haciendo es "desempaquetar" las propiedades de un objeto para copiarlas en otro objeto.)
 */
    const [formulario, setFormulario] = useState("")

    const serializeForm = (formulario) => {
        const formData = new FormData(formulario)

        const data = {}

        for (let [name, value] of formData) {
            data[name] = value
        }

        return data

    }
    const handlerSubmit = (ev) => {
        ev.preventDefault()
        const data = serializeForm(ev.target)
        setFormulario(data)
    }

    const handlerChange = ({ target }) => {

        const { name, value } = target

        setFormulario({
            ...formulario,
            [name]: value
        })
    }
/**useForm(): Se importa y se utiliza el hook useForm dentro del componente.
 * 
handlerSubmit: Se asigna al evento onSubmit del formulario para gestionar el envío de los datos.

handlerChange: Se asigna al evento onChange de cada campo para actualizar el estado cuando el usuario escriba en los inputs.
 * 
 */

    return {
        handlerSubmit,
        handlerChange,
        formulario
    }
}
