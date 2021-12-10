export const Add = data => {
    return {
        type:'ADD',
        payload: data
    }
}

export const Delete = id => {
    return {
        type:'DELETE',
        payload: id
    }
}

export const Status = id => {
    return {
        type:'STATUS',
        payload: id
    }
} 

export const completeAll = () => {
    return {
        type:'COMPLETE_ALL'
    }
}

export const deleteCompleteTask = () => {
    return {
        type:'DELETE_COMPLETE_TASK'
    }
}