import React, { Component } from 'react'

export default class Bt2 extends Component {
    
  render() {
    let a = 10
    let b = 10
    let c = a+ b
    let d = a - b
    let e = a * b
    let f = a/b
    return (
      <div>
        <p>{a}+{b}={c}</p>
            <p>{a}-{b}={d}</p>
            <p>{a}x{b}={e}</p>
            <p>{a}/{b}={f}</p>
      </div>
    )
  }
}
