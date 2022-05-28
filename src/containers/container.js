import React from "react"
import { connect } from "react-redux"
import { compose } from "redux"
import { setTalk } from "../reducers/reducer"

const mapStateToProps = (state) => ({
  albums: state.reducer.albums,
  album: state.reducer.album,
  track: state.reducer.track,
  talks: state.reducer.talks,
  talk: state.reducer.talk,
})

const mapDispatchToProps = (dispatch) => ({
  setTalk: (param) => dispatch(setTalk(param)),
})

const WithHoc = (ChildComponent) => (props) => {
  return <ChildComponent {...props} />
}

export default compose(connect(mapStateToProps, mapDispatchToProps), WithHoc)
