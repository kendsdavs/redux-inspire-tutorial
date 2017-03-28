import { createStore, applyMiddleware } from 'redux'
import { connect } from 'react-redux'
import { merge } from 'ramda'
import fetch from 'isomorphic-fetch'
import thunk from 'redux-thunk'
const url = process.env.REACT_APP_API

const SET_QUOTE = 'SET_QUOTE'

const rootReducer = function (state = {
  title: 'Inspire',
  quote: ''
}, action) {
  switch (action.type) {
    case SET_QUOTE:
      return merge(state, { quote: action.payload })
    default:
      return state
  }
}

const store = createStore(rootReducer, applyMiddleware(thunk))

const mapActionsToProps = function (dispatch) {
  const dispatchQuote = quote => dispatch({type: SET_QUOTE, payload: quote})

  return {
    getQuote: () => fetch(url)
    .then(res => res.json())
    .then(res => {
      console.log(res)
      return res
    })
    .then(dispatchQuote)
  }
}

const mapStateToProps = (state) => state

const connector = connect(mapStateToProps, mapActionsToProps)

export {store, connector}
