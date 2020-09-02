const staffsInitialState = []

const staffsReducer = (state = staffsInitialState, action) => {
    switch(action.type) {
        case 'SET_STAFFS' : {
            return [].concat(action.payload)
        }
        default: {
            return [].concat(state)
        }
    }
}
export default staffsReducer