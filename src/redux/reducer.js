import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './actions'

const initialState = {
    myFavorites: [],
    allCharacters: []
}

// export default (state = initialState, action) => {
const FavReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV: {
            return {
                ...state,
                allCharacters:
                    [...state.allCharacters,
                        payload],
                myFavorites:
                    [...state.allCharacters,
                        payload]
            }
        }
        case REMOVE_FAV: {
            const filtered =
                state.myFavorites.filter((character) =>
                    character.id !== +payload)
            return {
                ...state,
                myFavorites: filtered
            }
        }
        case FILTER: {
            let filterByGender = [];
            if (payload !== 'All') {
                filterByGender = [...state.allCharacters].filter((character) =>
                    character.gender === payload)
            } else { filterByGender = state.allCharacters }
            return {
                ...state,
                myFavorites: filterByGender
            }
        }
        case ORDER: {
            const ordered = [...state.allCharacters].sort((a, b) => {
                if (a.id > b.id) {
                    return payload === 'Ascendente' ? 1 : -1
                } else
                    if (a.id < b.id) {
                        return payload === 'Descendente' ? 1 : -1
                    } else return 0
            })
            //!otra opcion
            // if (payload === 'Ascendente') {
            //     return a.id > b.id ? 1 : -1
            // } else {
            //     return a.id < b.id ? 1 : -1
            // }                      
            return {
                ...state,
                myFavorites: ordered
            }
        }
        default:
            return { ...state };
    }
}

export default FavReducer;