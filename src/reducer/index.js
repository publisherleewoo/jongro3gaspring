import { combineReducers } from "redux";
import { testReducer, testMySaga } from "./test";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
    testReducer,
});

function* rootSaga() {
    yield all([testMySaga()]);
}

export { rootReducer, rootSaga };
