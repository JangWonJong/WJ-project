import { all } from 'redux-saga/effects';
import { watchJoin, watchLogin, watchLogout} from "./user.saga.ts";
import { watchBoard } from './board.saga.ts';

export default function* rootSaga() {
    yield all([watchJoin(), watchLogin(), watchLogout(), watchBoard()]);
}
