export const counterReducer = (state, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {count: state.count + 1}

        case 'INCREMENTBY2':
            return {count: state.count + 2}

        case 'DECREMENT':
            return {count: state.count - 1}

        case 'RESET':
            return {count: 0}
        
        default:
            return state;
    }
}

export const INCREMENT = "INCREMENT"; 
export const INCREMENTBY2 = "INCREMENTBY2"; 
export const DECREMENT = "DECREMENT"; 
export const RESET = "RESET"; 