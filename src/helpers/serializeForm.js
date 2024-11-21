
/**La función serializeForm se utiliza para transformar los datos de un formulario HTML en un objeto JavaScript que puede ser manipulado fácilmente en tu aplicación.
 * 
 * @param {FormData} formulario FormData en JavaScript es una clase nativa de este lenguaje de programación que nos permite realizar validaciones de formularios y traer datos de estos componentes.
 * name: es el nombre del atributo
 * Value: el valor del input 
 * @returns 
 */
export const serializeForm = (formulario) => {
    const formData = new FormData(formulario)

    const data = {}

    for (let [name, value] of formData) {
        data[name] = value
    }

    return data

}