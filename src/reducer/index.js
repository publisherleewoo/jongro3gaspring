const PLUS = "/COUNTER/PLUS";
const MINUS = "/COUNTER/MINUS";

export const plusAction = () => {
    return {
        type: PLUS,
    };
};

export const minusAction = () => {
    return {
        type: MINUS,
    };
};

function reducer(state = 0, action) {
    switch (action.type) {
        case PLUS:
            return state + 1;
        case MINUS:
            return state - 1;
        default:
            return state;
    }
}

export default reducer;
