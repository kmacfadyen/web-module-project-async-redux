import axios from "axios";

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';

export const getGifs = (searchTerm) => {
    return (dispatch => {   // with thunk we can return a function with dispatch in it
        // props.fetchStart();
        dispatch(fetchStart());
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=eF68i1SpJhoVnYQRTDKYcXdtpZlGeJDP&q=${searchTerm}`)
    .then(res => {
      // console.log(res.data.data);
    //   props.fetchSuccess(res.data.data);
        dispatch(fetchSuccess(res.data.data));
    })
    .catch(err => console.error(err))
    });
}

export const fetchStart = () => {
    return ({
        type: FETCH_START
    });
}

export const fetchSuccess = (gifs) => {
    return ({
        type: FETCH_SUCCESS,
        payload: gifs
    });
}