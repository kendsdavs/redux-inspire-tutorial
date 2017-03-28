import React from 'react'

const Card = (props) => {
  return (
    <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
      <img src={props.image} className="db w-100 br2 br--top" alt={props.title} />
      <div className="pa2 ph3-ns pb3-ns">
        <div className="dt w-100 mt1">
          <div className="dtc">
            <h1>{props.title}</h1>
          </div>
        </div>
        <p>
          {props.children}
        </p>
      </div>

    </article>
  )
}

export default Card
