import React from "react";
import Photo from "../../components/Photo/Photo";
import Spinner from "../../components/UI/Spinner/Spinner";
import classes from "./MarsPhotos.module.css";
import Backdrop from "../../components/Backdrop/Backdrop";
import { API_KEY } from "../../api-key";
import { connect } from "react-redux";
import MarsCard from '../../components/MarsCard/MarsCard'
import * as actions from "../../store/actions/index";

class MarsPhotos extends React.Component {
  state = {
    url:
      "/mars-photos/api/v1/rovers/curiosity/photos?sol=" +
      1 +
      "&api_key=" +
      API_KEY,
  };

  componentDidMount() {
    this.props.onLoadMarsPhotos(this.state.url);
  }
  onViewModal = (id) => {
    this.props.onSelectMarsPhoto(id)
  };
  onRemoveModal = () => {
    this.props.onRemoveMarsPhoto()
  };

  render() {
    let photos = null;
    if (!this.props.loading) {
      photos = this.props.photos.map((photo, index) => {
        return (
          <Photo
            key={photo.id}
            cameras={photo.cameras}
            photo={photo}
            id={photo.id}
            viewModal={() => this.onViewModal(photo.id)}
            removeModal={this.onRemoveModal}
            show={this.props.displayModal}
          />
        );
      });
    }
    console.log(this.props.displayModal)
    return (
      <div>
        {this.props.loading ? <Spinner /> : null}
        <div className={classes.GridContainer}>{photos}</div>
        {this.props.displayModal ? <MarsCard 
                                show={this.props.displayModal}
                                closed={this.onRemoveModal}
                                url={this.props.photo.img_src}
                                alt='Mars as seen from'/> : null}
        {this.props.displayModal ? (
          <Backdrop show={this.props.displayModal} />
        ) : null}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoadMarsPhotos: url => dispatch(actions.fetchMarsPhotos(url)),
    onSelectMarsPhoto: id => dispatch(actions.fetchMarsPhotoById(id)),
    onRemoveMarsPhoto : () => dispatch(actions.removeMarsPhotoFromModal())
  };
};

const mapStateToProps = state => {
  return {
    photos: state.photos,
    loading: state.photos.loading,
    displayModal: state.displayModal,
    photo : state.photo
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MarsPhotos);
