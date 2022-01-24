import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as countAction from '../store/action/count.action'

function Count ({count, increment, decrement, incrementSync}) {
  return (
    <div>
      <button onClick={() => incrementSync(1)}>+</button>
      <span>{count}</span>
      <button onClick={() => decrement(1)}>-</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    count: state.count.count
  }
}

const mapActionToProps = dispatch => bindActionCreators(countAction ,dispatch)

export default connect(mapStateToProps, mapActionToProps)(Count)
