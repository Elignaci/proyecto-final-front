/* initialState = [
    {
        nombre: 'luca',
        password: 'pelu'
    }
]

export const reducer = (state = initialState, action) => {
    if ( action.type === '[USUARIO] add user')
    {
        return [...state, action.payload]
    }


    return state
}

const usuarios = introReducer()

const newState = {

}

const addUser = {
    type: '[USUARIO] add user',
    payload: newState
}

usuarios = introReducer(usuarios, addUser) */