import {createStore} from 'redux';
import {status, sort} from './actions/index'
import myReducer from './reducers/index'

const store = createStore(myReducer);
console.log('DEFAULT : ',  store.getState());
// thực hiện cv thay đổi stt
store.dispatch(status());
console.log('TOGGLE_STATUS : ', store.getState());
// thực hiện cv sx từ Z-A

store.dispatch(sort({
    by : 'name',
    value : -1,
}));
console.log('SORT : ', store.getState());

