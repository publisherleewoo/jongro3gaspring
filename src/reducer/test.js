import { delay, put, takeLatest } from "redux-saga/effects";

const REQUEST = "/TEST/REQUEST";
const SUCCESS = "/TEST/SUCCESS";
const FAILUER = "/TEST/FAILUER";

export const plusAction = () => {
    return {
        type: REQUEST,
    };
};

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

export { testReducer, testMySaga };
