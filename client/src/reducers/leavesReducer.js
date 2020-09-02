const leavesinitialState = []

const leavesReducer = (state = leavesinitialState,action) => {
    switch(action.type) {
        case 'SET_LEAVES': {
            return [...action.payload]
        }
        // case 'ADD_LEAVE': {
        //     return [...state,action.payload]
        // }
        default: {
            return [...state]
        }
    }
}
export default leavesReducer