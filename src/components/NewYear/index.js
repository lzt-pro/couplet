import React, { Component } from 'react'
import css from './index.module.css'
export default class NewYear extends Component {
    render() {
        return (
            <div className={css.new_year}>
                <span>202</span>
                <span className={css.eight}>0</span>
                <span className={css.nine}>1</span>
                <div className={css.balloon}></div>
            </div>
        )
    }
}
