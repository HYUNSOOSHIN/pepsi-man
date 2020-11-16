import { connect } from "react-redux"
import React from "react"
import { compose } from "redux"
import { setAlbums, setAlbum, setTrack } from "../modules/reducer"

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
