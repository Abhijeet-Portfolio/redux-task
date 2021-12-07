const initialState = {
    arr: []
}

const AddEmp = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD':
            return {
                ...state,
                arr: [...state.arr,action.payload]
            };
        case 'REMOVE':            
            return {
                arr: state.arr.filter((element,key) => key !== action.payload)
            };
        default:
            return state
    }
}

export default AddEmp;