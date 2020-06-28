export const plusAction = () => {
    return {
        type: "plus",
    };
};

export const minusAction = () => {
    return {
        type: "minus",
    };
};

function reducer(state = 0, action) {
    switch (action.type) {
        case "plus":
            return state + 1;
        case "minus":
            return state - 1;
        default:
            return state;
    }
}

export default reducer;
