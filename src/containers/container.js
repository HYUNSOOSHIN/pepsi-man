import React from "react"
import { connect } from "react-redux"
import { compose } from "redux"
import { setAlbums, setAlbum, setTrack, setTalk, setProduct } from "../reducers/reducer"

const mapStateToProps = (state) => ({
  albums: state.reducer.albums,
  album: state.reducer.album,
  track: state.reducer.track,
  talks: state.reducer.talks,
  talk: state.reducer.talk,
  products: state.reducer.products,
  product: state.reducer.product,
})

const mapDispatchToProps = (dispatch) => ({
  setAlbums: (param) => dispatch(setAlbums(param)),
  setAlbum: (param) => dispatch(setAlbum(param)),
  setTrack: (param) => dispatch(setTrack(param)),
  setTalk: (param) => dispatch(setTalk(param)),
  setProduct: (param) => dispatch(setProduct(param)),
})

const WithHoc = (ChildComponent) => (props) => {
  return <ChildComponent {...props} />
}

export default compose(connect(mapStateToProps, mapDispatchToProps), WithHoc)
