import React, { Component } from 'react'
import css from './index.module.css'
export default class indxe extends Component {
  render() {
    return (
      <div className={css.fireworks}>
        <div className={css.f1}>
          <span><i></i></span>
          <span><i></i></span>
          <span><i></i></span>
        </div>
        <div className={css.f2}>
          <span><i></i></span>
          <span><i></i></span>
          <span><i></i></span>
        </div>
        <div className={css.f3}>
          <span><i></i></span>
          <span><i></i></span>
          <span><i></i></span>
        </div>
        <div className={css.f4}>
          <span><i></i></span>
          <span><i></i></span>
          <span><i></i></span>
        </div>
      </div>
    )
  }
}
