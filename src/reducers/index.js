const initialState = {
    array: []
}

const Todolist = (state = initialState, action) => {
    switch(action.type){
        case 'ADD':
            return {
                ...state,
                array: [...state.array,action.payload]
            }
        case 'DELETE':
            return {
                array: state.array.filter((data,key) => key !== action.payload)
            }
        case 'STATUS':
            return {
                array: state.array.map((data,key) => {
                    if(key === action.payload) {
                        data.complete = !data.complete
                    }
                    return data;
                })
            }
        case 'COMPLETE_ALL':
            return {
                array: state.array.map(data => {
                    data.complete = true;
                    return data;
                })
            }
        case 'DELETE_COMPLETE_TASK':
            return {
                array: state.array.filter(data => !data.complete)
            }
        default:
            return state
    }
}

export default Todolist;