import React from 'react'
import Button from '../components/basic-button'
import Card from '../components/card'
import {connector} from '../store'

const Quote = function (props) {
  return (
    <div>
      <header className="ma0 pt2 bg-purple white bb b--black tc">
        <h1>{props.title}</h1>
      </header>
      <center className="mt4">
        <Button onClick={props.getQuote} />
      </center>
      {props.quote && <Card title="Kendra's Quote" image="http://lorempixel.com/400/200/nature/" >
        {props.quote.quoteText + " - " + props.quote.quoteAuthor}
      </Card>}
    </div>
  )
}

export default connector(Quote)
