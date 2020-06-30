import { delay, put, takeLatest } from "redux-saga/effects";

import { REQUEST, SUCCESS, FAILUER } from "../actions/actionType.js";

function* fetchUser(action) {
    try {
        yield delay(2000);
        console.log("실행");
        // const user = yield call(Api.fetchUser, action.payload.userId);
        // yield put({ type: SUCCESS, user: user });
        yield put({ type: SUCCESS, payload: "성공" });
    } catch (e) {
        yield put({ type: FAILUER, message: e.message });
    }
}

function* testMySaga() {
    yield takeLatest(REQUEST, fetchUser);
}

export default testMySaga;
