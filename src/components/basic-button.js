import React from 'react'

const BasicButton = function (props) {
  return (
    <button onClick={props.onClick}>
      {props.children || 'Submit'}
    </button>
  )
}

export default BasicButton
