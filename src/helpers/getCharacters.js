/* import { apiRest } from "./apiRest"

export const getCharacters = async() => {
    if (!category) return

    const url = `${import.meta.env.VITE_URL_BASE}`
    const { characters } = await apiRest(url)

    const images = characters.map((image) => (
        {
            id: image.id,
            clase:image.clase,
            fuerza:image.fuerza,
            inteligencia:image.inteligencia,
            habilidades:image.habilidades,
            categoria:image.categoria,

        }
    ))
    return images (
        <div>getCharacters</div>
    )
} */
