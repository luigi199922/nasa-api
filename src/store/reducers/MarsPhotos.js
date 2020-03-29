import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../../shared/utility'
const initialState = {
    photos: [],
    loading: true,
    photo: {},
    error: {},
    displayModal: false,
}

const updateMarsPhotosSuccess = (state, action) => {
    let photosArray = action.photos
    photosArray.pop()
    return updateObject(state, {photos : photosArray, loading: false})
}
const updateMarsPhotosFailed = (state, action) => {
    return updateObject(state, {loading: false, error: action.error} )
}
const updateMarsPhotoById = (state, action) => {
    const marsPhotoArray = state.photos.filter(photo => photo.id === action.id)
    const marsPhotoObject = marsPhotoArray[0];
    console.log(marsPhotoObject)
    return updateObject(state, {photo: marsPhotoObject, displayModal: true})
}
const updateRemoveMarsPhotoModal = (state,action) => {
    return updateObject(state , {displayModal: false, photo : {}})
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.FETCH_MARSPHOTOS_SUCCESS: return updateMarsPhotosSuccess(state, action)
        case actionTypes.FETCH_MARSPHOTOS_FAILED: return updateMarsPhotosFailed(state,action)
        case actionTypes.FETCH_MARSPHOTO_BY_ID: return updateMarsPhotoById(state,action)
        case actionTypes.REMOVE_MARSPHOTO_MODAL: return updateRemoveMarsPhotoModal(state,action)
        default: return state
        
        
    }
}
export default reducer