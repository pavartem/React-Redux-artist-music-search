const initialState = {
    search: [
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
    ]
}


export default function searchEngine(state = initialState, action) {
    switch (action.type) {
        case "START_SEARCH":
            return {...state, search: action.payload}
        case "END_SEARCH":
            return initialState
        default:
            return state
    }
}