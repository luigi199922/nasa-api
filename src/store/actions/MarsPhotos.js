import * as actions from './actionTypes'
import axios from '../../axios-orders'

export const fetchMarsPhotosSuccess = (photos) => {
    return {
        type : actions.FETCH_MARSPHOTOS_SUCCESS,
        photos : photos,
    }
}
export const fetchMarsPhotosFailed = (err) => {
    return {
        type : actions.FETCH_MARSPHOTOS_FAILED,
        error: err,
    }
}

export const fetchMarsPhotos = url => {
  return dispatch => {
    axios.get(url).then(res =>
        dispatch(fetchMarsPhotosSuccess(res.data.photos))
    ).catch(err => {
        dispatch(fetchMarsPhotosFailed(err))
    })
  };
};

export const fetchMarsPhotoById = id => {
    return {
        type : actions.FETCH_MARSPHOTO_BY_ID,
        id : id,
    }
}

export const removeMarsPhotoFromModal = () => {
    return {
        type : actions.REMOVE_MARSPHOTO_MODAL,
    }
}