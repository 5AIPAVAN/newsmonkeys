import React, { Component } from 'react'
import loading from "./loading.gif"
export class Spinner extends Component {
  render() {
    return (
      <div>
        <img src={loading} alt="LOADING ANIMATION"/>
      </div>
    )
  }
}

export default Spinner
