const initialState = {
    myFavorites: []
}

// export default (state = initialState, action) => {
const FavReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'ADD_FAV': {
            return {
                ...state,
                myFavorites:
                    [...state.myFavorites,
                        payload]
            }
        }
        case 'REMOVE_FAV': {
            const filtered =
                state.myFavorites.filter((character) =>
                    character.id !== +payload)
            return {
                ...state,
                myFavorites: filtered
            }
        }
        default:
            return { ...state };
    }
}

export default FavReducer;