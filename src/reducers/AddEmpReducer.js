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
        case 'EDIT':
            return {
                arr: state.arr.map((value,key) => {
                    if(key === action.ID) {
                        value.fname = action.payload.fname;
                        value.dept = action.payload.dept;
                    }
                    return value;
                })
            }
        default:
            return state
    }
}

export default AddEmp;