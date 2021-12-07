export const detail = value => {    
    return {
        type: 'ADD',
        payload: value
    }
}

export const remove = value => {
    return {
        type: 'REMOVE',
        payload: value
    }
}

export const edit = (value,key) => {
    return {
        type: 'EDIT',
        payload: value,
        ID: key
    }
}