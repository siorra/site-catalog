// import { call, takeLatest, put, all, CallEffect, AllEffect } from 'redux-saga/effects';
import { takeLatest, put,  } from 'redux-saga/effects';

import axios from 'axios';


import { ActionTypes } from './actions';

function* loadBalance(action: any) {
  try {
    // const result = yield axios.get(`https://api.github.com/repos/barbar/vortigern`);
    const result = yield axios.get(`http://rti-ck.kz/rti.php`);
    console.log('loadBalance', result.data);
    yield put({ type: ActionTypes.LOAD_BALANCE_SUCCESS });
  } catch (e) {
    yield put({ type: ActionTypes.LOAD_BALANCE_FAIL });
    //yield put(LoadBalanceFail);
  }
}

export default [
  takeLatest(ActionTypes.LOAD_BALANCE, loadBalance),
];
