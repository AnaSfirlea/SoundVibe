import Actions from './actions';

const storeData = data => ({ type: Actions.STORE_RESULTS, data });
const setError = (errorCode) => ({type: Actions.FETCH_ERROR, errorCode});

export { storeData, setError };
