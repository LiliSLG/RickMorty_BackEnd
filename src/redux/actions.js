export const addFavorite = (character)=>{
    return {
        type: 'ADD_FAV',
        payload: character
    }
}

export const removeFavorite = (id)=>{
    return {
        type: 'REMOVE_FAV',
        payload: id
    }
}