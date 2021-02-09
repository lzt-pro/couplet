import React, { Component } from 'react'
import css from './index.module.css'
import couplet from './fu.png'
import {Link,withRouter} from 'react-router-dom'
class index extends Component {
    handleClick = ()=>{
        this.props.history.replace('/spring')
        // console.log('@')
    }
    render() {
        return (
            <div className = "nav">
            <button onClick={this.handleClick}>
            <img className = {css.couplet} src = {couplet} height="100" width="100" />
            </button> 
            </div>
        )
    }
}
export default withRouter(index)
