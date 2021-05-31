var initialState = {
    status : false,
    sort : {
        by : 'name',
        value : 1
    }
};
var myReducer = (state = initialState, action) => {
    if(action.type === 'TOGGLE_STATUS'){
        state.status = !state.status;
    }
    if(action.type === 'SORT'){
        var {by, value} = action.sort;
        var {status} = state;
        return {
            status : status,
            sort : {
                by : by,
                value : value
            }
        }

    }
    return state;
}

export default myReducer;