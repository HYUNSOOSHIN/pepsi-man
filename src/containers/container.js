import React from "react"
import { connect } from "react-redux"
import { compose } from "redux"
import { setAlbums, setAlbum, setTrack } from "../reducers/reducer"

const mapStateToProps = (state) => ({
  albums: state.reducer.albums,
  album: state.reducer.album,
  track: state.reducer.track,
})

const mapDispatchToProps = (dispatch) => ({
  setAlbums: (param) => dispatch(setAlbums(param)),
  setAlbum: (param) => dispatch(setAlbum(param)),
  setTrack: (param) => dispatch(setTrack(param)),
})

const WithHoc = (ChildComponent) => (props) => {
  return <ChildComponent {...props} />
}

export default compose(connect(mapStateToProps, mapDispatchToProps), WithHoc)
