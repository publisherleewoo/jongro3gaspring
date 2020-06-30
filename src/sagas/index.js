import testMySaga from "./testSaga";
import { all } from "redux-saga/effects";
function* rootSaga() {
    yield all([testMySaga()]);
}

export default rootSaga;
