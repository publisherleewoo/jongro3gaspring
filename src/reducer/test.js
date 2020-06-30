import { SUCCESS, FAILUER } from "../actions/actionType.js";

function testReducer(state = null, action) {
    switch (action.type) {
        case SUCCESS:
            return action.payload;
        case FAILUER:
            return action.message;
        default:
            return state;
    }
}

export default testReducer;
