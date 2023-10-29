const initState = {
    identity: ''
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case 'DummyState': 
            return {
                ...state
            }
        default:
            return state
    }
}

export default reducer; 