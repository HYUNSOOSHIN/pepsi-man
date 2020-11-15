import { connect } from "react-redux"
import React from "react"
import { compose } from "redux"
import { setCount } from "../modules/reducer"

const mapStateToProps = (state) => ({
  count: state.reducer.count,
})

const mapDispatchToProps = (dispatch) => ({
  setCount: (param) => dispatch(setCount(param)),
})

const WithHoc = (ChildComponent) => (props) => {
  return <ChildComponent {...props} />
}

export default compose(connect(mapStateToProps, mapDispatchToProps), WithHoc)
